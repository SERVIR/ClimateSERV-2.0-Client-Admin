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
				        width: 175,
				        attributes: { 'aria-controls': 'DataTable', 'aria-label': 'Name', },	
					},
					{
						label: 'IP Address',
				        field: 'ip_address',
				        width: 175,
				        attributes: { 'aria-controls': 'DataTable', 'aria-label': 'Name', },	
					},
					{
						label: 'Error - Human Readable',
				        field: 'additional_request_data_py_obj__errorMessage',
				        width: 250,
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

		"etl_logs": 
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
					/*
					"endpoint": 										"endpoint",
					"server_result_state": 								"server_result_state",
					"ip_address": 										"ip_address",
					"additional_request_data_py_obj__errorMessage": 	"additional_json.additional_request_data_py_obj.errorMessage",
					"additional_request_data_py_obj__errorData": 		"additional_json.additional_request_data_py_obj.errorData",
					*/
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
					/*
					{
						label: 'End Point',
				        field: 'endpoint',
				        width: 150,
				        attributes: { 'aria-controls': 'DataTable', 'aria-label': 'Name', },	
					},
					{
						label: 'Result State',
				        field: 'server_result_state',
				        width: 175,
				        attributes: { 'aria-controls': 'DataTable', 'aria-label': 'Name', },	
					},
					{
						label: 'IP Address',
				        field: 'ip_address',
				        width: 175,
				        attributes: { 'aria-controls': 'DataTable', 'aria-label': 'Name', },	
					},
					{
						label: 'Error - Human Readable',
				        field: 'additional_request_data_py_obj__errorMessage',
				        width: 250,
				        attributes: { 'aria-controls': 'DataTable', 'aria-label': 'Name', },	
					},
					{
						label: 'Error - System Data',
				        field: 'additional_request_data_py_obj__errorData',
				        width: 150,
				        attributes: { 'aria-controls': 'DataTable', 'aria-label': 'Name', },	
					}
					*/
				]
			}
		},

		"server_logs": 
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
					/*
					"endpoint": 										"endpoint",
					"server_result_state": 								"server_result_state",
					"ip_address": 										"ip_address",
					"additional_request_data_py_obj__errorMessage": 	"additional_json.additional_request_data_py_obj.errorMessage",
					"additional_request_data_py_obj__errorData": 		"additional_json.additional_request_data_py_obj.errorData",
					*/
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
					/*
					{
						label: 'End Point',
				        field: 'endpoint',
				        width: 150,
				        attributes: { 'aria-controls': 'DataTable', 'aria-label': 'Name', },	
					},
					{
						label: 'Result State',
				        field: 'server_result_state',
				        width: 175,
				        attributes: { 'aria-controls': 'DataTable', 'aria-label': 'Name', },	
					},
					{
						label: 'IP Address',
				        field: 'ip_address',
				        width: 175,
				        attributes: { 'aria-controls': 'DataTable', 'aria-label': 'Name', },	
					},
					{
						label: 'Error - Human Readable',
				        field: 'additional_request_data_py_obj__errorMessage',
				        width: 250,
				        attributes: { 'aria-controls': 'DataTable', 'aria-label': 'Name', },	
					},
					{
						label: 'Error - System Data',
				        field: 'additional_request_data_py_obj__errorData',
				        width: 150,
				        attributes: { 'aria-controls': 'DataTable', 'aria-label': 'Name', },	
					}
					*/
				]
			}
		},

		"etl_granlues": 
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
					/*
					"endpoint": 										"endpoint",
					"server_result_state": 								"server_result_state",
					"ip_address": 										"ip_address",
					"additional_request_data_py_obj__errorMessage": 	"additional_json.additional_request_data_py_obj.errorMessage",
					"additional_request_data_py_obj__errorData": 		"additional_json.additional_request_data_py_obj.errorData",
					*/
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
					/*
					{
						label: 'End Point',
				        field: 'endpoint',
				        width: 150,
				        attributes: { 'aria-controls': 'DataTable', 'aria-label': 'Name', },	
					},
					{
						label: 'Result State',
				        field: 'server_result_state',
				        width: 175,
				        attributes: { 'aria-controls': 'DataTable', 'aria-label': 'Name', },	
					},
					{
						label: 'IP Address',
				        field: 'ip_address',
				        width: 175,
				        attributes: { 'aria-controls': 'DataTable', 'aria-label': 'Name', },	
					},
					{
						label: 'Error - Human Readable',
				        field: 'additional_request_data_py_obj__errorMessage',
				        width: 250,
				        attributes: { 'aria-controls': 'DataTable', 'aria-label': 'Name', },	
					},
					{
						label: 'Error - System Data',
				        field: 'additional_request_data_py_obj__errorData',
				        width: 150,
				        attributes: { 'aria-controls': 'DataTable', 'aria-label': 'Name', },	
					}
					*/
				]
			}
		},

		"data_item_detail_view": 
		{
			// This is how we get Detail view to show a normal looking label for a long and complex property path.
			"prop_names_to_labels":
			{
				// Property Paths, and then Labels
				"property_path":"Text Label for UI",
				"id": "ID",
				"uuid": "Unique ID (UUID)",
				"created_at": "Created Time",
				"created_by": "Created By Process",
				"additional_json.api_function_name": "API Function Name",
				"additional_json.api_function_code": "API Function Code",
				"additional_json.additional_request_data_py_obj.raw_httpbody_POST_params.session_info": "Session Info",
				"additional_json.additional_request_data_py_obj.raw_httpbody_POST_params.object_uuid": "POST Param: object_uuid",
				"additional_json.additional_request_data_py_obj.raw_httpbody_POST_params.object_type": "POST Param: object_type",
				"additional_json.additional_request_data_py_obj.errorMessage": "Human Readable Error Message",
				"additional_json.additional_request_data_py_obj.errorData": "System Error Message",
				"additional_json.query_string": "Query String (GET Params)",
				"additional_json.server_response_json.result": "Server Response Result",
				"additional_json.server_response_json.ErrorMessage": "Human Readable Error Message (sent to client)",
				"additional_json.server_response_json.ErrorCode": "API Function Code (sent to client)",
				"additional_json.server_response_json.ErrorData": "System Error Message (duplicate)",
				"endpoint": "API Endpoint",
				"ip_address": "IP Address",
				"server_result_state": "Server Result State",

				"additional_json.additional_request_data_py_obj.raw_httpbody_POST_params.page_number": 		"POST Param: page_number",
				"additional_json.additional_request_data_py_obj.raw_httpbody_POST_params.items_per_page": 	"POST Param: items_per_page",
				"additional_json.additional_request_data_py_obj.raw_httpbody_POST_params.search_string": 	"POST Param: search_string",
				"additional_json.additional_request_data_py_obj.raw_httpbody_POST_params.endpoint_name": 	"POST Param: endpoint_name",
				"additional_json.additional_request_data_py_obj.raw_httpbody_POST_params.ip_address": 		"POST Param: ip_address",
				"additional_json.additional_request_data_py_obj.raw_httpbody_POST_params.errors_only": 		"POST Param: errors_only",
				"additional_json.additional_request_data_py_obj.raw_httpbody_POST_params.success_only": 	"POST Param: success_only",

				"additional_json.server_response_json.items_per_page": 						"items_per_page (sent to client)",
				"additional_json.server_response_json.page_number": 						"page_number (sent to client)",
				"additional_json.server_response_json.objects_type": 						"objects_type (sent to client)",
				"additional_json.server_response_json.objects_count": 						"objects_count (sent to client)",
				"additional_json.server_response_json.objects_list": 						"objects_list (sent to client)",
				"additional_json.server_response_json.objects_list.0": 						"objects_list first item (sent to client)",
				"additional_json.server_response_json.total_db_objects_count_for_query": 	"total_db_objects_count_for_query (sent to client)",


			},
			"paths_ignore_list": ["is_test_object", "additional_json.server_response_json.PLACEHOLDER"],
			"values_ignore_list": ['[object Object]', 'SESSION_INFO_REMOVED_FOR_LOGGING'],
		},

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





