import React, { useState } from 'react';
import './Home.css';

const Home = ({ setSearch }) => {
  //controlling form
  const [term, setTerm] = useState('');

  


  // clear term by clicking on cross
  const clearTerm = () => {
    setTerm('');
  };

  // submit form

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  const handleSearch = () => {
    if (
     
      (/^[a-zA-Z0-9].*/.test(term.trim()) ||
        /^[a-zA-Z0-9]+[" "]/.test(term.trim()) ||
        /^[" "]+[a-zA-Z0-9]/.test(term.trim()))
    ) {
      setSearch(term.trim());
    }
  };

  
  

  return (
    <>
      
      <div className="container">
        <div className="row">
          <div className="col-md-12 home-screen align-items-center justify-content-center">
            
            <h1 style={{textAlign:'center','fontFamily':'cursive',color:'#840704'}}>Music Search App</h1>
            <div className="search-box col-md-7 border d-flex py-2 justify-content-between align-items-center">
              
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
            <div className="buttons col-md-4 ml-5 mt-4 align-items-center justify-content-center">
              
              <p style={{textAlign:'center','fontFamily':'cursive',color:'#840704'}}>Developed by <span  style={{fontFamily:'cursive'}}>Nasim</span></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home; 
