// CreateNewUser.js

import React from "react"; 
import { ApiService }         from '../../../../services/ApiService';

// Initialize API Service
const apiService_INSTANCE = new ApiService();

// To Import THIS component into a parent, use: (Double Check the Directory path)
// // //import { CreateNewUser }   from '../CreateNewUser'

// 
export class CreateNewUser extends React.Component
{
    constructor(props) 
    {
        super(props);
        this.state =
        {
            StateVar_Placeholder: "Placeholder",   
            //ClassName: "CreateNewUser",
        };

        // Example of a handler getting bound (if needed)
        //this.handleOnRefresh = this.handleOnRefresh.bind(this);
        //this.api__GetServerVersions();
    }

    componentDidMount()
    {
        //console.log("CreateNewUser.componentDidMount: Reached the end!");
    }

    // Placeholder for api__API_FUNCTION_NAME() {} // api__GetServerVersions() {}

    api__admin_create_user(username, firstname, lastname, email, password, password_confirm)
    {
        /*eslint-disable */
        let current_sid = sid;
        /*eslint-enable */

        // Call the API Service
        apiService_INSTANCE
            .admin_create_user(current_sid, username, firstname, lastname, email, password, password_confirm)
            .then(result =>
            {
                //console.log("process_signin: Results (Next Line)");
                //console.log(result);
                

                // Placeholder for a better way to do this.
                try
                {
                    console.log(result);
                    if(result.data.result == "error")
                    {
                        let errorMessage = result.data.ErrorMessage;
                        alert("Error: " + errorMessage);
                    }

                    if(result.data.result == "success")
                    {
                        let successMessage = "Success! Admin User, " + result.data.new_user_info.username + " was just created!";
                        alert(successMessage);
                    }
                    
                }
                catch(err) { }


                //try { this.setState({ Some_State_Property: result.data, Another_State_Property: true }); } catch(err) { }
                //console.log("FINISH DOING SOMETHING HERE!");

                // Setting the global SID
                /*eslint-disable */
                //let current_sid = sid;
                //sid = result.data.sid;
                /*eslint-enable */

            })
            .catch(error =>
            {
                //console.log("process_signin: .catch: (error) (Next Line)");
                //console.log(error);
            });
    }

    execute__AdminCreateUser(username, firstname, lastname, email, password, password_confirm)
    {
        this.api__admin_create_user(username, firstname, lastname, email, password, password_confirm);
    }

    handle__AdminCreateUser__Click(e)
    {
        // Get Data from the Form
        /*eslint-disable */
        let create_new_user_input__username = $("#create_new_user_input__username").val();
        let create_new_user_input__firstname = $("#create_new_user_input__firstname").val();
        let create_new_user_input__lastname = $("#create_new_user_input__lastname").val();
        let create_new_user_input__email = $("#create_new_user_input__email").val();
        let create_new_user_input__create_password = $("#create_new_user_input__create_password").val();
        let create_new_user_input__confirm_password = $("#create_new_user_input__confirm_password").val();
        let is_Valid_Email = validateEmail(create_new_user_input__email);
        if(is_Valid_Email == false) 
        { 
            alert("Email address is not valid, please enter a valid email address and try again."); 
            return; 
        }
        /*eslint-enable */



        // Call The API with this form data.
        this.execute__AdminCreateUser(create_new_user_input__username, create_new_user_input__firstname, create_new_user_input__lastname, create_new_user_input__email, create_new_user_input__create_password, create_new_user_input__confirm_password);
    }


    render()
    {
        console.log("CreateNewUser.render: was called.");

        let renderHTML = [];
        let keyCounter = 0;

        renderHTML.push(
            <div key={keyCounter} >
                <div className="page_title_container_generic"><h3>Create New User</h3></div>
                <div className="generic_panel">
                    <form>
                      
                      <div className="form-group">
                        <label htmlFor="create_new_user_input__username">Create Username</label>
                        <input type="text" className="form-control" id="create_new_user_input__username" placeholder="Enter username"></input>
                      </div>

                      <div className="form-group">
                        <label htmlFor="create_new_user_input__firstname">First name</label>
                        <input type="text" className="form-control" id="create_new_user_input__firstname" placeholder="Enter first name"></input>
                      </div>

                      <div className="form-group">
                        <label htmlFor="create_new_user_input__lastname">Last name</label>
                        <input type="text" className="form-control" id="create_new_user_input__lastname" placeholder="Enter last name"></input>
                      </div>


                      <div className="form-group">
                        <label htmlFor="create_new_user_input__email">Email address</label>
                        <input type="email" className="form-control" id="create_new_user_input__email" aria-describedby="emailHelp" placeholder="Enter email"></input>
                        <small id="emailHelp" className="form-text text-muted">Email Addresses are never publicly visible.</small>
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="create_new_user_input__create_password">Create Password</label>
                        <input type="password" className="form-control" id="create_new_user_input__create_password" placeholder="Enter a new password"></input>
                      </div>

                      <div className="form-group">
                        <label htmlFor="create_new_user_input__confirm_password">Confirm Password</label>
                        <input type="password" className="form-control" id="create_new_user_input__confirm_password" placeholder="Enter the new password again."></input>
                      </div>
                      
                      <div className="btn btn-primary" onClick={(e) => this.handle__AdminCreateUser__Click(e)}>
                        Create New User
                      </div>

                    </form>
                </div>
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