//Home.js

// A kind of default / landing page - No login required here, but nothing to show either.

import React, { Component }         from 'react';
import { Link }                     from 'react-router-dom';
import { ApiService } 				from '../../../services/ApiService';

// Initialize API Service
const apiService_INSTANCE = new ApiService();


class Home extends Component 
{
    constructor(props) 
    {
        super(props);
        this.state =
        {
            StateVar_Placeholder: "Placeholder",   
            ServerVersionString: "",
        };

        this.api__GetServerVersions();
    }

    componentDidMount()
    {
        // Scroll page to the top
        try { window.scrollTo(0, 0); } catch(err_ScrollingToTop) { }
        //console.log("Home.componentDidMount: Reached the end!");
    }

    api__GetServerVersions()
    {
        // Call the API Service
        apiService_INSTANCE
            .get_server_versions()
            .then(result =>
            {
                //console.log("get_server_versions: Results (Next Line)");
                //console.log(result);
                //try { this.setState({ Some_State_Property: result.data, Another_State_Property: true }); } catch(err) { }
                console.log("FINISH DOING SOMETHING HERE!");

            })
            .catch(error =>
            {
                console.log("get_server_versions: .catch: (error) (Next Line)");
                console.log(error);
            });
    }

    render()
    {
        //console.log("Home.render: was called.");


        // Remove the back button on the pages that contain a specific div with id='hide_back_button'
        /*eslint-disable */
        setTimeout(function(){ check_for_back_button(); }, 50);
        /*eslint-enable */ 

        var is_logged_in = false;
        
        try
        {
            /*eslint-disable */
            let current_sid = sid;
            /*eslint-enable */ 
            // Checks to see if a user is already logged in or not (by checking if the sid variable is defined and not blank)
            if(current_sid != "") { if( typeof current_sid === 'undefined' || current_sid === null ) { is_logged_in = false;   } else { is_logged_in = true; } }
        }
        catch(err)
        {
            is_logged_in = false;
        }
        console.log(is_logged_in);

        
        var keyCounter = 0;
        let renderHTML = [];
        let menuHTML = [];
        if(is_logged_in == true)
        {
            // Show all the options (except Login)
            menuHTML.push(
                <div key={keyCounter} >
                    <ul>
                        <li><Link to='/main-dashboard'>Dashboard</Link></li>
                        <li><Link to='/main-api-logs'>API Logs</Link></li>
                        <li><Link to='/main-etl-logs'>ETL Logs</Link></li>
                        <li><Link to='/main-etl-granules'>ETL Granules</Link></li>
                        <li><Link to='/main-server-logs'>Server Logs</Link></li>
                    </ul>
                    <br />
                    <ul>
                        <li><Link to='/main-logout'>Logout</Link></li>
                    </ul>
                </div>
            );
        }
        else
        {
            // Show only the Login option.
            menuHTML.push(
                <div key={keyCounter} >
                    <div>You are not currently logged in.  Please Login to continue.</div>
                    <Link to='/main-login'>Login</Link>
                </div>
            );
        }
        keyCounter = keyCounter + 1;
        

        // -Move Dev Header down to the very bottom of the entire page/site (so when it is visible, it renders below the 'normal' admin site)
        // -Add a NASA/SERVIR logo to the top (Into the header)
        // -Add a very simple footer (small text, to say whatever the other pages already say)
        // -Put the login link where it should go (top right)
        // -Put the logout link where it should go (top right, when signed in)
        // -Put a different font up (something nice and rounded, roboto maybe?)
        

        renderHTML.push(
            <div key={keyCounter} >
                {/*<br /><br />*/}
                {/*<div className="page_title_container_generic"><h3>Home</h3></div>*/}
                <h4>Welcome to ClimateSERV 2.0 Admin Site</h4>
                <br />
                {menuHTML}
                <div id='hide_back_button'></div>
            </div>
        );
        keyCounter++;

        return (
            <div>
                {renderHTML}
            </div>
        );

    }
}

export { Home };



// DEFAULT - Garbage and Deprecating
//
// import React from 'react'
// const Home = () => (
//   <div>
//     <h1>Welcome to the Tornadoes Website!</h1>
//   </div>
// )
// export default Home


