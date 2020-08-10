// APILogs.js

import React from "react"; 
import { ApiService } 				from '../../../services/ApiService';
import { ConfigService }            from '../../../services/ConfigService';
import { DataProcessingService }    from '../../../services/DataProcessingService';

// DataTables
import { MDBDataTableV5 }       from 'mdbreact';
import DocsLink                 from '../../mdbreact/components/docsLink';
import SectionContainer         from '../../mdbreact/components/sectionContainer';

// Initialize API Service
const apiService_INSTANCE               = new ApiService();
const configService_INSTANCE            = new ConfigService();
const dataProcessingService_INSTANCE    = new DataProcessingService();

// To Import THIS component into a parent, use: (Double Check the Directory path)
// // //import { APILogs }   from '../APILogs'

// 
export class APILogs extends React.Component
{
    constructor(props) 
    {
        super(props);
        this.state =
        {
            StateVar_Placeholder:                   "Placeholder",   
            current_objects_list_from_server:       [],
            objects_count:                          0,
            items_per_page:                         50,
            page_number:                            0,
            objects_type:                           "API_Log",
            total_db_objects_count_for_query:       0

            //ClassName: "APILogs",
        };

        // Example of a handler getting bound (if needed)
        //this.handleOnRefresh = this.handleOnRefresh.bind(this);
        //this.api__GetServerVersions();

        // TESTING - HARD CODING SOME STUFF HERE
        //let HC__object_uuid = "7JTu3W3xe8eH9BZcJ5Xk";
        //let HC__object_type = "APILog";
        //let object_uuid = this.props.object_uuid;
        //let object_type = this.props.object_type;
        let page_number = 0; 
        let items_per_page = 50; 
        let search_string = ""; //"get_server"; 
        let endpoint_name = "";//"/api_v2/get_server_versions/"; // ""; 
        let ip_address = ""; 
        let errors_only = false; //; true; // false; 
        let success_only = false;
        
        /*eslint-disable */
        this.api__admin_get_api_logs(sid, page_number, items_per_page, search_string, endpoint_name, ip_address, errors_only, success_only);
        /*eslint-enable */
        
        // Have to do some weird bind thing or the strings inside of the click handler don't 'stick' (last item in the loop is the one that gets passed for all)
        this.handleRowClick = this.handleRowClick.bind(this);
    }

    componentDidMount()
    {
        //console.log("APILogs.componentDidMount: Reached the end!");
    }

    // Placeholder for api__API_FUNCTION_NAME() {} // api__GetServerVersions() {}

    api__admin_get_api_logs(sid, page_number, items_per_page, search_string, endpoint_name, ip_address, errors_only, success_only)
    {
        // Call the API Service
        apiService_INSTANCE
            .admin_get_api_logs(sid, page_number, items_per_page, search_string, endpoint_name, ip_address, errors_only, success_only)
            .then(result =>
            {
                try { this.setState(
                    { 
                        //JSON_Object_To_Display: result.data.object_json,
                        //JSON_Object_UUID: result.data.object_uuid,
                        //JSON_Object_Type: result.data.object_type
                        current_objects_list_from_server: result.data.objects_list,
                        objects_count: result.data.objects_count,
                        items_per_page: result.data.items_per_page,
                        page_number: result.data.page_number,
                        objects_type: result.data.objects_type,
                        total_db_objects_count_for_query: result.data.total_db_objects_count_for_query,
                    }); } catch(err) { }
                console.log("api__admin_get_api_logs: Results (Next Line)");
                console.log(result);
                //try { this.setState({ Some_State_Property: result.data, Another_State_Property: true }); } catch(err) { }
                //console.log("FINISH DOING SOMETHING HERE!");

                // Setting the global SID
                /*eslint-disable */
                //let current_sid = sid;
                //sid = result.data.sid;
                //setCookie("sid",sid,30);
                /*eslint-enable */

            })
            .catch(error =>
            {
                //console.log("process_signin: .catch: (error) (Next Line)");
                //console.log(error);
            });
    }

    convert_server_results_to_data_tables_data()
    {
        // dataProcessingService_INSTANCE
        let log_table_type = "API_Logs";
        let config_object = configService_INSTANCE.get_config_object(); //"";
        let incoming_json_data = this.state.current_objects_list_from_server;
        let datatables_data = dataProcessingService_INSTANCE.convert_server_response_to_datatables_datastructure_for_logs(log_table_type, config_object, incoming_json_data); 
        
        console.log("APILogs.convert_server_results_to_data_tables_data: (datatables_data) (Next Line)");
        console.log(datatables_data);
        
        //return "TODO_FINISH_THIS";
        return datatables_data;
    }

    handleRowClick(uuid)
    {
        console.log("handleRowClick: (uuid): " + uuid);
        alert("APILogs.js: handleRowClick: STOPPED HERE - NEED TO MAKE THIS FUNCTION TAKE YOU TO DETAIL VIEW FOR: " + uuid);
        // http://localhost:3000/main-api-log-detail/3NcxCfDLbUCah2Yn8ykV
    }

    // raw_datatables_data.columns, raw_datatables_data.rows, 
    add_click_event_handlers_to_all_rows(raw_datatables_data)
    {
        let new_datatables_data = {};
        new_datatables_data.columns = raw_datatables_data.columns;

        var new_rows = [];
        for(var i=0; i<raw_datatables_data.rows.length; i++)
        {
            var current_row = raw_datatables_data.rows[i];
            
            //console.log(current_row.uuid);
            var current_row_uuid = current_row.uuid;
            //current_row.clickEvent = () => this.handleRowClick(current_row_uuid); // this.handleRowClick("abcd"); //this.handleClick(id);
            current_row.clickEvent = this.handleRowClick.bind(this, current_row_uuid); // this.handleRowClick("abcd"); //this.handleClick(id);

            new_rows.push(current_row);
        }

        new_datatables_data.rows = new_rows;

        return new_datatables_data;
    }

    render()
    {
        //console.log("Login.render: was called.");

        //let some_temp_data = this.convert_server_results_to_data_tables_data();
        let raw_datatables_data = this.convert_server_results_to_data_tables_data();   // raw_datatables_data.columns, raw_datatables_data.rows, 
        // Add Click Event Handler to each Row (using the UUID)
        let updated_datatables_data =this.add_click_event_handlers_to_all_rows(raw_datatables_data);
        


        let renderHTML = [];
        let keyCounter = 0;

        renderHTML.push(
            <div key={keyCounter} >
                <h1>APILogs Page</h1>
                <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={updated_datatables_data} />
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