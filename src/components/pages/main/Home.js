//Home.js

// A kind of default / landing page - No login required here, but nothing to show either.

import React, { Component }         from 'react';
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
        console.log("Home.render: was called.");

        let renderHTML = [];
        let keyCounter = 0;

        renderHTML.push(
            <div key={keyCounter} >
                Hello World from Home.js - Welcome to ClimateSERV 2.0 Admin Site
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


