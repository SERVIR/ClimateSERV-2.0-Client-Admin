// ApiService.js

// import ApiService.js
// // ApiService

import axios from 'axios';

//const ROOT_API_URL                          = '/api_v2/';
const ROOT_API_URL                 		= 'http://127.0.0.1:8234/api_v2/';
//const ROOT_API_URL__LOCALHOST          	  	= 'http://127.0.0.1:8234/api_v2/';
//
const ENDPOINT__GET_SERVER_VERSION      = 'get_server_versions/';
//
const ENDPOINT__session_output_test     = 'session_output_test/';
const ENDPOINT__process_signin         	= 'process_signin/';
const ENDPOINT__process_signout         = 'process_signout/';
//
const ENDPOINT__admin_create_user           = 'admin_create_user/';
const ENDPOINT__admin_get_db_item           = 'admin_get_db_item/';         // Applies to many DB types
//
const ENDPOINT__admin_get_api_logs          = 'admin_get_api_logs/';
const ENDPOINT__admin_get_etl_logs          = 'admin_get_etl_logs/';
const ENDPOINT__admin_get_server_logs       = 'admin_get_server_logs/';
const ENDPOINT__admin_get_stats_for_type    = 'admin_get_stats_for_type/';  // Applies to many DB types








const CONST__get_server_versions = () =>
{
    let requestURL = ROOT_API_URL + ENDPOINT__GET_SERVER_VERSION;

    return new Promise((resolve, reject) =>
    {
        axios
            .get(requestURL)
            .then(response =>
            {
                console.log("ApiService.CONST__get_server_versions: .then (response) (on next line)");
                console.log(response);
            })
            .catch(error => reject(error.message));
    });
};




const CONST__session_output_test = (sid) =>
{
    let requestURL = ROOT_API_URL + ENDPOINT__session_output_test;
    return new Promise((resolve, reject) =>
    {
        axios(  { method:     'post',     url:        requestURL,     data: { session_info: sid } })
        .then(response =>
        {
            /*console.log("ApiService.CONST__session_output_test: .then (response) (on next line)");*//*console.log(response);*/
            if (response && response.status === 200)    {   resolve(response);  }
            else                                        {   reject('(CONST__session_output_test) Something broke...');   }
        }).catch(error => reject(error.message));
    });
};

const CONST__process_signin = (username, password) =>
{
    let requestURL = ROOT_API_URL + ENDPOINT__process_signin;
    return new Promise((resolve, reject) =>
    {
        axios(  { method:     'post',     url:        requestURL,     data: { username: username, password: password } })
        .then(response =>
        {
            /*console.log("ApiService.CONST__process_signin: .then (response) (on next line)");*//*console.log(response);*/
            if (response && response.status === 200)    {   resolve(response);  }
            else                                        {   reject('(CONST__process_signin) Something broke...');   }
        }).catch(error => reject(error.message));
    });
};

const CONST__process_signout = (sid) =>
{
    let requestURL = ROOT_API_URL + ENDPOINT__process_signout;
    return new Promise((resolve, reject) =>
    {
        axios(  { method:     'post',     url:        requestURL,     data: { session_info: sid } })
        .then(response =>
        {
            /*console.log("ApiService.CONST__process_signout: .then (response) (on next line)");*//*console.log(response);*/
            if (response && response.status === 200)    {   resolve(response);  }
            else                                        {   reject('(CONST__process_signout) Something broke...');   }
        }).catch(error => reject(error.message));
    });
};


const CONST__admin_create_user = (sid, username, firstname, lastname, email, password, password_confirm) =>
{
    let requestURL = ROOT_API_URL + ENDPOINT__admin_create_user;
    return new Promise((resolve, reject) =>
    {
        axios(  { method:     'post',     url:        requestURL,     data: { session_info: sid, username: username, firstname: firstname, lastname: lastname, email: email, password: password, password_confirm: password_confirm } })
        .then(response =>
        {
            /*console.log("ApiService.CONST__admin_create_user: .then (response) (on next line)");*//*console.log(response);*/
            if (response && response.status === 200)    {   resolve(response);  }
            else                                        {   reject('(CONST__admin_create_user) Something broke...');   }
        }).catch(error => reject(error.message));
    });
};



const CONST__admin_get_db_item = (sid, object_uuid, object_type) =>
{
    let requestURL = ROOT_API_URL + ENDPOINT__admin_get_db_item;
    return new Promise((resolve, reject) =>
    {
        axios(  { method:     'post',     url:        requestURL,     data: { session_info: sid, object_uuid: object_uuid, object_type: object_type } })
        .then(response =>
        {
            /*console.log("ApiService.CONST__admin_get_db_item: .then (response) (on next line)");*//*console.log(response);*/
            if (response && response.status === 200)    {   resolve(response);  }
            else                                        {   reject('(CONST__admin_get_db_item) Something broke...');   }
        }).catch(error => reject(error.message));
    });
};


