// Logout.js

import React                from "react"; 
import { Link }             from 'react-router-dom';
import { ApiService } 		from '../../../services/ApiService';

// Initialize API Service
const apiService_INSTANCE = new ApiService();

// To Import THIS component into a parent, use: (Double Check the Directory path)
// // //import { Logout }   from '../Logout'

// 
export class Logout extends React.Component
{
    constructor(props) 
    {
        super(props);
        this.state =
        {
            StateVar_Placeholder: "Placeholder",   
            //ClassName: "Logout",
        };

        // Example of a handler getting bound (if needed)
        //this.handleOnRefresh = this.handleOnRefresh.bind(this);
        //this.api__GetServerVersions();

        /*eslint-disable */
        //console.log("LOGOUT: (constructor) CALLING this.api__process_signout(sid); NOW");
        this.api__process_signout(sid);
        /*eslint-enable */
    }

    componentDidMount()
    {
        //console.log("Logout.componentDidMount: Reached the end!");
    }

    // Placeholder for api__API_FUNCTION_NAME() {} // api__GetServerVersions() {}

    api__process_signout(sid)
    {
        // Call the API Service
        apiService_INSTANCE
            .process_signout(sid)
            .then(result =>
            {
                //console.log("process_signin: Results (Next Line)");
                //console.log(result);
                //try { this.setState({ Some_State_Property: result.data, Another_State_Property: true }); } catch(err) { }
                //console.log("--- User Should be logged out of the backend now ---");



                // Setting the global SID
                /*eslint-disable */
                // It looks like we cannot directly access global vars in some contexts to set them.. must use 'window.' prefix
                // sid = "";
                // setCookie("sid",sid,30);
                window.sid = "";
                window.setCookie("sid",window.sid,30);
                /*eslint-enable */

            })
            .catch(error =>
            {
                //console.log("process_signin: .catch: (error) (Next Line)");
                //console.log(error);
            });
    }


    render()
    {
        //console.log("Login.render: was called.");

        // Log the user out, calls the server to signout and wipes their local sid.
        /*eslint-disable */
        //console.log("LOGOUT: (render) CALLING this.api__process_signout(sid); NOW");
        this.api__process_signout(sid);
        /*eslint-enable */


        let renderHTML = [];
        let keyCounter = 0;

        renderHTML.push(
            <div key={keyCounter} >
                <div>You have been logged out.</div>
                <div>If you wish to continue, please log back in.</div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/main-login'>Login</Link></li>
                </ul>
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