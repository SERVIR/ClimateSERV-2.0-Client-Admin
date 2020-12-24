// APILogs.js

import React from "react"; 
//import { APILogDetail }             from './api-logs/APILogDetail';
import { GetObjectDetailByTypeAndUUID }   from '../../../components/reusable/GetObjectDetailByTypeAndUUID';
import { ApiService } 				      from '../../../services/ApiService';
import { ConfigService }                  from '../../../services/ConfigService';
import { DataProcessingService }          from '../../../services/DataProcessingService';


// DataTables
import { MDBDataTableV5 }       from 'mdbreact';
//import { MDBDataTable }         from 'mdbreact';
//import DocsLink                 from '../../mdbreact/components/docsLink';
//import SectionContainer         from '../../mdbreact/components/sectionContainer';

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
            current_AdvQueryConfig_form_html:       [], 
            current_objects_list_from_server:       [],
            objects_count:                          0,
            items_per_page:                         50,
            page_number:                            0,
            objects_type:                           "API_Log",
            total_db_objects_count_for_query:       0,
            
            adv_query__last_search_string:          "",
            adv_query__endpoint_name_value:         "",
            adv_query__ip_address:                  "",
            adv_query__result_state_value:          "",

            errors_only:                            false, 
            success_only:                           false,

            adv_query_hidden:                       true,

            detail_view_uuid:                       "",  

            //ClassName: "APILogs",
        };

        // Example of a handler getting bound (if needed)
        //this.handleOnRefresh = this.handleOnRefresh.bind(this);
        //this.api__GetServerVersions();

        // Reference to page location for detail view
        this.detailView_Ref = React.createRef();  // ref={this.detailView_Ref}

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

        
        let LOCAL_IsReplace_Results = true;
        let LOCAL_AdvQ_ResultState_Value = "ALL"; // For the UI radio buttons only
        /*eslint-disable */
        this.api__admin_get_api_logs(LOCAL_IsReplace_Results, LOCAL_AdvQ_ResultState_Value, sid, page_number, items_per_page, search_string, endpoint_name, ip_address, errors_only, success_only);
        /*eslint-enable */
        
        // Have to do some weird bind thing or the strings inside of the click handler don't 'stick' (last item in the loop is the one that gets passed for all)
        this.handle_Row_Click   = this.handle_Row_Click.bind(this);
        this.handle_ID_Click    = this.handle_ID_Click.bind(this);
        
        // handle_ID_Click
    }

    componentDidMount()
    {
        
        let this_reference = this;

        // Elements to Pre-hide
        /*eslint-disable */
        setTimeout(function()
        { 
            var is_AdvQueryConfig_hidden = $("#AdvQueryConfig").is(":hidden");
            if(is_AdvQueryConfig_hidden == false)  { this_reference.toggle_section_expand('e', 'AdvQueryConfig_expander', 'AdvQueryConfig', 0); }
        }, 100);
        /*eslint-enable */

        //console.log("APILogs.componentDidMount: Reached the end!");
    }

    // Placeholder for api__API_FUNCTION_NAME() {} // api__GetServerVersions() {}

    api__admin_get_api_logs(LOCAL_IsReplace_Results, LOCAL_AdvQ_ResultState_Value, sid, page_number, items_per_page, search_string, endpoint_name, ip_address, errors_only, success_only)
    {
        // Call the API Service
        apiService_INSTANCE
            .admin_get_api_logs(sid, page_number, items_per_page, search_string, endpoint_name, ip_address, errors_only, success_only)
            .then(result => {
                try 
                { 
                    if(result.data.result === "success")
                    {
                        var detail_view_uuid = this.state.detail_view_uuid;

                        //console.log("SUCCESS");
                        var current_objects_list_from_server = this.state.current_objects_list_from_server;
                        var combined_objects_list = [];
                        if(LOCAL_IsReplace_Results === true)
                        {
                            combined_objects_list = result.data.objects_list;
                            detail_view_uuid = "";  // Setting this back to blank resets the detail view window.
                        }
                        else
                        {
                            combined_objects_list = current_objects_list_from_server.concat(result.data.objects_list);
                        }
                        
                        this.setState(
                        { 
                            //JSON_Object_To_Display: result.data.object_json,
                            //JSON_Object_UUID: result.data.object_uuid,
                            //JSON_Object_Type: result.data.object_type

                            current_objects_list_from_server: combined_objects_list, //result.data.objects_list,
                            objects_count: result.data.objects_count,
                            items_per_page: result.data.items_per_page,
                            page_number: result.data.page_number,
                            objects_type: result.data.objects_type,
                            total_db_objects_count_for_query: result.data.total_db_objects_count_for_query,

                            adv_query__last_search_string:          search_string,
                            adv_query__endpoint_name_value:         endpoint_name,
                            adv_query__ip_address:                  ip_address,
                            adv_query__result_state_value:          LOCAL_AdvQ_ResultState_Value,

                            errors_only:    errors_only, 
                            success_only:   success_only,

                            detail_view_uuid: detail_view_uuid,
                        }); 
                    }
                    else
                    {
                        // Server Error
                        //console.log("api__admin_get_api_logs: Error: ")
                    }
                } 
                catch(err) 
                { 
                    //console.log("api__admin_get_api_logs: Error: " + err);
                }
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
                console.log("APILogs:api__admin_get_api_logs: .catch: (error) (Next Line)");
                console.log(error);
            });
    }

    convert_server_results_to_data_tables_data()
    {
        // dataProcessingService_INSTANCE
        let log_table_type = "API_Logs";
        let config_object = configService_INSTANCE.get_config_object(); //"";
        let incoming_json_data = this.state.current_objects_list_from_server;
        let datatables_data = dataProcessingService_INSTANCE.convert_server_response_to_datatables_datastructure_for_logs(log_table_type, config_object, incoming_json_data); 
        
        //console.log("APILogs.convert_server_results_to_data_tables_data: (datatables_data) (Next Line)");
        //console.log(datatables_data);
        
        //return "TODO_FINISH_THIS";
        return datatables_data;
    }

    handle_Row_Click(uuid)
    {
        // Do we need an entire row click to do anything??

        //console.log("handle_Row_Click: (uuid): " + uuid);
        //alert("APILogs.js: handle_Row_Click: STOPPED HERE - NEED TO MAKE THIS FUNCTION TAKE YOU TO DETAIL VIEW FOR: " + uuid);
        // http://localhost:3000/main-api-log-detail/3NcxCfDLbUCah2Yn8ykV
    }

    // When the ID is clicked on, the UUID prop is sent in (the business logic parts of the database 'speak' in UUIDs, not IDs, which are just simple primary keys)
    //handle_ID_Click(e, uuid)
    handle_ID_Click(uuid)
    {
        //console.log("handle_ID_Click: (uuid): " + uuid);
        //alert("APILogs.js: handle_ID_Click: STOPPED HERE - NEED TO MAKE THIS FUNCTION TAKE YOU TO DETAIL VIEW FOR: " + uuid);
        // http://localhost:3000/main-api-log-detail/3NcxCfDLbUCah2Yn8ykV

        this.setState({detail_view_uuid: uuid});
    }

    

    get_all_remaining_results_from_server()
    {

        let page_number         = 0;
        let items_per_page      = this.state.total_db_objects_count_for_query; //50; 
        let search_string       = this.state.adv_query__last_search_string; // = "";
        let endpoint_name       = this.state.adv_query__endpoint_name_value; // = "";
        let ip_address          = this.state.adv_query__ip_address; // = "";
        let errors_only         = this.state.errors_only; // false;
        let success_only        = this.state.success_only; // false;
        
        let LOCAL_IsReplace_Results = true;
        let LOCAL_adv_query__result_state_value   = this.state.adv_query__result_state_value;
        /*eslint-disable */
        this.api__admin_get_api_logs(LOCAL_IsReplace_Results, LOCAL_adv_query__result_state_value, sid, page_number, items_per_page, search_string, endpoint_name, ip_address, errors_only, success_only);
        /*eslint-enable */
        
    }

    get_more_results_from_server()
    {
        let page_number = (this.state.page_number * 1) + 1; 
        let items_per_page = 50; 
        let search_string       = this.state.adv_query__last_search_string; // = "";
        let endpoint_name       = this.state.adv_query__endpoint_name_value; // = "";
        let ip_address          = this.state.adv_query__ip_address; // = "";
        let errors_only         = this.state.errors_only; // false;
        let success_only        = this.state.success_only; // false;
        
        let LOCAL_IsReplace_Results = false;
        let LOCAL_adv_query__result_state_value   = this.state.adv_query__result_state_value;
        /*eslint-disable */
        this.api__admin_get_api_logs(LOCAL_IsReplace_Results, LOCAL_adv_query__result_state_value, sid, page_number, items_per_page, search_string, endpoint_name, ip_address, errors_only, success_only);
        /*eslint-enable */
        
    }


    handle__RunAdvancedQuery__Click(e)
    {
        //console.log("handle__RunAdvancedQuery__Click");
        //Params for API Call: search_string, endpoint_name, ip_address, errors_only, success_only
        // IDs for reading state
        // AdvQueryConfig_input__search_string, AdvQueryConfig_input__endpoint_name, AdvQueryConfig_input__ip_address, 
        // ResultState: AdvQueryConfig_input__radio__all, AdvQueryConfig_input__radio__errors_only, AdvQueryConfig_input__radio__successes_only
        // // $('input[name=radioName]:checked', '#myForm').val()
        // // $('input[name=result_state_group]:checked', '#AdvQueryConfig_Form').val()
        

        var page_number = "0"
        var items_per_page = 50; 
        var search_string = "";
        var endpoint_name = "";
        var ip_address = ""; 
        var errors_only = false;
        var success_only = false;
        var LOCAL_IsReplace_Results = true;
        
        var result_state_group_val = "";
        /*eslint-disable */
        // Apply Advanced Search Params
        try { search_string = $("#AdvQueryConfig_input__search_string").val();  } catch(err) {}
        try { endpoint_name = $("#AdvQueryConfig_input__endpoint_name").val();  } catch(err) {}
        try { ip_address    = $("#AdvQueryConfig_input__ip_address").val();     } catch(err) {}
        try 
        { 
            result_state_group_val    = $('input[name=result_state_group]:checked', '#AdvQueryConfig_Form').val();     
            if(result_state_group_val == "ALL") {}
            if(result_state_group_val == "ERRORS_ONLY")     { errors_only = true;   }
            if(result_state_group_val == "SUCCESSES_ONLY")  { success_only = true;  }
        } catch(err) {}
        
        this.api__admin_get_api_logs(LOCAL_IsReplace_Results, result_state_group_val, sid, page_number, items_per_page, search_string, endpoint_name, ip_address, errors_only, success_only);
        /*eslint-enable */

    }


    // Quick Queries Button Handlers
    quick_query__Errors_Only__Click(e)
    {
        // ERRORS_ONLY
        /*eslint-disable */
        $("#AdvQueryConfig_input__search_string").val("");
        $("#AdvQueryConfig_input__endpoint_name").val("");
        $("#AdvQueryConfig_input__ip_address").val(""); 
        $('#AdvQueryConfig_input__radio__errors_only:first').attr('checked', 'checked');
        /*eslint-enable */
        this.handle__RunAdvancedQuery__Click(e);    
    }
    
    quick_query__Success_Only__Click(e)
    {
        // SUCCESSES_ONLY
        /*eslint-disable */
        $("#AdvQueryConfig_input__search_string").val("");
        $("#AdvQueryConfig_input__endpoint_name").val("");
        $("#AdvQueryConfig_input__ip_address").val(""); 
        $('#AdvQueryConfig_input__radio__successes_only:first').attr('checked', 'checked'); 
        /*eslint-enable */
        this.handle__RunAdvancedQuery__Click(e);    
    }
    


    get_AdvQueryConfig_form_html()
    {

        // Note: React caused problems when trying to set the values of the input.  It rendered the Input form almost useless (could not edit, and then when following "best" practices, it would re-render the form after each character chage making it non-funcitonal)
        // Using JQuery to set the form state AFTER a load (by reading from the react state)
        //
        // I only want the react state to change under certain conditions - jquery is managing the 'local' components in such a way that react does not even need to know about them.


        // Read existing state
        let adv_query__last_search_string   = this.state.adv_query__last_search_string;
        let adv_query__endpoint_name_value  = this.state.adv_query__endpoint_name_value;
        let adv_query__ip_address           = this.state.adv_query__ip_address;
        let adv_query__result_state_value   = this.state.adv_query__result_state_value;
        //
        // let COPY_OF_STATE = Object.assign({}, this.state);
        // let adv_query__last_search_string   = COPY_OF_STATE.adv_query__last_search_string;
        // let adv_query__endpoint_name_value  = COPY_OF_STATE.adv_query__endpoint_name_value;
        // let adv_query__ip_address           = COPY_OF_STATE.adv_query__ip_address;
        // let adv_query__result_state_value   = COPY_OF_STATE.adv_query__result_state_value;

        // Resetting form state manually (via jquery - after render)
        setTimeout(function()
        { 
            /*eslint-disable */
            try { $("#AdvQueryConfig_input__search_string").val(adv_query__last_search_string);     } catch(err) {}
            try { $("#AdvQueryConfig_input__endpoint_name").val(adv_query__endpoint_name_value);    } catch(err) {}
            try { $("#AdvQueryConfig_input__ip_address").val(adv_query__ip_address);                } catch(err) {}
            try 
            { 
                let result_state_group_val    = adv_query__result_state_value; //$('input[name=result_state_group]:checked', '#AdvQueryConfig_Form').val();     
                if(result_state_group_val == "")                { $('#AdvQueryConfig_input__radio__all:first').attr('checked', 'checked'); }
                if(result_state_group_val == "ALL")             { $('#AdvQueryConfig_input__radio__all:first').attr('checked', 'checked'); }
                if(result_state_group_val == "ERRORS_ONLY")     { $('#AdvQueryConfig_input__radio__errors_only:first').attr('checked', 'checked'); }
                if(result_state_group_val == "SUCCESSES_ONLY")  { $('#AdvQueryConfig_input__radio__successes_only:first').attr('checked', 'checked'); }
            } catch(err) {}
            /*eslint-enable */
        }, 100);


        // htmlFor="AdvQueryConfig_input__radio__errors_only" 
        var key_counter_internal = Math.floor(Math.random() * 900000);
        var AdvQueryConfig_HTML = [];
        AdvQueryConfig_HTML.push(
            <div key={key_counter_internal}> 
                <div className="generic_panel">
                    <form id="AdvQueryConfig_Form">
                      
                      
                        <div className="form-group">
                            <label htmlFor="AdvQueryConfig_input__search_string">Limit by Search Term (Optional)</label>
                            <input type="text" className="form-control" id="AdvQueryConfig_input__search_string" placeholder="(Optional) Search Term" ></input>
                        </div>

                        <div className="form-group">
                            <label htmlFor="AdvQueryConfig_input__endpoint_name">Limit by Endpoint</label>
                            <input type="text" className="form-control" id="AdvQueryConfig_input__endpoint_name" placeholder="(Optional) Endpoint Path" ></input>
                        </div>

                        <div className="form-group">
                            <label htmlFor="AdvQueryConfig_input__ip_address">Limit by IP Address</label>
                            <input type="text" className="form-control" id="AdvQueryConfig_input__ip_address" placeholder="(Optional) IP Address" ></input>
                        </div>



                        <label>Filter by Result State</label>

                        <div className="custom-control custom-radio margin_left_small">
                            <input type="radio" id="AdvQueryConfig_input__radio__all" name="result_state_group" className="custom-control-input" defaultChecked value="ALL" />
                            <label className="custom-control-label" for="AdvQueryConfig_input__radio__all">All Result Types</label>
                        </div>
                        <div className="custom-control custom-radio margin_left_small">
                            <input type="radio" id="AdvQueryConfig_input__radio__errors_only" name="result_state_group" className="custom-control-input" value="ERRORS_ONLY" />
                            <label className="custom-control-label" for="AdvQueryConfig_input__radio__errors_only">Only Return Errors</label>
                        </div>
                        <div className="custom-control custom-radio margin_left_small">
                            <input type="radio" id="AdvQueryConfig_input__radio__successes_only" name="result_state_group" className="custom-control-input" value="SUCCESSES_ONLY" />
                            <label className="custom-control-label" for="AdvQueryConfig_input__radio__successes_only">Only Return Successes</label>
                        </div>


                      <br />
                      
                      <div className="btn btn-primary" onClick={(e) => this.handle__RunAdvancedQuery__Click(e)}>
                        Run Query
                      </div>

                    </form>
                </div>
            </div>
        )
        return AdvQueryConfig_HTML;
    }
    

    scroll_to_DetailView()
    {
        let topPaddingScroll_Amount = 50; //20;
        //window.scrollTo(0, (this.detailView_Ref.current.offsetTop - topPaddingScroll_Amount), 'smooth' ); // 'smooth' is for animation.
        window.scrollTo(
        {
            left:0, 
            top: (this.detailView_Ref.current.offsetTop - topPaddingScroll_Amount), 
            behavior: 'smooth'
        }); // 'smooth' is for animation.
    }

    // let detail_view_HTML = this.get_DetailView_HTML();  // APILogDetail, this.state.detail_view_uuid
    get_DetailView_HTML()
    {
        // Has a record {detail_view_uuid}
        // { /* <APILogDetail key={key_counter_internal + 1} /> */ }

        let this_ref = this;

        var key_counter_internal = Math.floor(Math.random() * 900000);
        var detailView_HTML = [];

        let detail_view_uuid = this.state.detail_view_uuid;
        
        if(detail_view_uuid !== "")
        {
            let object_type = "APILog";
            let object_uuid = detail_view_uuid;

            detailView_HTML.push(
                <div key={key_counter_internal} ref={this.detailView_Ref}>
                    Detail View:
                    <GetObjectDetailByTypeAndUUID object_type={object_type} object_uuid={object_uuid} />
                </div>
            );

            // Scroll to Detail View
            setTimeout(function(){ this_ref.scroll_to_DetailView(); }, 50); 
            
        }
        else
        {
            detailView_HTML.push(
                <div key={key_counter_internal}>
                </div>
            );
        }

        

        return detailView_HTML;
        // { /* <a a={a} /> */ }  // Note: Something is wrong with my IDE and lines like this fix the syntax highlighting...
    }

    // Click the right arrow to expand a section, or the down arrow to collapse a section.
    toggle_section_expand(e, controller_element_id, target_element_id, animation_time)
    {
        //console.log("toggle_section_expand");
        //console.log("controller_element_id: " + controller_element_id);
        //console.log("target_element_id: " + target_element_id);

        var controller_element_selector_string          = "#" + controller_element_id;
        var controller_element_icon_selector_string     = controller_element_selector_string + ">i"
        var target_element_selector_string              = "#" + target_element_id;

        var class_for_ToExpand = "fa-angle-right";
        var class_for_ToCollapse = "fa-angle-down";

        /*eslint-disable */
        var is_target_hidden = $(target_element_selector_string).is(":hidden");
        if(is_target_hidden == true) 
        {  
            $(target_element_selector_string).show(animation_time);
            $(controller_element_icon_selector_string).removeClass( class_for_ToExpand ).addClass( class_for_ToCollapse );
        } 
        else 
        {  
            $(target_element_selector_string).hide(animation_time);
            $(controller_element_icon_selector_string).removeClass( class_for_ToCollapse ).addClass( class_for_ToExpand );
        }
        /*eslint-enable */

        //console.log("is_target_hidden: " + is_target_hidden);
        
    }

    render()
    {
        //console.log("Login.render: was called.");

        // Remove the back button on the pages that contain a specific div with id='hide_back_button'
        /*eslint-disable */
        setTimeout(function(){ check_for_back_button(); }, 50);
        /*eslint-enable */ 

        //let some_temp_data = this.convert_server_results_to_data_tables_data();
        let raw_datatables_data = this.convert_server_results_to_data_tables_data();   // raw_datatables_data.columns, raw_datatables_data.rows, 
        // Add Click Event Handler to each Row (using the UUID)
        let updated_datatables_data =this.add_click_event_handlers_to_all_rows(raw_datatables_data);
        

        let server_controls_HTML = this.get_server_controls_html();

        console.log("");
        console.log("APILogs.js: TODO - TODO - IMPORTANT - NEXT UP");
        console.log("APILogs.js: TODO - TODO - IMPORTANT - NEXT UP");
        console.log("APILogs.js: TODO - TODO - IMPORTANT - NEXT UP");
        console.log("");
        //console.log("-Build the form (with all the proper query options)");
        //console.log("--Make sure the form is expand/collapsable via local show/hide animated jquery functions");
        //console.log("-Create an 'execute_advanced_query' function which just jquery reads the form and then calls the api (and replaces the existing local data)");
        //console.log("-Build the custom clickable links (that auto fill the form and then perform the 'execute_advanced_query' function");
        //console.log("-Expand this pattern to ETL and ServerLogs files");
        //console.log("-Create ETL Granules File which also follows this same pattern");
        console.log("-GET STATS WORKING (Dashboard page AND serverside requests) - SEE THAT ONE COOL ADMIN DASHBOARD TEMPLATE WITH ALL THE CHARTS");
        console.log("");


        let AdvQueryConfig_HTML = this.get_AdvQueryConfig_form_html();
        
        let num_of_loaded_results = this.state.current_objects_list_from_server.length;

        let detail_view_HTML = this.get_DetailView_HTML();  // APILogDetail, this.state.detail_view_uuid

        let renderHTML = [];
        let keyCounter = 0;

        renderHTML.push(
            <div key={keyCounter}>
                <div className="page_title_container_generic"><h3>API Logs</h3></div>
                <br />
                <div className="query_instructions">Instructions: Perform a specific, server-fiiltered query by expanding the 'advanced query' area and filling out the form.  Alternatively, click a quick filter to auto-fill and execute for common queries.  Once the query is configured, you can start using the table to further filter local results.  If you wish to load all results from the server, a button for that will be visible if there are any remaining results to load.  Click the ID of a row to see detail view for any given record.</div>
                <br />
                <h5>Quick Queries</h5>
                <button type="button" className="btn btn-info" onClick={(e) => this.quick_query__Errors_Only__Click(e)}>Errors Only</button>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <button type="button" className="btn btn-info" onClick={(e) => this.quick_query__Success_Only__Click(e)}>Success Only</button> 
                <br /><br />
                
                <div id="AdvQueryConfig_expander" onClick={(e) => this.toggle_section_expand(e, 'AdvQueryConfig_expander', 'AdvQueryConfig', 200)}><i className="fas fa-angle-down"></i>&nbsp;&nbsp;&nbsp;Advanced Query Configuration</div>
                <div id="AdvQueryConfig">{AdvQueryConfig_HTML}</div>

                
                <br /><br />
                {server_controls_HTML}
                <br /><hr /><br />
                <h5>Search/Filter/Sort <b>{num_of_loaded_results}</b> loaded results</h5>
                <div className="mdb_datatables_v5__generic_container">
                    <MDBDataTableV5 
                        striped 
                        bordered 
                        hover 
                        searchTop searchBottom={false}
                        pagingTop
                        entriesOptions={[5, 20, 25]} 
                        entries={5} 
                        pagesAmount={4} 
                        data={updated_datatables_data} />
                </div>
                <br /><hr /><br />
                {/*[Embedded Detail View with (X) button to close the result] */ }
                {detail_view_HTML}
            </div>
        );
        keyCounter++;

        return (
            <div>
                {renderHTML}
            </div>
        );
        // { /* <a a={a} /> */ }  // Note: Something is wrong with my IDE and lines like this fix the syntax highlighting...

    }

    


    // Gets the HTML for displaying how many results are loaded, and if the buttons for loading more should be shown or not.
    get_server_controls_html()
    {
        var key_counter_internal = Math.floor(Math.random() * 900000);
        var server_controls_HTML = [];

        var remaining_items_count = (this.state.total_db_objects_count_for_query - this.state.current_objects_list_from_server.length); //objects_count);

        if(remaining_items_count < 1)
        {
            server_controls_HTML.push(
                <div key={key_counter_internal}>
                    All <b>{this.state.total_db_objects_count_for_query}</b> results have been loaded from the server.
                </div>
            );    
        }
        else
        {
            server_controls_HTML.push(
                <div key={key_counter_internal}>
                    Loaded <b>{this.state.current_objects_list_from_server.length}</b> out of <b>{this.state.total_db_objects_count_for_query}</b> results from the server.
                    <br />
                    <div className="btn btn-primary" onClick={(e) => this.get_more_results_from_server()}>Load More Results</div>
                    <br />
                    <br />
                    <div className="btn btn-primary" onClick={(e) => this.get_all_remaining_results_from_server(e)}>Load All Remaining Results ({remaining_items_count})</div>
                    <div className="query_instructions">(Not Recommended)</div>

                    
                </div>
            );
        }

        return server_controls_HTML;


    }

    // raw_datatables_data.columns, raw_datatables_data.rows, 
    add_click_event_handlers_to_all_rows(raw_datatables_data)
    {
        let new_datatables_data = {};
        new_datatables_data.columns = raw_datatables_data.columns;

        var table_key_counter = 10000;

        var new_rows = [];
        for(var i=0; i<raw_datatables_data.rows.length; i++)
        {
            var current_row = raw_datatables_data.rows[i];
            
            //console.log(current_row.uuid);
            var current_row_uuid = current_row.uuid;
            //current_row.clickEvent = () => this.handle_Row_Click(current_row_uuid); // this.handle_Row_Click("abcd"); //this.handleClick(id);
            current_row.clickEvent = this.handle_Row_Click.bind(this, current_row_uuid); // this.handle_Row_Click("abcd"); //this.handleClick(id);

            // Modify this row to have the IDs display a little differently
            //current_row.uuid = [<i key="cell1" className="far fa-gem mr-2 grey-text" aria-hidden="true"></i>, current_row.uuid]; //'Cell1']; // current_row.uuid

            // Modify this row to have the ID column to have a bootstrap button hooked up to a click event handler and appear as a link.
            // Click Example // <div onClick={(e) => this.handle__SomeFunction__Click(e)}>
            // // This next line does not work, because it needs the bind thing.  (Only the very last uuid gets passed into ALL functions)
            //var current_row_id_click_handler_HTML = [<div key={table_key_counter} onClick={(e) => this.handle_ID_Click(e, current_row.uuid)}>{current_row.id}</div>];
            var current_row_id = current_row.id;
            var current_row_id_click_handler_HTML = 
            [
                <div className="table_id_link" 
                    onClick={this.handle_ID_Click.bind(this, current_row.uuid)} 
                    key={table_key_counter} >
                        {current_row_id}
                </div>
            ]; 
            current_row.id = current_row_id_click_handler_HTML; 

            new_rows.push(current_row);
            table_key_counter = table_key_counter + 1;

        }
        
        //console.log("add_click_event_handlers_to_all_rows: new_rows");
        //console.log(new_rows);

        new_datatables_data.rows = new_rows;

        return new_datatables_data;
    }
}



