// CreateNewUser.js

import React from "react"; 
import { ApiService } 				from '../../../../services/ApiService';

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

    render()
    {
        //console.log("Login.render: was called.");

        let renderHTML = [];
        let keyCounter = 0;

        renderHTML.push(
            <div key={keyCounter} >
                <h1>CreateNewUser Page</h1>
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
                      
                      <button className="btn btn-primary">Submit</button>
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