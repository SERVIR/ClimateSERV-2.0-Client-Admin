//Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import ClimateSERV_Logo                  from '../../img/ClimateSERV_Logo.png';

// The Header creates links that can be used to navigate  
// between routes.
/*
const Header = () => (
  <header className="cserv_header">
    <div className="cserv_logo_container">
      <img src={ClimateSERV_Logo} alt="ClimateSERV_Logo" />
      
    </div>
    <div className="cserv_admin_title_2">Admin</div>
    
    <div className="cserv_header_nav_container">
      <nav>
        <div className="link_container"><Link to='/'>Home</Link></div>
      </nav>
    </div>
    <div className="div_clear_both"></div>
  </header>
)
*/

export class Header extends React.Component
{

  back_button__click(e)
  {
      window.history.back();
      // <div onClick={(e) => this.back_button__click(e)}>
  }
  render()
  {
    var is_logged_in = false;


    return (
      <header className="cserv_header">
      <div className="cserv_logo_container">
        <img src={ClimateSERV_Logo} alt="ClimateSERV_Logo" />
        {/*<div className="cserv_admin_title">Admin</div>*/}
      </div>
      <div className="cserv_admin_title_2">Admin</div>
      <div className="cserv_header_nav_container">
        <nav>
          <div className="link_container"><Link to='/'>Home</Link></div>
        </nav>
      </div>
      <div className="div_clear_both"></div>
      { /* <div className="back_button_generic" onClick={(e) => this.back_button__click(e)}>[&lt;-]</div> */ }
      <div className="back_button_generic" onClick={(e) => this.back_button__click(e)}><i className="far fa-arrow-alt-circle-left"></i></div>
    </header>
    );
  }
}





// NOTES
// // Issue with the combination of more than one slash and then having hyphens AND underscores in path names all together - using react router dom.
// https://stackoverflow.com/questions/50088100/matching-routes-with-hyphens-in-react-router

// GARBAGE AND DEPRECATING

// <div className="cserv_admin_title">Admin</div>
// export { Header };

//export default Header
// <li><Link to='/schedule'>Schedule</Link></li>

// // <ul>
//           <li><Link to='/'>Home</Link></li>
//           <li><Link to='/main-login'>Login</Link></li>
//           <li><Link to='/main-logout'>Logout</Link></li>
//         </ul>