// // Garbage

// current_row.id = current_row_id_click_handler_HTML; //[<i key="cell1" className="far fa-gem mr-2 grey-text" aria-hidden="true"></i>, current_row.id]; //'Cell1']; // current_row.uuid


// // Modify this row to have the IDs display a little differently
//             //current_row.uuid = [<i key="cell1" className="far fa-gem mr-2 grey-text" aria-hidden="true"></i>, current_row.uuid]; //'Cell1']; // current_row.uuid

//             // Modify this row to have the ID column to have a bootstrap button hooked up to a click event handler and appear as a link.
//             // Click Example // <div onClick={(e) => this.handle__SomeFunction__Click(e)}>
//             // // This next line does not work, because it needs the bind thing.  (Only the very last uuid gets passed into ALL functions)
//             //var current_row_id_click_handler_HTML = [<div key={table_key_counter} onClick={(e) => this.handle_ID_Click(e, current_row.uuid)}>{current_row.id}</div>];
//             var current_row_id_click_handler_HTML = [<div className="table_id_link" key={table_key_counter} onClick={this.handle_ID_Click.bind(this, current_row.uuid)}>{current_row.id}</div>];
//             current_row.id = current_row_id_click_handler_HTML; 

//            

// <br /><br />
// TODO: Advanced Query Config Area [Expandable / collapsable form area - Form Elements feed the options for the query - and the Serverside Query is flexible enough to handle all the options!] 


                          //   <label className="form-check-label">
                          //       <input type="radio" className="form-check-input" name="result_state_group" id="AdvQueryConfig_input__radio__all" checked="checked" value="ALL" />All Result Types
                          //   </label>

                          //   <label className="form-check-label">
                          //       <input type="radio" className="form-check-input" name="result_state_group" id="AdvQueryConfig_input__radio__errors_only" value="ERRORS_ONLY" />Only Return Errors
                          //   </label>

                          //   <label className="form-check-label">
                          //       <input type="radio" className="form-check-input" name="result_state_group" id="AdvQueryConfig_input__radio__successes_only" value="SUCCESSES_ONLY" />Only Return Successes
                          //   </label>


                          // </div>

                          
                          // <div className="form-check margin_left_small">
                          //   <label className="form-check-label">
                          //       <input type="radio" className="form-check-input" name="result_state_group" id="AdvQueryConfig_input__radio__errors_only" value="ERRORS_ONLY" />Only Return Errors
                          //   </label>
                          // </div>
                          // <div className="form-check margin_left_small">
                          //   <label className="form-check-label">
                          //       <input type="radio" className="form-check-input" name="result_state_group" id="AdvQueryConfig_input__radio__successes_only" value="SUCCESSES_ONLY" />Only Return Successes
                          //   </label>
                          // </div>
                          

                          // 



  //       <div className="form-check margin_left_small">
  //   <input type="radio" className="form-check-input" name="result_state_group" id="AdvQueryConfig_input__radio__all" checked="checked" value="ALL" />All Result Types
  //   <br />
  //   <input type="radio" className="form-check-input" name="result_state_group" id="AdvQueryConfig_input__radio__errors_only" value="ERRORS_ONLY" />Only Return Errors
  //   <br />
  //   <input type="radio" className="form-check-input" name="result_state_group" id="AdvQueryConfig_input__radio__successes_only" value="SUCCESSES_ONLY" />Only Return Successes
  // </div>

// <input type="text" className="form-control" id="AdvQueryConfig_input__search_string" placeholder="(Optional) Search Term" value={adv_query__last_search_string} onChange={(e)=>this.setState({adv_query__last_search_string:e.target.value})}></input>


// <div onClick={(e) => this.get_more_results_from_server()}>[Load More]</div>
// <div onClick={(e) => this.get_all_remaining_results_from_server()}>[Load All Remaining ({})ALL XYZ (Not Recommended)]</div>

// TODO: Quick Query Links [Quick Options] - Each of these actually auto fills the form.

// { /* <MDBDataTable striped bordered hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={updated_datatables_data} />  */ }


//
