// Dashboard.js

import React                from "react"; 
import { Link }             from 'react-router-dom';
import { ApiService }       from '../../../services/ApiService';


// Initialize API Service
const apiService_INSTANCE = new ApiService();

// To Import THIS component into a parent, use: (Double Check the Directory path)
// // //import { Dashboard }   from '../Dashboard'

// 
export class Dashboard extends React.Component
{
    constructor(props) 
    {
        super(props);
        this.state =
        {
            StateVar_Placeholder: "Placeholder",   
            dashboard_data: {},
            time_range: "ALL",              // THE_LAST_7_DAYS, THE_LAST_30_DAYS, ALL
            //ClassName: "Dashboard",
        };

        // Example of a handler getting bound (if needed)
        //this.handleOnRefresh = this.handleOnRefresh.bind(this);
        //this.api__GetServerVersions();

        let time_enum = this.state.time_range;
        /*eslint-disable */
        this.api__admin_get_dashboard_data(sid, time_enum);
        /*eslint-enable */

    }

    componentDidMount()
    {
        //console.log("Dashboard.componentDidMount: Reached the end!");
    }


    api__admin_get_dashboard_data(sid, time_enum)
    {
        // Call the API Service
        apiService_INSTANCE
            .admin_get_dashboard_data(sid, time_enum)
            .then(result => {
                try 
                { 
                    if(result.data.result === "success")
                    {
                        this.setState(
                        {
                            dashboard_data: result.data.dashboard_data,
                            time_range: time_enum
                        });
                    }
                    else
                    {
                        // Server Error
                        //console.log("admin_get_dashboard_data: Error: ")
                    }
                } 
                catch(err) 
                { 
                    //console.log("admin_get_dashboard_data: Error: " + err);
                }
                console.log("admin_get_dashboard_data: Results (Next Line)");
                console.log(result);


            })
            .catch(error =>
            {
                console.log("Dashboard:api__admin_get_dashboard_data: .catch: (error) (Next Line)");
                console.log(error);
            });
    }






    setup__API_Logs_Section__Synchronous_On_Render_GetHTML()
    {
        var key_counter_internal = Math.floor(Math.random() * 900000);

        var api_section_HTML = [];


        var total_DB_Objects = 0;
        try { total_DB_Objects = this.state.dashboard_data.API_Log.total_db_objects; } catch(err) {}

        var label_Success = "Successful Requests";
        var label_Error = "Errored Requests";
        var count_Success = 0;
        var count_Error = 0;
        try
        {
            var server_result_state_distinct_counts = this.state.dashboard_data.API_Log.stats_by_field.server_result_state.distinct_counts;
            for(var i = 0; i < server_result_state_distinct_counts.length; i ++)
            {
                var current_Obj = server_result_state_distinct_counts[i];
                if(current_Obj.server_result_state == "success")
                {
                    count_Success = current_Obj.count;
                }
                if(current_Obj.server_result_state == "error")
                {
                    count_Error = current_Obj.count;
                }
                // Ignore the 'UNKNOWN' and other types 

                console.log("setup__API_Section__Synchronous_On_Render_GetHTML: (current_Obj.server_result_state): " + current_Obj.server_result_state);
                
            }
        } catch(err) 
        {
            console.log("setup__API_Section__Synchronous_On_Render_GetHTML: ERROR: (err): " + err);
        }

        // Setup Endpoints
        //var endpoints_HTML = [];



        api_section_HTML.push(
            <div key={key_counter_internal}>
                {label_Success}: {count_Success}<br />
                {label_Error}: {count_Error}<br />
                <br />
                Total Number of API Logs in Database: {total_DB_Objects}<br />
            </div>
        );
        key_counter_internal = key_counter_internal + 1;

        // { /* <a a={a} /> */ }  // Note: Something is wrong with my IDE and lines like this fix the syntax highlighting...
        return api_section_HTML

    }


