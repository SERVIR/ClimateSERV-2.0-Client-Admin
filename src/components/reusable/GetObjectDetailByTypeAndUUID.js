// GetObjectDetailByTypeAndUUID.js

import React from "react"; 
import { ApiService } 				from '../../services/ApiService';
import { ConfigService }            from '../../services/ConfigService';
import { DataProcessingService }    from '../../services/DataProcessingService';


// Initialize API Service
const apiService_INSTANCE = new ApiService();
const configService_INSTANCE            = new ConfigService();
const dataProcessingService_INSTANCE    = new DataProcessingService();

// To Import THIS component into a parent, use: (Double Check the Directory path)
// // //import { GetObjectDetailByTypeAndUUID }   from '../GetObjectDetailByTypeAndUUID'

//  
export class GetObjectDetailByTypeAndUUID extends React.Component
{
    constructor(props) 
    {
        super(props);
        this.state =
        {
            StateVar_Placeholder: "Placeholder",   
            //ClassName: "GetObjectDetailByTypeAndUUID",
            JSON_Object_To_Display: {"Keys_Unset":"Vals_Unset", "Error":"If you are seeing this message, it means no data has been loaded locally.  This could be caused by the server being down or an error on the server in getting the data to display."}, //{},
            JSON_Object_UUID: "",
            JSON_Object_Type: "",
        };

        // Example of a handler getting bound (if needed)
        //this.handleOnRefresh = this.handleOnRefresh.bind(this);
        //this.api__GetServerVersions();

        // TESTING - HARD CODING SOME STUFF HERE
        //let HC__object_uuid = "7JTu3W3xe8eH9BZcJ5Xk";
        //let HC__object_type = "APILog";
        let object_uuid = this.props.object_uuid;
        let object_type = this.props.object_type;
        /*eslint-disable */
        //this.api__admin_get_db_item(sid, HC__object_uuid, HC__object_type);
        this.api__admin_get_db_item(sid, object_uuid, object_type);
        /*eslint-enable */
        
    }

    componentDidMount()
    {
        //console.log("GetObjectDetailByTypeAndUUID.componentDidMount: Reached the end!");
    }

    // Placeholder for api__API_FUNCTION_NAME() {} // api__GetServerVersions() {}

