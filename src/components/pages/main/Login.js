// Login.js

import React from "react"; 
import { ApiService } 				from '../../../services/ApiService';

// Initialize API Service
const apiService_INSTANCE = new ApiService();

// To Import THIS component into a parent, use: (Double Check the Directory path)
// // //import { Login }   from '../Login'

// 
export class Login extends React.Component
{
    constructor(props) 
    {
        super(props);
        this.state =
        {
            StateVar_Placeholder: "Placeholder",   
            //ClassName: "Login",
        };

        // Example of a handler getting bound (if needed)
        //this.handleOnRefresh = this.handleOnRefresh.bind(this);
        //this.api__GetServerVersions();
    }

    componentDidMount()
    {
        //console.log("Login.componentDidMount: Reached the end!");
    }

    // Placeholder for api__API_FUNCTION_NAME() {} // api__GetServerVersions() {}

    api__process_signin(username, password)
    {
        /*eslint-disable */
        $(".login_form_status_message_error").hide();
        $(".login_form_status_message_success").hide();
        /*eslint-enable */

        // Call the API Service
        apiService_INSTANCE
            .process_signin(username, password)
            .then(result =>
            {
                // For Debugging (Uncomment these lines)
                //console.log("process_signin: Results (Next Line)");
                //console.log(result);
                
                // Set State example
                //try { this.setState({ Some_State_Property: result.data, Another_State_Property: true }); } catch(err) { }
                

                // Check to see if login worked or not.  Take appropriate action if login succeeded, or failed.

                var status_message_error_html = ""; 
                var status_message_success_html = "";
                // Check to see if login failed.
                try
                {
                    if(result.data.result == "error")
                    {
                        status_message_error_html = "Login Failed.<br />Message from Server: " + result.data.ErrorMessage;
                    }
                    if(result.data.result == "success")
                    {
                        // Login Succeded, // Setting the global SID
                        /*eslint-disable */
                        sid = result.data.sid;
                        setCookie("sid",sid,30);
                        status_message_success_html = "Login Successful.<br />Returning to the Home page.  If you are not auto forwarded, please click <a href='/'>this link</a>.";
                        $(".login_form_status_message_success").html(status_message_success_html);
                        $(".login_form_status_message_success").show();
                        /*eslint-enable */

                        // And then forwarding user to the 'home' page. 
                        setTimeout(function(){ window.location = "/"; }, 3000);
                    }

                }
                catch(err)
                {
                    status_message_error_html = "Login Failed.  Local JS Error: " + err;
                }

                
                if(status_message_error_html != "")
                {
                    /*eslint-disable */
                    $(".login_form_status_message_error").html(status_message_error_html);
                    $(".login_form_status_message_error").show();
                    /*eslint-enable */    
                }
                

                
            })
            .catch(error =>
            {
                //console.log("process_signin: .catch: (error) (Next Line)");
                //console.log(error);
            });
    }

    execute__Login(username, password)
    {
        this.api__process_signin(username, password);
    }

    handle__Login__Click(e)
    {
        // Get Data from the Form
        /*eslint-disable */
        let login_input__username = $("#login_input__username").val();
        let login_input__password = $("#login_input__password").val();
        /*eslint-enable */

        // Call The API with this form data.
        this.execute__Login(login_input__username, login_input__password);
    }

    render()
    {
        //console.log("Login.render: was called.");



        let renderHTML = [];
        let keyCounter = 0;

        renderHTML.push(
            <div key={keyCounter} className="login_container">
                <h3>Login to ClimateSERV</h3>
                <div className="generic_panel">
                    <form>
                        <div className="form-group">
                            <label htmlFor="login_input__username">Username</label>
                            <input type="text" className="form-control" id="login_input__username" placeholder="Enter username"></input>
                        </div>

                        <div className="form-group">
                            <label htmlFor="login_input__password">Password</label>
                            <input type="password" className="form-control" id="login_input__password" placeholder="Enter password"></input>
                        </div>
                      
                        <div className="btn btn-primary" onClick={(e) => this.handle__Login__Click(e)}>
                            Login
                        </div>
                    </form>
                    <br />
                </div>
                <div className="login_form_status_message_error"></div>
                <div className="login_form_status_message_success"></div>
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


// Garbage
//console.log("(login_input__username): " + login_input__username);
//console.log("(login_input__password): " + login_input__password);
// <div onClick={(e) => this.somefunction(e)}>
// <button type="submit" className="btn btn-primary">Login</button>







