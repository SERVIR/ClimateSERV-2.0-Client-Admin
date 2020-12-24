// TopContainer.js

import React, { Component }         from 'react';
import { ApiService } 				from '../services/ApiService';

// Initialize API Service
const apiService_INSTANCE = new ApiService();


class TopContainer extends Component 
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
        //console.log("TopContainer.componentDidMount: Reached the end!");
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
        console.log("TopContainer.render: was called.");

        let renderHTML = [];
        let keyCounter = 0;

        renderHTML.push(
            <div key={keyCounter} >
                Hello World from TopContainer.js
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

export { TopContainer };