//DevHeader.js

import React from 'react'
import { Link } from 'react-router-dom';

// The DevHeader creates links that can be used to navigate
// between routes.
const DevHeader = () => (
  <header className="dev_header_container">
    <nav>
      <h1>Dev Header - Remove Me before Demos / App Release!</h1>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/main-login'>Login</Link></li>
        <li><Link to='/main-logout'>Logout</Link></li>
        
        <br />
        
        <li><Link to='/main-dashboard'>Dashboard</Link></li>
        <li><Link to='/main-dashboard-users-summary'>Dashboard / Users Summary</Link></li>
        <li><Link to='/main-dashboard-etl-logs-summary'>Dashboard / ETL Logs Summary</Link></li>
        <li><Link to='/main-dashboard-api-logs-summary'>Dashboard / API Logs Summary</Link></li>
        <li><Link to='/main-dashboard-server-logs-summary'>Dashboard / Server Logs Summary</Link></li>

        <br />

        <li><Link to='/main-manage-users'>Manage Users</Link></li>
        <li><Link to='/main-manage-users-create-new-user'>Create a New User</Link></li>
        <li><Link to='/main-manage-users-edit-user-detail'>Edit User Detail</Link></li>

        <br />

        <li><Link to='/debug-test-datatables'>DEBUG Test Datatables</Link></li>

        <br />

        <li><Link to='/main-etl-logs'>ETL Logs</Link></li>
        <li><Link to='/main-etl-log-detail'>ETL Log Detail</Link></li>
        <li><Link to='/main-etl-granules'>ETL Granules</Link></li>

        <br />

        <li><Link to='/main-api-logs'>API Logs</Link></li>
        <li><Link to='/main-api-log-detail/3NcxCfDLbUCah2Yn8ykV'>API Log Detail (HardCoded ID: 3NcxCfDLbUCah2Yn8ykV)</Link></li>

        <br />

        <li><Link to='/main-server-logs'>Server Logs</Link></li>
        <li><Link to='/main-server-log-detail'>Server Log Detail</Link></li>

        <br />


      </ul>
    </nav>
  </header>
)


export { DevHeader };


// NOTES
// // Issue with the combination of more than one slash and then having hyphens AND underscores in path names all together - using react router dom.
// https://stackoverflow.com/questions/50088100/matching-routes-with-hyphens-in-react-router

// GARBAGE AND DEPRECATING
//export default Header
// <li><Link to='/schedule'>Schedule</Link></li>