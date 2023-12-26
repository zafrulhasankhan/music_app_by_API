import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


import './HeaderSearchPage.css';

const HeaderSearchPage = ({ searchTerm, setSearch }) => {
  //setTearm
  const [term, setTerm] = useState('');

  

  //set term
  useEffect(() => {
    setTerm(searchTerm);
    // eslint-disable-next-line
  }, []);



  //clear term
  const clearTerm = () => {
    setTerm('');
  };

  //   handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  //   handle search
  const handleSearch = () => {
    if (
      searchTerm !== term.trim() &&
      (/^[a-zA-Z0-9].*/.test(term.trim()) ||
        /^[a-zA-Z0-9]+[" "]/.test(term.trim()) ||
        /^[" "]+[a-zA-Z0-9]/.test(term.trim()))
    ) {
      setSearch(term.trim());
    }
  };

  return (
    <>
      
      <div className="search-page-header">
        <div className="col-md-12">
          <nav className="navbar py-3">
            <Link to="/" className="navbar-brand">
              
              <h3 className="image-fluid ml-5" style={{'fontFamily':'cursive',color:'#840704'}}>Music Search App</h3>
            </Link>
            <div className="search-box col-md-5 border d-flex py-2 justify-content-between align-items-center">
              <form className="form-search" onSubmit={(e) => handleSubmit(e)}>
                <input
                  type="text"
                  name="term"
                  id="term"
                  value={term}
                  onChange={(e) => setTerm(e.target.value)}
                />
              </form>
              {term ? (
                <i className="fa fa-close" onClick={() => clearTerm()}></i>
              ) : (
                ''
              )}
             <i className="fa fa-search" onClick={() => handleSearch()}></i>
            </div>
           
          </nav>
        </div>
      </div>
    </>
  );
};

export default HeaderSearchPage;
