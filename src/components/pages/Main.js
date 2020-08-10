//Main.js

//import React from 'react';
import React, { Component }         from 'react';
import { Switch, Route }    from 'react-router-dom';
//import { useParams }        from "react-router";

import { Home }                 from './main/Home';
import { Login }             	from './main/Login';
import { Logout }               from './main/Logout';
//
import { Dashboard }            from './main/Dashboard';

import { UsersSummary }         from './main/dashboard/UsersSummary';
import { ETLLogsSummary }       from './main/dashboard/ETLLogsSummary';
import { APILogsSummary }       from './main/dashboard/APILogsSummary';
import { ServerLogsSummary }    from './main/dashboard/ServerLogsSummary';
//
import { ManageUsers }          from './main/ManageUsers';
import { CreateNewUser }        from './main/manage-users/CreateNewUser';
import { EditUserDetail }       from './main/manage-users/EditUserDetail';
//
import { TestDataTables }       from '../debug/TestDataTables';
//
import { ETLLogs }              from './main/ETLLogs';
import { ETLLogDetail }         from './main/etl-logs/ETLLogDetail';
//
import { APILogs }              from './main/APILogs';
import { APILogDetail }         from './main/api-logs/APILogDetail';
//
import { ServerLogs }           from './main/ServerLogs';
import { ServerLogDetail }      from './main/server-logs/ServerLogDetail';




//import React, { Component }         from 'react';
import { ApiService } 				from '../../services/ApiService';

// Initialize API Service
const apiService_INSTANCE = new ApiService();


class Main extends Component 
{
    constructor(props) 
    {
        super(props);
        this.state =
        {
            StateVar_Placeholder: "Placeholder",   
            ServerVersionString: "",
        };

        console.log("Main.constructor was called.");
        this.api__GetServerVersions();
    }

    componentDidMount()
    {
        //console.log("Main.componentDidMount: Reached the end!");
    }

    api__GetServerVersions()
    {
        // Call the API Service
        apiService_INSTANCE
            .get_server_versions()
            .then(result =>
            {
                //console.log("get_server_versions: Results (Next Line)");
                //console.log(result);
                //try { this.setState({ Some_State_Property: result.data, Another_State_Property: true }); } catch(err) { }
                console.log("FINISH DOING SOMETHING HERE!");

            })
            .catch(error =>
            {
                console.log("get_server_versions: .catch: (error) (Next Line)");
                console.log(error);
            });
    }

    render()
    {
        console.log("Main.render: was called.");

        let renderHTML = [];
        let keyCounter = 0;

        //renderHTML.push(
        //    <div key={keyCounter} >
        //        Hello World from Main.js
        //    </div>
        //);
        renderHTML.push(
            <div key={keyCounter} className="main_container">
            	<Switch>
                	<Route exact path='/' component={Home}/>
                	<Route path='/main-login' component={Login}/>
                	<Route path='/main-logout' component={Logout}/>

                    <Route path='/main-dashboard' component={Dashboard}/>
                    <Route path='/main-dashboard-users-summary' component={UsersSummary}/>
                    <Route path='/main-dashboard-etl-logs-summary' component={ETLLogsSummary}/>
                    <Route path='/main-dashboard-api-logs-summary' component={APILogsSummary}/>
                    <Route path='/main-dashboard-server-logs-summary' component={ServerLogsSummary}/>

                    <Route path='/main-manage-users' component={ManageUsers}/>
                    <Route path='/main-manage-users-create-new-user' component={CreateNewUser}/>
                    <Route path='/main-manage-users-edit-user-detail' component={EditUserDetail}/>

                    <Route path='/debug-test-datatables' component={TestDataTables}/>

                    <Route path='/main-etl-logs' component={ETLLogs}/>
                    <Route path='/main-etl-log-detail' component={ETLLogDetail}/>

                    <Route path='/main-api-logs' component={APILogs}/>
                    <Route path='/main-api-log-detail/:uuid' component={APILogDetail}/>
                    
                    <Route path='/main-server-logs' component={ServerLogs}/>
                    <Route path='/main-server-log-detail' component={ServerLogDetail}/>

                </Switch>
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

export { Main };





// GARBAGE - and - DEPRECATING



// // The Main component renders one of the three provided
// // Routes (provided that one matches). Both the /roster
// // and /schedule routes will match any pathname that starts
// // with /roster or /schedule. The / route will only match
// // when the pathname is exactly the string "/"
// const Main = () => (
//   <main>
//     <Switch>
//       <Route exact path='/' component={Home}/>
//       <Route path='/login' component={Login}/>
//      
//     </Switch>
//   </main>
// )
// export { Main };
// //export default Main;


// // <Route path='/schedule' component={Schedule}/>