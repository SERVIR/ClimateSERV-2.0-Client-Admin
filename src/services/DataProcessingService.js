// DataProcessingService.js

// import dependency from 'dependency_location';

// import DataProcessingService.js
// // DataProcessingService

const PLACEHOLDER = 'placeholder for a constant';




// Main processing function for converting the server response data to something that the data tables plug in can recognize and use
// // Some of the configuration logic is also processed in here.
const CONST__get_datatables_structure_for_logs_table = (config_object, incoming_json_data) =>
{
	var ret_Obj = {}

	console.log("CONST__get_datatables_structure_for_logs_table: (Next 2 Lines: config_object, incoming_json_data)");
	console.log(config_object);
	console.log(incoming_json_data);
	

	// Convert 'incoming_json_data' into something that data tables can understand and use. (the 'data=data' param)

	// Read the Config options to just insert the columns.
	// // default_table.table_columns  // Output IS the Columns Array that is expected by datatables
	var columns = [];
	columns = config_object.default_table.table_columns;



	// Read the incoming_json_data Object and filter each item into the rows (by reading the config options on how to map each field) - A global utility 'resolve' is used to resolve complex property paths is used here.
	// // default_table.datatable_field__to__server_data__map.<DATA_TABLES_NAME>  // Output IS the Key to be resolved
	var rows = [];
	for(var i = 0; i < incoming_json_data.length; i++)
	{
		// For each item coming from the incoming_json, we need to check for each key in the config settings,
		// // Then add it to a new 'row' object.
		var current_row = {};
		var current_incoming_json_data_row = incoming_json_data[i];

		// Iterate through each of the columns added in the earlier step
		for(var j = 0; j < columns.length; j++)
		{
			var current_value = "";

			var current_column = columns[j];
			var current_datatables_Column_Key = current_column.field;  // The Property named 'field' is the key to the map that tells us what the matching key to the incoming json data item.  This relationship is defined in the config object 

			try
			{
				var current_incoming_json_data_Key = config_object.default_table.datatable_field__to__server_data__map[current_datatables_Column_Key];

				// Finally, set the value
				//current_value = current_incoming_json_data_row[current_incoming_json_data_Key];
				// The above line does not work, because we can sometimes put complex key paths in ('level1.level2')
				// The below calls a function which can resolve those object paths.
				/*eslint-disable */
        		current_value = resolve(current_incoming_json_data_Key, current_incoming_json_data_row); // resolve(path, obj)
        		/*eslint-enable */
        		if(typeof current_value === "undefined") { current_value = ""; }

			}
			catch(err) 
			{
				//console.log("CONST__get_datatables_structure_for_logs_table: (ERROR): (err): " + err);
			}

			// Set the Key and Value for this column, on the current row.
			current_row[current_datatables_Column_Key] = current_value;

		}

		// try
		// {
		// 	current_row[]			
		// } catch(err) {}

		rows.push(current_row);

		// TODO:  USE 
		// // // // default_table.datatable_field__to__server_data__map.<DATA_TABLES_NAME>  // Output IS the Key to be resolved
		// TO SOLVE THIS SECTION AND CREATE ALL THE ROWS!
	}
		// 	rows.push(
		// {
		// 	id: '193',
		// 	uuid: 'abcdfDLbUCah2Yn8ykV',
		// 	created_at: '2020-08-04 00:59:22.032237+00:00',
		// 	endpoint: '/api_v2/admin_get_db_item/',
		// 	server_result_state: 'error',
		// 	ip_address: '127.0.0.1',
		// 	additional_request_data_py_obj__errorMessage: "Another Error An Error Occurred when trying to get an individual, specific database object.  Please try again shortly",
		// 	additional_request_data_py_obj__errorData: "(<class 'IndexError'>, IndexError('list index out of range'), <traceback object at 0x1096445c8>)",
		// });

	ret_Obj['columns'] 	= columns;
	ret_Obj['rows'] 	= rows;

	// let ret_Data = {
	// 	columns: columns,
	// 	rows: rows
	// };

	// let ret_JSX = []; 
	// ret_JSX.push(<MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={ret_Data} />)

	return ret_Obj;
};


// Functions to process an incoming JSON dataset (server response), read the config object and return the correct table data structure for Datatables
// Table type (by reading the config object and mapping)


class DataProcessingService
{

	constructor()
    {
        //console.log("DataProcessingService.constructor: Reached the End!");
    }

    // log_table_type  	// Expecting "API_Logs", "ETL_Logs", or "Server_Logs"
    // config_object 	// Exepcting the Global Config JSON Object
    convert_server_response_to_datatables_datastructure_for_logs(log_table_type, config_object, incoming_json_data) 
    {
    	if(log_table_type == "API_Logs") 		{ return CONST__get_datatables_structure_for_logs_table(config_object.api_logs, incoming_json_data); }
    	else if(log_table_type == "ETL_Logs") 	{ return CONST__get_datatables_structure_for_logs_table(config_object.etl_logs, incoming_json_data); }
    	else if(log_table_type == "Server_Logs") { return CONST__get_datatables_structure_for_logs_table(config_object.server_logs, incoming_json_data); }
    	else if(log_table_type == "ETL_Granules") { return CONST__get_datatables_structure_for_logs_table(config_object.etl_granlues, incoming_json_data); }
    	else 								
		{ 
			// Error Catching for when no recognized type was passed in.
			console.log("convert_server_response_to_datatables_datastructure_for_logs: Error, no recognized type passed in.  Log Types must be 'API', 'ETL', or 'SERVER'");
			let ret_Obj = {}
			return ret_Obj;
		}
    }
    
}

export { DataProcessingService } 