    api__admin_get_db_item(sid, object_uuid, object_type)
    {
        // Call the API Service
        apiService_INSTANCE
            .admin_get_db_item(sid, object_uuid, object_type)
            .then(result =>
            {
            	try { this.setState(
            		{ 
            			JSON_Object_To_Display: result.data.object_json,
            			JSON_Object_UUID: result.data.object_uuid,
            			JSON_Object_Type: result.data.object_type
            		}); } catch(err) { }
                console.log("api__admin_get_db_item: Results (Next Line)");
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

    // Gets the deep keys list for any json object
    get_deep_keys(json_obj)
    {
    	var keys = [];
	    for(var key in json_obj) 
	    {
	        keys.push(key);
	        if(typeof json_obj[key] === "object") 
	        {
	            var subkeys = this.get_deep_keys(json_obj[key]);
	            keys = keys.concat(subkeys.map(function(subkey) 
	            {
	                return key + "." + subkey;
	            }));
	        }
	    }
	    return keys;
    }

    get_val_from_property_path(json_obj, property_path)
    {
    	var retVal = "UNSET";
		try
		{
			//console.log("1");

			var keys = property_path.split('.');

			//console.log("2");

			// Reduce the Array down to a resolved result (by plugging it in to the object)
			//keys.reduce(function(a,b){return a && a[b];}, obj);

			var evalStr = "json_obj";

			//console.log("3");

			for(var i=0; i<keys.length; i++)
			{
				var currentKey = keys[i];
				evalStr += "['"+currentKey+"']";
			}
			//console.log("About to run eval on: evalStr: " + evalStr);
			retVal = eval(evalStr);

		}
		catch(err_ParsingPropertyPath)
		{
			console.log("get_val_from_property_path: There was an error when getting the Value from the property path: Objects next! (original passed in obj), (original passed in property path), (errorObject)");
			console.log(json_obj);
			console.log(property_path);
			console.log(err_ParsingPropertyPath);

			//debugItems.push("get_val_from_property_path: There was an error when getting the Value from the property path: Objects next! (original passed in obj), (original passed in property path), (errorObject)");
			//debugItems.push(json_obj);
			//debugItems.push(property_path);
			//debugItems.push(err_ParsingPropertyPath);

			retVal = "PARSING ERROR";
		}
		return retVal;
    }

    // Returns a list of key value pairs where depth of object has been replaced by a property path.
    get_property_path_key_val_list(json_obj)
    {
    	var ret_list = []; 
    	try
		{
			var deep_keys = this.get_deep_keys(json_obj);	
			for(var i = 0; i < deep_keys.length; i++)
			{
				var currentKeyPath = deep_keys[i];
				var currentVal = this.get_val_from_property_path(json_obj, currentKeyPath);
				
				// force dat string conversion
				currentKeyPath 	= (currentKeyPath + "");
				currentVal 		= (currentVal + "");

				var flatKeyValPairObj = { "key_path": currentKeyPath, "value": currentVal }
				ret_list.push(flatKeyValPairObj);
			}
		}
		catch(err)
		{
			console.log("getFlat__KeyPath_Value_Pairs_List: There was an error when getting the list of KeyPaths and Their Values: Objects next! (original passed in obj), (errorObject)");
			console.log(json_obj);
			console.log(err);

			//debugItems.push("getFlat__KeyPath_Value_Pairs_List: There was an error when getting the list of KeyPaths and Their Values: Objects next! (original passed in obj), (errorObject)");
			//debugItems.push(obj);
			//debugItems.push(err);

			ret_list = [];

		}

		return ret_list;
    }

    get_list_item_HTML(property_label, key, val, react_html_key_counter)
    {
    	var ret_HTML = [];
    	ret_HTML.push(
    		<li className="list-group-item no_border" data-property-key={key} key={react_html_key_counter}>
    			<strong className="right_align_field">{property_label}</strong>: {val}
    		</li>
    	);
    	return ret_HTML
    }

    // This function takes the JSON Object, produces a list of key value pairs where each key is actually a property path,
    // // Then it produces HTML to render a list of those Property_Paths : Values.
    get_prop_list_html_from_json(json_obj)
    {
    	// index.js:1 Warning: Each child in a list should have a unique "key" prop.
    	var react_html_key_counter = 0;

    	//console.log("");
    	//console.log("get_prop_list_html_from_json(json_obj): ");
    	//console.log(json_obj);
    	//console.log("");

    	// Get the list of property paths and values that we should ignore from the config object.
        // // Properties that we should ignore on the output
        let config_object = configService_INSTANCE.get_config_object(); //"";
    	var paths_ignore_list  = config_object.data_item_detail_view.paths_ignore_list; // ["is_test_object"];
    	var values_ignore_list = config_object.data_item_detail_view.values_ignore_list; // ['[object Object]'];

    	var ret_HTML = []; //'';

    	var path_key_val_list = this.get_property_path_key_val_list(json_obj);
		//console.log("get_prop_list_html_from_json: (path_key_val_list) ");
		//console.log(path_key_val_list);

		var list_items_HTML = [];

		for(var i=0; i<path_key_val_list.length; i++)
		{
			var current__key_path 	= path_key_val_list[i].key_path;
			var current__value 		= path_key_val_list[i].value;

			// We want to ignore certain paths.
			var should_ignore = false;
			var is_ignore_path 	= paths_ignore_list.includes(current__key_path);
			var is_ignore_value = values_ignore_list.includes(current__value);
			if( (is_ignore_path === true) || (is_ignore_value === true) )
			{
				should_ignore = true;
			}

			if(should_ignore === true)
			{
				// Do nothing, ignore this one
			}
			else
			{
                // Check to see if there is a custom override label to use (From the config service)
                var current_label = current__key_path;  // Default to key path (if nothing is found that overrides this, then the key path is used)
                //let config_object = configService_INSTANCE.get_config_object(); //"";
                try
                {
                    // Attempt to get the label from the config object (this code is written in such a way that if there is no config setting, nothing breaks and the key path gets used as the label), but if there is a value found for the label in the config, then that gets used.
                    let possible_label = config_object.data_item_detail_view.prop_names_to_labels[current__key_path];

                    // Make sure we did not get a null, blank or undefined value before setting the possible label to the current_label value.
                    if(possible_label != "") { if( typeof possible_label === 'undefined' || possible_label === null ) {    } else { current_label = possible_label; } }

                    
                    //console.log(possible_label);
                    //console.log(current_label);
                }
                catch(err) {}
                

				// Do NOT ignore, add this one to the list.
				// Replace blank values with the string "<blank>"
				if(current__value === '') { current__value = "<blank>" }
				list_items_HTML.push(this.get_list_item_HTML(current_label, current__key_path, current__value, react_html_key_counter) );
				react_html_key_counter = react_html_key_counter + 1;
			}

			
		}
		
		/*
		var ret_HTML = []; //'';

    	var li_1_html = this.get_list_item_HTML("test_key_1", "test_val_1");
		var li_2_html = this.get_list_item_HTML("test_key_2", "test_val_2");
		var li_3_html = this.get_list_item_HTML("test_key_3_longer_name", "test_val_3_longer_value");
		
		var list_items_HTML = [];
		list_items_HTML.push(li_1_html);
		list_items_HTML.push(li_2_html);
		list_items_HTML.push(li_3_html);
		*/


		try
    	{
    		ret_HTML.push(
    			<div className="card prop_path_key_val_card_container" key={react_html_key_counter}>
    			  <ul className="list-group list-group-flush ">
    			  	{ /* <li className="list-group-item no_border" key={react_html_key_counter + 1}><strong className="right_align_field col_heading">Property Path</strong>: <span className="col_heading">Value</span></li> */ }
    				{list_items_HTML}
    			  </ul>
    		    </div>
    		);
    		react_html_key_counter = react_html_key_counter + 2;
        
    	}
    	catch(err)
    	{

    	}

    	// {li_1_html}
    	// {li_2_html}
    	/*
    	try
    	{
    		ret_HTML.push(
    			<div className="card">
    			  <ul className="list-group list-group-flush ">
    				<li className="list-group-item no_border">
    				  <strong className="right_align_field">Something</strong>: 12333434
    			    </li>
    				<li className="list-group-item no_border">
    				  <strong className="right_align_field">Something else</strong>: 2837487248723847283
    				</li>
    			  </ul>
    		    </div>
    		);
        
    	}
    	catch(err)
    	{

    	}
    	*/

    	//ret_HTML += "json_obj - TODO Parse into html";
    	//json_obj

    	return ret_HTML;
    }





    render()
    {
        //console.log("Login.render: was called.");

        let proplist_html = this.get_prop_list_html_from_json(this.state.JSON_Object_To_Display);

        let renderHTML = [];
        let keyCounter = 0;

        renderHTML.push(
            <div key={keyCounter} >
                {/* <h4>Detail View:</h4><span>{this.props.object_uuid}</span> */}
                <div>{proplist_html}</div>
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


// GARBAGE
// TODO: CREATE A MAPPINGS SETTING FOR RENAMING THE PROPS FOUND HERE.<br />