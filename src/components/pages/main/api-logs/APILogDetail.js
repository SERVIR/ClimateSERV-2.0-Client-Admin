// APILogDetail.js

import React from "react"; 
import { ApiService } 				      from '../../../../services/ApiService';
import { GetObjectDetailByTypeAndUUID }   from '../../../../components/reusable/GetObjectDetailByTypeAndUUID';

// Initialize API Service
const apiService_INSTANCE = new ApiService();

// To Import THIS component into a parent, use: (Double Check the Directory path)
// // //import { APILogDetail }   from '../APILogDetail'

// 
export class APILogDetail extends React.Component
{
    constructor(props) 
    {
        super(props);
        this.state =
        {
            StateVar_Placeholder: "Placeholder",   
            //ClassName: "APILogDetail",
        };

        // Example of a handler getting bound (if needed)
        //this.handleOnRefresh = this.handleOnRefresh.bind(this);
        //this.api__GetServerVersions();
    }

    componentDidMount()
    {
        //console.log("APILogDetail.componentDidMount: Reached the end!");
    }

    // Placeholder for api__API_FUNCTION_NAME() {} // api__GetServerVersions() {}

    render()
    {
        console.log("APILogDetail.render: was called.");
        console.log("APILogDetail.render: this.props.match.params.uuid: " + this.props.match.params.uuid);
        let urlparam__uuid = this.props.match.params.uuid;
        let object_uuid = urlparam__uuid;
        let object_type = "APILog";
        

        let renderHTML = [];
        let keyCounter = 0;

        renderHTML.push(
            <div key={keyCounter} >
                <h1>APILogDetail Page</h1>
                <div>TESTING THE DETAIL VIEW HERE</div>
                <div>
                    <GetObjectDetailByTypeAndUUID object_type={object_type} object_uuid={object_uuid} />
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