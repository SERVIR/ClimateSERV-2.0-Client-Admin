// LogsTableWrapper.js

import React from "react"; 
import { ApiService } 				from '../../services/ApiService';
import { ConfigService } 			from '../../services/ConfigService';
import { MDBDataTableV5 } 			from 'mdbreact';

// Initialize API Service
const apiService_INSTANCE 		= new ApiService();
const configService_INSTANCE 	= new ConfigService();  

// To Import THIS component into a parent, use: (Double Check the Directory path)
// // //import { LogsTableWrapper }   from '../LogsTableWrapper'


// Expected Incoming Properties (Props)
// // type					// The TYPE of Logs Table we are rendering ("API", "ETL", "SERVER", ... future types)
// // input__JSON_Data 		// The Incoming JSON Data

// 
export class LogsTableWrapper extends React.Component
{
    constructor(props) 
    {
        super(props);
        this.state =
        {
            StateVar_Placeholder: "Placeholder",   
            //ClassName: "LogsTableWrapper",
        };

        // Example of a handler getting bound (if needed)
        //this.handleOnRefresh = this.handleOnRefresh.bind(this);
        //this.api__GetServerVersions();
    }

    componentDidMount()
    {
        //console.log("LogsTableWrapper.componentDidMount: Reached the end!");
    }

    get_config_object()
    {
    	let config_object = configService_INSTANCE.get_config_object();
    	return config_object;
    }

    get_table_for_API_LOGS()
    {

    }

    // Placeholder for api__API_FUNCTION_NAME() {} // api__GetServerVersions() {}

    render()
    {
        //console.log("Login.render: was called.");

        let keyCounter = 0;

        var content_HTML = [];
        try
        {
        	if(this.props.type == "API") { content_HTML = this.get_table_for_API_LOGS(this.props.input__JSON_Data) }
        }
        catch(err)
        {

        }
        

        let renderHTML = [];
        

        renderHTML.push(
            <div key={keyCounter} >
                <h1>LogsTableWrapper Page</h1>
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