const CONST__admin_get_api_logs = (sid, page_number, items_per_page, search_string, endpoint_name, ip_address, errors_only, success_only) =>
{
    let requestURL = ROOT_API_URL + ENDPOINT__admin_get_api_logs;
    return new Promise((resolve, reject) =>
    {
        axios(  { method:     'post',     url:        requestURL,     data: { session_info: sid, page_number: page_number, items_per_page: items_per_page, search_string: search_string, endpoint_name: endpoint_name, ip_address: ip_address, errors_only: errors_only, success_only: success_only } })
        .then(response =>
        {
            /*console.log("ApiService.CONST__admin_get_api_logs: .then (response) (on next line)");*//*console.log(response);*/
            if (response && response.status === 200)    {   resolve(response);  }
            else                                        {   reject('(CONST__admin_get_api_logs) Something broke...');   }
        }).catch(error => reject(error.message));
    });
};

const CONST__admin_get_etl_logs = (sid, page_number, items_per_page, search_string) =>
{
    let requestURL = ROOT_API_URL + ENDPOINT__admin_get_etl_logs;
    return new Promise((resolve, reject) =>
    {
        axios(  { method:     'post',     url:        requestURL,     data: { session_info: sid, page_number: page_number, items_per_page: items_per_page, search_string: search_string } })
        .then(response =>
        {
            /*console.log("ApiService.CONST__admin_get_etl_logs: .then (response) (on next line)");*//*console.log(response);*/
            if (response && response.status === 200)    {   resolve(response);  }
            else                                        {   reject('(CONST__admin_get_etl_logs) Something broke...');   }
        }).catch(error => reject(error.message));
    });
};

const CONST__admin_get_server_logs = (sid, page_number, items_per_page, search_string) =>
{
    let requestURL = ROOT_API_URL + ENDPOINT__admin_get_server_logs;
    return new Promise((resolve, reject) =>
    {
        axios(  { method:     'post',     url:        requestURL,     data: { session_info: sid, page_number: page_number, items_per_page: items_per_page, search_string: search_string } })
        .then(response =>
        {
            /*console.log("ApiService.CONST__admin_get_server_logs: .then (response) (on next line)");*//*console.log(response);*/
            if (response && response.status === 200)    {   resolve(response);  }
            else                                        {   reject('(CONST__admin_get_server_logs) Something broke...');   }
        }).catch(error => reject(error.message));
    });
};


const CONST__admin_get_stats_for_type = (sid, object_type) =>
{
    let requestURL = ROOT_API_URL + ENDPOINT__admin_get_server_logs;
    return new Promise((resolve, reject) =>
    {
        axios(  { method:     'post',     url:        requestURL,     data: { session_info: sid, object_type: object_type } })
        .then(response =>
        {
            /*console.log("ApiService.CONST__admin_get_stats_for_type: .then (response) (on next line)");*//*console.log(response);*/
            if (response && response.status === 200)    {   resolve(response);  }
            else                                        {   reject('(CONST__admin_get_stats_for_type) Something broke...');   }
        }).catch(error => reject(error.message));
    });
};



class ApiService
{

	constructor()
    {
        //console.log("ApiService.constructor: Reached the End!");
    }

    get_server_versions()           	{ return CONST__get_server_versions();          		}
    //
    session_output_test(sid) 			{ return CONST__session_output_test(sid); 				}
    process_signin(username, password) 	{ return CONST__process_signin(username, password); 	}
    process_signout(sid) 				{ return CONST__process_signout(sid); 					}
    //
    admin_create_user(sid, username, firstname, lastname, email, password, password_confirm)                { return CONST__admin_create_user(sid, username, firstname, lastname, email, password, password_confirm); }
    admin_get_db_item(sid, object_uuid, object_type)        { return CONST__admin_get_db_item(sid, object_uuid, object_type); }
    //
    admin_get_api_logs(sid, page_number, items_per_page, search_string, endpoint_name, ip_address, errors_only, success_only)           { return CONST__admin_get_api_logs(sid, page_number, items_per_page, search_string, endpoint_name, ip_address, errors_only, success_only); }
    admin_get_etl_logs(sid, page_number, items_per_page, search_string)                                                                 { return CONST__admin_get_etl_logs(sid, page_number, items_per_page, search_string); }
    admin_get_server_logs(sid, page_number, items_per_page, search_string)                                                              { return CONST__admin_get_server_logs(sid, page_number, items_per_page, search_string); }
    admin_get_stats_for_type(sid, object_type)                                                                                          { return CONST__admin_get_stats_for_type(sid, object_type); }

    // New Endpoints
    
}

export { ApiService }