    setup__API_Logs_Section()
    {
        // Pie Chart for Errors vs Success
        // Bar Chart of Endpoints
        
        // api_logs__pieChart__errors_vs_success, api_logs__barChart__endpoints

        /*eslint-disable */
        // Pie Chart

        // Get data from the server
        var label_Success = "Successful Requests";
        var label_Error = "Errored Requests";
        var count_Success = 0;
        var count_Error = 0;
        // Try and get the first item
        try
        {
            // // Guide
            // this.state.dashboard_data.API_Log.stats_by_field.server_result_state.distinct_counts[0].count; // Success_Or_Error Count
            // this.state.dashboard_data.API_Log.stats_by_field.server_result_state.distinct_counts[0].server_result_state; // Label Saying which, success or error: 
            // this.state.dashboard_data.API_Log.stats_by_field.server_result_state.distinct_counts[1].count; // Success_Or_Error Count
            // this.state.dashboard_data.API_Log.stats_by_field.server_result_state.distinct_counts[1].server_result_state; // Label Saying which, success or error: 

            var server_result_state_distinct_counts = this.state.dashboard_data.API_Log.stats_by_field.server_result_state.distinct_counts;
            for(var i = 0; i < server_result_state_distinct_counts.length; i ++)
            {
                var current_Obj = server_result_state_distinct_counts[i];
                if(current_Obj.server_result_state == "success")
                {
                    count_Success = current_Obj.count;
                }
                if(current_Obj.server_result_state == "error")
                {
                    count_Error = current_Obj.count;
                }
                // Ignore the 'UNKNOWN' and other types 
            }
        } catch(err) {}

        var ctxP = document.getElementById("api_logs__pieChart__errors_vs_success").getContext('2d');
        var myPieChart = new Chart(ctxP, {
            type: 'pie',
            data: {
                labels: [label_Error, label_Success], //["Red", "Blue"], //  "Green", "Yellow", "Grey", "Dark Grey"],
                datasets: [
                {
                    data: [count_Error, count_Success], //[300, 50], // 50, 100, 40, 120],
                    backgroundColor: ["#F7464A", "#36a2eb"], // "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
                    hoverBackgroundColor: ["#FF5A5E", "#47b3fc"] // "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
                }]
            },
            options: {
                responsive: true,
                //legend: false
            }
        });


        // Bar Chat

        // Prep Data From State
        var array_sync__Dataset_0__Data_Count  = [];
        var array_sync__Dataset_0__Data_Labels = [];
        try
        {
            var endpoint_distinct_counts = this.state.dashboard_data.API_Log.stats_by_field.endpoint.distinct_counts;
            for(var i = 0; i < endpoint_distinct_counts.length; i++)
            {
                array_sync__Dataset_0__Data_Count.push(endpoint_distinct_counts[i].count);
                array_sync__Dataset_0__Data_Labels.push(endpoint_distinct_counts[i].endpoint);
            }
        }
        catch(err) {}

        // Calculate from data
        
        //var HC_Data = [12, 19, 3, 5, 7, 3];
        //var HC_Labels = ["One_Longer_Name One_Longer_Name", "Two", "Three", "Four", "Five", "Six"];
        //var num_of_data_items = HC_Data.length;
        var num_of_data_items = array_sync__Dataset_0__Data_Labels.length;

        // Calculate Bar Graph Colors from the number of data items (This sort of breaks if there are more than 360 - but really it would probably be hard to read if there are more than like 20 items)
        var colors_Background = [];
        var colors_Border = [];
        var hue_Increments = 30; // 12 items
        try{ hue_Increments = Math.floor(360 / num_of_data_items); }catch(err){}  // No dividing by zero
        console.log(hue_Increments);
        for(var i = 0; i < num_of_data_items; i++)
        {
            var current_Hue = hue_Increments * i;
            var color_Background    = 'hsla('+current_Hue+', 100%, 65%, 0.4)';
            var color_Border        = 'hsla('+current_Hue+', 100%, 65%, 1)';

            colors_Background.push(color_Background);
            colors_Border.push(color_Border);
            // hsl(0, 100%, 65%)
            // hsl(150, 100%, 65%)
        }

        var ctx = document.getElementById("api_logs__barChart__endpoints").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'horizontalBar', //'horizontalBar', //'bar',
            data: {
                labels: array_sync__Dataset_0__Data_Labels, //HC_Labels, //["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                    label: 'Endpoint Hits', //'Endpoint Hits', //'# of Votes',
                    data: array_sync__Dataset_0__Data_Count, //HC_Data, // [12, 19, 3, 5, 2, 3],
                    backgroundColor: colors_Background, // [ 'rgba(255, 99, 132, 0.2)', ],
                    borderColor: colors_Border, // [ 'rgba(255,99,132,1)', ],
                    borderWidth: 1
                }]
            },
            options: 
            {
                legend: { display: false },
                scales: {
                    xAxes: [{
                        scaleLabel: { labelString: 'Total Number of Times Logged', display: true },
                        ticks: 
                        {
                            beginAtZero: true
                        }
                    }],
                    yAxes: [{
                        scaleLabel: { labelString: '', display: true },  // 'Endpoint Names'
                        ticks: 
                        {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
        /*eslint-enable */ 



    }

    setup__ETL_Logs_Section()
    {
        // Pie Chart showing 'is_alert_dismissed' vs 'is_alert' (Total Alerts VS Alerts taht have not yet been dismissed)
        // Bar Chart of activity_event_type  // This has errors embedded in it.

        // etl_logs__pieChart__alerts, etl_logs__barChart__activity_event_type


        /*eslint-disable */

        // Pie Chart

        console.log("");
        console.log("setup__ETL_Logs_Section: TODO - setup Pie Chart, and other types as needed - and HTML summary section");
        console.log("setup__ETL_Logs_Section: TODO - setup Pie Chart, and other types as needed - and HTML summary section");
        console.log("setup__ETL_Logs_Section: TODO - setup Pie Chart, and other types as needed - and HTML summary section");
        console.log("setup__ETL_Logs_Section: TODO - setup Pie Chart, and other types as needed - and HTML summary section");
        console.log("setup__ETL_Logs_Section: TODO - setup Pie Chart, and other types as needed - and HTML summary section");
        console.log("");
        


        // Bar Chat

        // Prep Data From State
        var array_sync__Dataset_0__Data_Count  = [];
        var array_sync__Dataset_0__Data_Labels = [];
        try
        {
            var activity_event_type_distinct_counts = this.state.dashboard_data.ETL_Log.stats_by_field.activity_event_type.distinct_counts;
            for(var i = 0; i < activity_event_type_distinct_counts.length; i++)
            {
                array_sync__Dataset_0__Data_Count.push(activity_event_type_distinct_counts[i].count);
                array_sync__Dataset_0__Data_Labels.push(activity_event_type_distinct_counts[i].activity_event_type);
            }
        }
        catch(err) {}

        // Calculate from data
        
        //var HC_Data = [12, 19, 3, 5, 7, 3];
        //var HC_Labels = ["One_Longer_Name One_Longer_Name", "Two", "Three", "Four", "Five", "Six"];
        //var num_of_data_items = HC_Data.length;
        var num_of_data_items = array_sync__Dataset_0__Data_Labels.length;

        // Calculate Bar Graph Colors from the number of data items (This sort of breaks if there are more than 360 - but really it would probably be hard to read if there are more than like 20 items)
        var colors_Background = [];
        var colors_Border = [];
        var hue_Increments = 30; // 12 items
        try{ hue_Increments = Math.floor(360 / num_of_data_items); }catch(err){}  // No dividing by zero
        console.log(hue_Increments);
        for(var i = 0; i < num_of_data_items; i++)
        {
            var current_Hue = hue_Increments * i;
            var color_Background    = 'hsla('+current_Hue+', 100%, 65%, 0.4)';
            var color_Border        = 'hsla('+current_Hue+', 100%, 65%, 1)';

            colors_Background.push(color_Background);
            colors_Border.push(color_Border);
            // hsl(0, 100%, 65%)
            // hsl(150, 100%, 65%)
        }

        var ctx = document.getElementById("etl_logs__barChart__activity_event_type").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'horizontalBar', //'horizontalBar', //'bar',
            data: {
                labels: array_sync__Dataset_0__Data_Labels, //HC_Labels, //["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                    label: 'Events Logged', //'Endpoint Hits', //'# of Votes',
                    data: array_sync__Dataset_0__Data_Count, //HC_Data, // [12, 19, 3, 5, 2, 3],
                    backgroundColor: colors_Background, // [ 'rgba(255, 99, 132, 0.2)', ],
                    borderColor: colors_Border, // [ 'rgba(255,99,132,1)', ],
                    borderWidth: 1
                }]
            },
            options: 
            {
                legend: { display: false },
                scales: {
                    xAxes: [{
                        scaleLabel: { labelString: 'Total Number of Times Logged', display: true },
                        ticks: 
                        {
                            beginAtZero: true
                        }
                    }],
                    yAxes: [{
                        scaleLabel: { labelString: 'Unique Activity Event Types', display: true },
                        ticks: 
                        {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });


        /*eslint-enable */ 
    }





    // Placeholder for api__API_FUNCTION_NAME() {} // api__GetServerVersions() {}

    setup_bar_chart__TEST_VERSION()
    {
        /*eslint-disable */
        //myBarChart__TESTVERSION
        // Bar Chat
        var ctx = document.getElementById("myBarChart__TESTVERSION").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
        /*eslint-enable */ 
    }
    setup_pie_chart__TEST_VERSION()
    {
        /*eslint-disable */
        // Pie Chart
        var ctxP = document.getElementById("pieChart__TESTVERSION").getContext('2d');
        var myPieChart = new Chart(ctxP, {
            type: 'pie',
            data: {
                labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
                datasets: [{
                    data: [300, 50, 100, 40, 120],
                    backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
                    hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
                }]
            },
            options: {
                responsive: true,
                legend: false
            }
        });
        /*eslint-enable */ 
    }
    setup_line_chart__TEST_VERSION()
    {
        /*eslint-disable */
        //line
        var ctxL = document.getElementById("lineChart__TESTVERSION").getContext('2d');
        var myLineChart = new Chart(ctxL, {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                        label: "My First dataset",
                        backgroundColor: [
                            'rgba(105, 0, 132, .2)',
                        ],
                        borderColor: [
                            'rgba(200, 99, 132, .7)',
                        ],
                        borderWidth: 2,
                        data: [65, 59, 80, 81, 56, 55, 40]
                    },
                    {
                        label: "My Second dataset",
                        backgroundColor: [
                            'rgba(0, 137, 132, .2)',
                        ],
                        borderColor: [
                            'rgba(0, 10, 130, .7)',
                        ],
                        data: [28, 48, 40, 19, 86, 27, 90]
                    }
                ]
            },
            options: {
                responsive: true
            }
        });
        /*eslint-enable */ 
    }

    handle_TimeRange_Click(time_enum)
    {

        console.log("handle_TimeRange_Click: (time_enum): " + time_enum);
        //this.setState({time_range: time_enum});

        /*eslint-disable */
        this.api__admin_get_dashboard_data(sid, time_enum);
        /*eslint-enable */
    }



    render()
    {
        //console.log("Login.render: was called.");

        // Remove the back button on the pages that contain a specific div with id='hide_back_button'
        /*eslint-disable */
        setTimeout(function(){ check_for_back_button(); }, 50);
        /*eslint-enable */ 

        


        // Can we setup Piechart now?  No, we must wait until after render (so elements exist on the page)
        //this.setup_pie_chart();
        var this_ref = this;
        setTimeout(function()
        { 
            try
            {
                this_ref.setup__API_Logs_Section();
                this_ref.setup__ETL_Logs_Section();

                this_ref.setup_pie_chart__TEST_VERSION(); 
                this_ref.setup_bar_chart__TEST_VERSION(); 
                this_ref.setup_line_chart__TEST_VERSION();
            } catch(err){}
            
        }, 200);


        let api_logs_section_text_html = this.setup__API_Logs_Section__Synchronous_On_Render_GetHTML();
        


        let renderHTML = [];
        let keyCounter = 0;

        renderHTML.push(
            <div key={keyCounter} >
                <div className="page_title_container_generic"><h3>Dashboard</h3></div>

                <hr />
    
                <div className="card-header text-center">
                    Time Range Selection
                </div>                
                <div className="card-body">
                    <div>Select a Time Range</div>
                    <div className="indent_small"> 
                        <input type="radio" name="time_range" id="time_range__THE_LAST_7_DAYS" autoComplete="off" onClick={(e) => this.handle_TimeRange_Click("THE_LAST_7_DAYS")} /> The Last 7 Days
                        <br />
                        <input type="radio" name="time_range" id="time_range__THE_LAST_30_DAYS" autoComplete="off" onClick={(e) => this.handle_TimeRange_Click("THE_LAST_30_DAYS")} /> The Last Month
                        <br />
                        <input type="radio" name="time_range" id="time_range__ALL" autoComplete="off" onClick={(e) => this.handle_TimeRange_Click("ALL")} /> ALL
                    </div>
                </div>


                <br /><hr /><br />

                <div className="card-header text-center">
                    API Logs 
                </div>
                <div className="card-body">
                    <div>{api_logs_section_text_html}</div>
                    <br />
                    <div><Link to='/main-api-logs'>Search and View API Log Details</Link></div>
                    <br />
                    
                    <div className="text-center">Success vs Error</div>
                    <canvas id="api_logs__pieChart__errors_vs_success"></canvas>
                    <br />
                    <div className="text-center">Total Endpoint Usage</div>
                    <canvas id="api_logs__barChart__endpoints"></canvas>
                    <br />
                </div>



                <br /><hr /><br />



                <div className="card-header text-center">
                    ETL Logs
                </div>
                <div className="card-body">
                    <div>etl_logs_section_text_html</div>
                    <br />
                    <div><Link to='/main-etl-logs'>Search and View ETL Log Details</Link></div>
                    <canvas id="etl_logs__pieChart__alerts"></canvas>
                    <br />
                    <canvas id="etl_logs__barChart__activity_event_type"></canvas>
                    <br />
                </div>

                <br /><hr /><br />

                <div className="card-header text-center">
                    Server Logs
                </div>
                <div className="card-body">
                  <canvas id="pieChart"></canvas>
                  <br />
                  <canvas id="myChart"></canvas>
                  <br />
                  <div>Some Text and Number Stats Here</div>
                </div>

                <br /><hr /><br />

                
                <div className="card-header text-center">
                    OBJECTS TEST VERSION
                </div>
                <div className="card-body">
                  <div>Text and Numbers Here.  Lorem Ipsum, and more text.  Lorem Ipsum, and more text.  Lorem Ipsum, and more text.  </div>
                  <br />
                  <canvas id="pieChart__TESTVERSION"></canvas>
                  <br />
                  <canvas id="myBarChart__TESTVERSION"></canvas>
                  <br />
                  <canvas id="lineChart__TESTVERSION"></canvas>
                </div>


                <div>TODO: Call and display Stats from the database (and maybe a pie chart/d3 graph) on Each Data Type (Via Sub Modules, API Logs Summary) - Each Summary page should have links to the 'real' table detail page.</div><br /><br />
                <div>TODO: Call and display Stats from the database  (and maybe a pie chart/d3 graph) on Each Data Type (Via Sub Modules, ETL Logs Summary) - Each Summary page should have links to the 'real' table detail page.</div><br /><br />
                <div>TODO: Call and display Stats from the database  (and maybe a pie chart/d3 graph) on Each Data Type (Via Sub Modules, Server Logs Summary) - Each Summary page should have links to the 'real' table detail page.</div><br /><br />
                <div>TODO: Call and display Stats on Each Data Type (Via Sub Modules, Users) - This one should link to a create user page.  (Not sure if we can get to the 'edit' user page on this run.</div><br /><br />
            </div>
        );
        keyCounter++;

        return (
            <div>
                <div className="dashboard_render_container mx-auto">
                    {renderHTML}
                </div>
            </div>
        );

    }
}



// Garbage
// <div className="mx-auto d-block">
//                         <div className="btn-group btn-group-toggle" data-toggle="buttons">
//                             <label className="btn btn-primary active">
//                                 <input type="radio" name="options" id="option1" autocomplete="off" /> ALL
//                             </label>
//                             <label className="btn btn-primary">
//                                 <input type="radio" name="options" id="option2" autocomplete="off" /> The Last 7 Days
//                             </label>
//                             <label className="btn btn-primary">
//                                 <input type="radio" name="options" id="option3" autocomplete="off" /> The Last Month
//                             </label>
//                         </div>
//                     </div>