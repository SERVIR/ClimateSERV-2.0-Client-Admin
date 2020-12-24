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
        // Scroll page to the top
        try { window.scrollTo(0, 0); } catch(err_ScrollingToTop) { }

        //console.log("APILogDetail.componentDidMount: Reached the end!");
    }

    // Placeholder for api__API_FUNCTION_NAME() {} // api__GetServerVersions() {}

    render()
    {
        try
        {
            console.log("APILogDetail.render: was called.");
            console.log("APILogDetail.render: this.props.uuid: " + this.props.uuid);
            console.log("APILogDetail.render: this.props.match.params.uuid: " + this.props.match.params.uuid);
        }
        catch(err) {}

        var object_uuid = "";

        try
        {
            // First try to load from an incoming URL Param prop. (URL String Path passing in the uuid)
            let urlparam__uuid = this.props.match.params.uuid;
            object_uuid = urlparam__uuid;
        }
        catch(err)
        {
            try
            {
                // Now try to load from incoming prop.
                object_uuid = this.props.uuid;
            }
            catch(err) {}

        }

        let object_type = "APILog";
        

        let renderHTML = [];
        let keyCounter = 0;

        renderHTML.push(
            <div key={keyCounter} >
                <div className="page_title_container_generic"><h3>API Log Detail</h3></div>
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