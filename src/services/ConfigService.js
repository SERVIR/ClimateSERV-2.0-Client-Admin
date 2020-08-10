// ConfigService.js

// import dependency from 'dependency_location';

// import ConfigService.js
// // ConfigService

const PLACEHOLDER = 'placeholder for a constant';



const CONST__get_config_object = () =>
{
	// Edit this JSON object to add or change settings
	let config_JSON_object = {
		// Testing, to make sure this approach works.
		"config_JSON_object_placeholder_key": "config_JSON_object_placeholder_value",

		"api_logs": 
		{
			"default_table":
			{
				// The keys are the names of the fields in the data tables 'table_columns' area.
				// The values are the names of the keys in the data returned from the server. 
				"datatable_field__to__server_data__map":
				{
					"id": 												"id",
					"uuid": 											"uuid",
					"created_at": 										"created_at",
					"endpoint": 										"endpoint",
					"server_result_state": 								"server_result_state",
					"ip_address": 										"ip_address",
					"additional_request_data_py_obj__errorMessage": 	"additional_json.additional_request_data_py_obj.errorMessage",
					"additional_request_data_py_obj__errorData": 		"additional_json.additional_request_data_py_obj.errorData",
				},
				"table_columns":
				[
					{
				  		label: 'ID',
				        field: 'id',
				        width: 150,
				        attributes: { 'aria-controls': 'DataTable', 'aria-label': 'Name', },
					},
					{
				  		label: 'UUID',
				        field: 'uuid',
				        width: 150,
				        attributes: { 'aria-controls': 'DataTable', 'aria-label': 'Name', },
					},
					{
						label: 'Event Time',
				        field: 'created_at',
				        width: 150,
				        attributes: { 'aria-controls': 'DataTable', 'aria-label': 'Name', },	
					},
					{
						label: 'End Point',
				        field: 'endpoint',
				        width: 150,
				        attributes: { 'aria-controls': 'DataTable', 'aria-label': 'Name', },	
					},
					{
						label: 'Result State',
				        field: 'server_result_state',
				        width: 150,
				        attributes: { 'aria-controls': 'DataTable', 'aria-label': 'Name', },	
					},
					{
						label: 'IP Address',
				        field: 'ip_address',
				        width: 150,
				        attributes: { 'aria-controls': 'DataTable', 'aria-label': 'Name', },	
					},
					{
						label: 'Error - Human Readable',
				        field: 'additional_request_data_py_obj__errorMessage',
				        width: 150,
				        attributes: { 'aria-controls': 'DataTable', 'aria-label': 'Name', },	
					},
					{
						label: 'Error - System Data',
				        field: 'additional_request_data_py_obj__errorData',
				        width: 150,
				        attributes: { 'aria-controls': 'DataTable', 'aria-label': 'Name', },	
					}
				]
			}
		
		
		},

		"etl_logs": {},

		"server_logs": {},

	};

	return config_JSON_object;
};




class ConfigService
{

	constructor()
    {
        //console.log("ConfigService.constructor: Reached the End!");
    }

    get_config_object()           	{ return CONST__get_config_object();          		}
    
}

export { ConfigService } 





