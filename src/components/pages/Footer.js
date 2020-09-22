// Footer.js

import React from "react"; 
import { ApiService } 				from '../../services/ApiService';
import Servir_Logo                  from '../../img/Servir_Logo.png';

// Initialize API Service
const apiService_INSTANCE = new ApiService();

// To Import THIS component into a parent, use: (Double Check the Directory path)
// // //import { Footer }   from '../Footer'

// 
export class Footer extends React.Component
{
    constructor(props) 
    {
        super(props);
        this.state =
        {
            StateVar_Placeholder: "Placeholder",   
            //ClassName: "Footer",
        };

        // Example of a handler getting bound (if needed)
        //this.handleOnRefresh = this.handleOnRefresh.bind(this);
        //this.api__GetServerVersions();
    }

    componentDidMount()
    {
        //console.log("Footer.componentDidMount: Reached the end!");
    }

    // Placeholder for api__API_FUNCTION_NAME() {} // api__GetServerVersions() {}

    render()
    {
        //console.log("Login.render: was called.");

        let renderHTML = [];
        let keyCounter = 0;

        renderHTML.push(
            <div className="cserv_footer_container" key={keyCounter} >
                <div className="cserv_footer_logo_container">
                    <img src={Servir_Logo} alt="SERVIR_Logo" className="mx-auto d-block" />
                    <div className="cserv_footer_text">ClimateSERV 2.0 © 2020 | SERVIR GLOBAL</div> 
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