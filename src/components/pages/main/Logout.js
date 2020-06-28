// Logout.js

import React from "react"; 
import { ApiService } 				from '../../../services/ApiService';

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
                console.log(result);
                //try { this.setState({ Some_State_Property: result.data, Another_State_Property: true }); } catch(err) { }
                console.log("--- User Should be logged out of the backend now ---");



                // Setting the global SID
                /*eslint-disable */
                sid = "";
                setCookie("sid",sid,30);
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

        let renderHTML = [];
        let keyCounter = 0;

        renderHTML.push(
            <div key={keyCounter} >
                <h1>Logout Page</h1>
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