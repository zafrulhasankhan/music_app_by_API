import React, { useState } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';

import { Home } from './components/HomeScreen';

import MusicCards from './components/MusicCards/MusicCards';

import HeaderSearchPage from './components/Search/HeaderSearchPage';

const App = (props) => {
  let history = useHistory();
  const [musicData, setmusicData] = useState([]);
  const [Loading, setLoading] = useState(false);
  //search term
  const [searchTerm, setSearchTerm] = useState('');
  //set search term
  const setSearch = async (term) => {
    setSearchTerm(term);
    await setData(term);
    history.push('/search');
  };
  //set search data
  const setData = async (term) => {
    await SearchHandle(term);

  };

  const SearchHandle = async (term) => {
    setLoading(true);
    try {
      const response = await fetch(`https://itunes.apple.com/search?term=${term}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      setmusicData(data.results); 
    } catch (error) {
      console.error('Error fetching data from server:', error);
    } finally {
      setLoading(false);
    }
  };



  return (

    <>
      <Switch>

        <Route
          exact
          path={'/'}
          component={() => <Home setSearch={setSearch} />}
        />

        {searchTerm !== '' && !Loading ? (

            <Route
              exact
              path={'/search'}
              component={() => (

                <MusicCards
                  musicData={musicData}
                  searchTerm={searchTerm}
                  setSearch={setSearch}
                  loading={Loading}
                />
              )}
            />

        ) :

          <div className="search-page">
            {musicData.length?
            <>
            <HeaderSearchPage searchTerm={searchTerm} setSearch={setSearch} />
            <h4 style={{ fontFamily: 'cursive', textAlign: 'center', position: 'relative', top: '70px' }}>
              Loading....
            </h4>
            </>:
            <Redirect to="/" />
            }
          </div>


          }



        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
