import React from 'react';
import logo from './logo.svg';
import './App.css';

// Need Font Awesome - so the icons on the tables show up properly.
//import 'font-awesome/css/font-awesome.css';
//import './fontawesome.min.css';
//import './all.min.css';
import './fontawesome-free/css/all.min.css';

import { TopContainer }         from './components/TopContainer';
import { Header }               from './components/pages/Header';
import { DevHeader }            from './components/pages/DevHeader';
import { Main }                 from './components/pages/Main';
import { Footer }               from './components/pages/Footer';




function App() 
{
  // Check to make sure isCookieSet() is defined.  
  if( (typeof isCookieSet === "undefined") === true)
  {
    // If it is not, this is likely a routing error, so we want to forward back to the initial page.


    //console.log("App: Are we on the right page?");

    // Forwarding the user back to the original page.
    window.location = window.location.origin;

  }

  /*eslint-disable */
  let is_SID_Set = isCookieSet("sid");
  if(is_SID_Set == true)
    sid = getCookie("sid");
    /*eslint-enable */  

	
  return (
    <div className="app_container">
      <Header />
      <div className="cserv_main_outer_container">
        <Main />
      </div>
      <Footer />
      
    </div>
    
  );
}

export default App;

// <DevHeader />