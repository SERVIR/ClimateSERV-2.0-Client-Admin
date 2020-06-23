// ETLLogs.js

import React from "react";
import { ApiService } 				from '../../../services/ApiService';

// Initialize API Service
const apiService_INSTANCE = new ApiService();

// To Import THIS component into a parent, use: (Double Check the Directory path)
// // //import { ETLLogs }   from '../ETLLogs'

// 
export class ETLLogs extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            StateVar_Placeholder: "Placeholder",
            //ClassName: "ETLLogs",
        };

        // Example of a handler getting bound (if needed)
        //this.handleOnRefresh = this.handleOnRefresh.bind(this);
        //this.api__GetServerVersions();
    }

    componentDidMount()
    {
        //console.log("ETLLogs.componentDidMount: Reached the end!");
    }

    // Placeholder for api__API_FUNCTION_NAME() {} // api__GetServerVersions() {}

    render()
    {
        //console.log("Login.render: was called.");

        let renderHTML = [];
        let keyCounter = 0;

        renderHTML.push(
            <div key={keyCounter} >
                <h1>ETLLogs Page</h1>
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