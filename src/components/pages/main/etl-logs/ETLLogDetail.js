// ETLLogDetail.js

import React from "react"; 
import { ApiService } 				from '../../../../services/ApiService';

// Initialize API Service
const apiService_INSTANCE = new ApiService();

// To Import THIS component into a parent, use: (Double Check the Directory path)
// // //import { ETLLogDetail }   from '../ETLLogDetail'

// 
export class ETLLogDetail extends React.Component
{
    constructor(props) 
    {
        super(props);
        this.state =
        {
            StateVar_Placeholder: "Placeholder",   
            //ClassName: "ETLLogDetail",
        };

        // Example of a handler getting bound (if needed)
        //this.handleOnRefresh = this.handleOnRefresh.bind(this);
        //this.api__GetServerVersions();
    }

    componentDidMount()
    {
        //console.log("ETLLogDetail.componentDidMount: Reached the end!");
    }

    // Placeholder for api__API_FUNCTION_NAME() {} // api__GetServerVersions() {}

    render()
    {
        //console.log("Login.render: was called.");

        // Remove the back button on the pages that contain a specific div with id='hide_back_button'
        /*eslint-disable */
        setTimeout(function(){ check_for_back_button(); }, 50);
        /*eslint-enable */ 

        // Remove the back button on the pages that contain a specific div with id='hide_back_button'
        /*eslint-disable */
        setTimeout(function(){ check_for_back_button(); }, 50);
        /*eslint-enable */ 

        let renderHTML = [];
        let keyCounter = 0;

        renderHTML.push(
            <div key={keyCounter} >
                <div className="page_title_container_generic"><h3>ETL Log Detail</h3></div>
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