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
const ENDPOINT__admin_create_user       = 'admin_create_user/';








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


}

export { ApiService }



