// TestDataTables.js

import React from "react"; 
import { LogsTableWrapper } 	from '../reusable/LogsTableWrapper';
import { ApiService } 			from '../../services/ApiService';
import { ConfigService } 		from '../../services/ConfigService';
import {
  MDBDataTable,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBBadge
} from 'mdbreact';
import { MDBDataTableV5 } from 'mdbreact';
import DocsLink 		from '../mdbreact/components/docsLink';
import SectionContainer from '../mdbreact/components/sectionContainer';

// Initialize API Service
const apiService_INSTANCE 		= new ApiService();
const configService_INSTANCE 	= new ConfigService();  // let config_object = configService_INSTANCE.get_config_object();


// To Import THIS component into a parent, use: (Double Check the Directory path)
// // //import { TestDataTables }   from '../TestDataTables'

//  
export class TestDataTables extends React.Component
{
    constructor(props) 
    {
        super(props);
        this.state =
        {
            StateVar_Placeholder: "Placeholder",   
            //ClassName: "TestDataTables",
        };

        // Example of a handler getting bound (if needed)
        //this.handleOnRefresh = this.handleOnRefresh.bind(this);
        //this.api__GetServerVersions();

        // Get the config object and output it to the console.
        //let config_object = configService_INSTANCE.get_config_object();
        //console.log("config_object: " + config_object);
        //console.log(config_object);
    }

    componentDidMount()
    {
        //console.log("TestDataTables.componentDidMount: Reached the end!");
    }

    get_example_datatable__4(input__JSON_Data)
    {
    	let ret_JSX = [];
    	ret_JSX.push(
    		<LogsTableWrapper type="API" input__JSON_Data={input__JSON_Data} />
    	);
    	return ret_JSX;	
    }

    get_example_datatable__3()
    {
    	// Let's pretend that we now have some API Logs already loaded into the state, Let's display them (What does it look like to configure this datatables react object? - this example will show that)
    	// Also shows a repeating pattern that can be made much more flexible and dynamic.
		
		// API Log Example

		let columns = [];
		columns.push( 
		{
	  		label: 'ID',
	        field: 'id',
	        width: 150,
	        attributes: { 'aria-controls': 'DataTable', 'aria-label': 'Name', },
		});
		columns.push( 
		{
	  		label: 'UUID',
	        field: 'uuid',
	        width: 150,
	        attributes: { 'aria-controls': 'DataTable', 'aria-label': 'Name', },
		});
		columns.push( 
		{
			label: 'Event Time',
	        field: 'created_at',
	        width: 150,
	        attributes: { 'aria-controls': 'DataTable', 'aria-label': 'Name', },	
		});
		columns.push( 
		{
			label: 'End Point',
	        field: 'endpoint',
	        width: 150,
	        attributes: { 'aria-controls': 'DataTable', 'aria-label': 'Name', },	
		});
		columns.push( 
		{
			label: 'Result State',
	        field: 'server_result_state',
	        width: 150,
	        attributes: { 'aria-controls': 'DataTable', 'aria-label': 'Name', },	
		});
		columns.push( 
		{
			label: 'IP Address',
	        field: 'ip_address',
	        width: 150,
	        attributes: { 'aria-controls': 'DataTable', 'aria-label': 'Name', },	
		});
		columns.push( 
		{
			label: 'Error - Human Readable',
	        field: 'additional_request_data_py_obj__errorMessage',
	        width: 150,
	        attributes: { 'aria-controls': 'DataTable', 'aria-label': 'Name', },	
		});
		columns.push( 
		{
			label: 'Error - System Data',
	        field: 'additional_request_data_py_obj__errorData',
	        width: 150,
	        attributes: { 'aria-controls': 'DataTable', 'aria-label': 'Name', },	
		});

		let rows = [];
		rows.push(
		{
			id: '192',
			uuid: '3NcxCfDLbUCah2Yn8ykV',
			created_at: '2020-08-03 00:59:22.032237+00:00',
			endpoint: '/api_v2/admin_get_db_item/',
			server_result_state: 'error',
			ip_address: '127.0.0.1',
			additional_request_data_py_obj__errorMessage: "An Error Occurred when trying to get an individual, specific database object.  Please try again shortly",
			additional_request_data_py_obj__errorData: "(<class 'IndexError'>, IndexError('list index out of range'), <traceback object at 0x1096445c8>)",

		});
		rows.push(
		{
			id: '193',
			uuid: 'abcdfDLbUCah2Yn8ykV',
			created_at: '2020-08-04 00:59:22.032237+00:00',
			endpoint: '/api_v2/admin_get_db_item/',
			server_result_state: 'error',
			ip_address: '127.0.0.1',
			additional_request_data_py_obj__errorMessage: "Another Error An Error Occurred when trying to get an individual, specific database object.  Please try again shortly",
			additional_request_data_py_obj__errorData: "(<class 'IndexError'>, IndexError('list index out of range'), <traceback object at 0x1096445c8>)",

		});
		
		let ret_Data = {
    		columns: columns,
    		rows: rows
    	};

    	let ret_JSX = []; 
    	ret_JSX.push(<MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={ret_Data} />)
    	
    	return ret_JSX;


		// 		additional_json:
		// additional_request_data_py_obj: {raw_httpbody_POST_params: {…}, errorMessage: "An Error Occurred when trying to get an individual…ecific database object.  Please try again shortly", errorData: "(<class 'IndexError'>, IndexError('list index out of range'), <traceback object at 0x1096445c8>)"}
		// api_function_code: "A2AGDI"
		// api_function_name: "admin_get_db_item"
		// query_string: ""
		// server_response_json: {result: "error", ErrorMessage: "An Error Occurred when trying to get an individual…ecific database object.  Please try again shortly", ErrorCode: "A2AGDI", ErrorData: "(<class 'IndexError'>, IndexError('list index out of range'), <traceback object at 0x1096445c8>)"}
		// __proto__: Object
		// created_at: "2020-08-03 00:59:22.032237+00:00"
		// created_by: "admin_get_db_item"
		// endpoint: "/api_v2/admin_get_db_item/"
		// id: "192"
		// ip_address: "127.0.0.1"
		// is_test_object: "False"
		// server_result_state: "error"
		// uuid: "3NcxCfDLbUCah2Yn8ykV"
			

		// // EXAPANDED (below the comment line)
			//additional_json: {api_function_name: "admin_get_db_item", api_function_code: "A2AGDI", additional_request_data_py_obj: {…}, query_string: "", server_response_json: {…}}
		/*
		additional_request_data_py_obj:
			errorData: "(<class 'IndexError'>, IndexError('list index out of range'), <traceback object at 0x1096445c8>)"
			errorMessage: "An Error Occurred when trying to get an individual, specific database object.  Please try again shortly"
			raw_httpbody_POST_params:
				object_type: "APILog"
				object_uuid: "aaa"
				session_info: "SESSION_INFO_REMOVED_FOR_LOGGING"
		
		id: "192"
		uuid: "3NcxCfDLbUCah2Yn8ykV"
		created_at: "2020-08-03 00:59:22.032237+00:00"
		endpoint: "/api_v2/admin_get_db_item/"
		server_result_state: "error"
		ip_address: "127.0.0.1"
		//
		is_test_object: "False"
		created_by: "admin_get_db_item"
		*/


			// let HC_Data = {
	  		//   		columns: [
			//       {
			//         label: 'Name',
			//         field: 'name',
			//         width: 150,
			//         attributes: {
			//           'aria-controls': 'DataTable',
			//           'aria-label': 'Name',
			//         },
		 //        ]
		 //    };


	    	// let columns: [
		    //   {
		    //     label: 'Name',
		    //     field: 'name',
		    //     width: 150,
		    //     attributes: {
		    //       'aria-controls': 'DataTable',
		    //       'aria-label': 'Name',
		    //     },
		    //   },
		    //   {
		    //     label: 'Position',
		    //     field: 'position',
		    //     width: 270,
		    //   },
		    //   {
		    //     label: 'Office',
		    //     field: 'office',
		    //     width: 200,
		    //   },
		    //   {
		    //     label: 'Age',
		    //     field: 'age',
		    //     sort: 'asc',
		    //     width: 100,
		    //   },
		    //   {
		    //     label: 'Start date',
		    //     field: 'date',
		    //     sort: 'disabled',
		    //     width: 150,
		    //   },
		    //   {
		    //     label: 'Salary',
		    //     field: 'salary',
		    //     sort: 'disabled',
		    //     width: 100,
		    //   },

    }

    get_example_datatable__2()
    {
    	let HC_Data = {
    		columns: [
		      {
		        label: 'Name',
		        field: 'name',
		        width: 150,
		        attributes: {
		          'aria-controls': 'DataTable',
		          'aria-label': 'Name',
		        },
		      },
		      {
		        label: 'Position',
		        field: 'position',
		        width: 270,
		      },
		      {
		        label: 'Office',
		        field: 'office',
		        width: 200,
		      },
		      {
		        label: 'Age',
		        field: 'age',
		        sort: 'asc',
		        width: 100,
		      },
		      {
		        label: 'Start date',
		        field: 'date',
		        sort: 'disabled',
		        width: 150,
		      },
		      {
		        label: 'Salary',
		        field: 'salary',
		        sort: 'disabled',
		        width: 100,
		      },
		    ],
		    rows: [
		      {
		        name: 'Tiger Nixon',
		        position: 'System Architect',
		        office: 'Edinburgh',
		        age: '61',
		        date: '2011/04/25',
		        salary: '$320',
		      },
		      {
		        name: 'Garrett Winters',
		        position: 'Accountant',
		        office: 'Tokyo',
		        age: '63',
		        date: '2011/07/25',
		        salary: '$170',
		      },
		      {
		        name: 'Ashton Cox',
		        position: 'Junior Technical Author',
		        office: 'San Francisco',
		        age: '66',
		        date: '2009/01/12',
		        salary: '$86',
		      },
		      {
		        name: 'Cedric Kelly',
		        position: 'Senior Javascript Developer',
		        office: 'Edinburgh',
		        age: '22',
		        date: '2012/03/29',
		        salary: '$433',
		      },
		      {
		        name: 'Airi Satou',
		        position: 'Accountant',
		        office: 'Tokyo',
		        age: '33',
		        date: '2008/11/28',
		        salary: '$162',
		      },
		      {
		        name: 'Brielle Williamson',
		        position: 'Integration Specialist',
		        office: 'New York',
		        age: '61',
		        date: '2012/12/02',
		        salary: '$372',
		      },
		      {
		        name: 'Herrod Chandler',
		        position: 'Sales Assistant',
		        office: 'San Francisco',
		        age: '59',
		        date: '2012/08/06',
		        salary: '$137',
		      },
		      {
		        name: 'Rhona Davidson',
		        position: 'Integration Specialist',
		        office: 'Tokyo',
		        age: '55',
		        date: '2010/10/14',
		        salary: '$327',
		      },
		      {
		        name: 'Colleen Hurst',
		        position: 'Javascript Developer',
		        office: 'San Francisco',
		        age: '39',
		        date: '2009/09/15',
		        salary: '$205',
		      },
		      {
		        name: 'Sonya Frost',
		        position: 'Software Engineer',
		        office: 'Edinburgh',
		        age: '23',
		        date: '2008/12/13',
		        salary: '$103',
		      },
		      {
		        name: 'Jena Gaines',
		        position: 'Office Manager',
		        office: 'London',
		        age: '30',
		        date: '2008/12/19',
		        salary: '$90',
		      },
		      {
		        name: 'Quinn Flynn',
		        position: 'Support Lead',
		        office: 'Edinburgh',
		        age: '22',
		        date: '2013/03/03',
		        salary: '$342',
		      },
		      {
		        name: 'Charde Marshall',
		        position: 'Regional Director',
		        office: 'San Francisco',
		        age: '36',
		        date: '2008/10/16',
		        salary: '$470',
		      },
		      {
		        name: 'Haley Kennedy',
		        position: 'Senior Marketing Designer',
		        office: 'London',
		        age: '43',
		        date: '2012/12/18',
		        salary: '$313',
		      },
		      {
		        name: 'Tatyana Fitzpatrick',
		        position: 'Regional Director',
		        office: 'London',
		        age: '19',
		        date: '2010/03/17',
		        salary: '$385',
		      },
		      {
		        name: 'Michael Silva',
		        position: 'Marketing Designer',
		        office: 'London',
		        age: '66',
		        date: '2012/11/27',
		        salary: '$198',
		      },
		      {
		        name: 'Paul Byrd',
		        position: 'Chief Financial Officer (CFO)',
		        office: 'New York',
		        age: '64',
		        date: '2010/06/09',
		        salary: '$725',
		      },
		      {
		        name: 'Gloria Little',
		        position: 'Systems Administrator',
		        office: 'New York',
		        age: '59',
		        date: '2009/04/10',
		        salary: '$237',
		      },
		      {
		        name: 'Bradley Greer',
		        position: 'Software Engineer',
		        office: 'London',
		        age: '41',
		        date: '2012/10/13',
		        salary: '$132',
		      },
		      {
		        name: 'Dai Rios',
		        position: 'Personnel Lead',
		        office: 'Edinburgh',
		        age: '35',
		        date: '2012/09/26',
		        salary: '$217',
		      },
		      {
		        name: 'Jenette Caldwell',
		        position: 'Development Lead',
		        office: 'New York',
		        age: '30',
		        date: '2011/09/03',
		        salary: '$345',
		      },
		      {
		        name: 'Yuri Berry',
		        position: 'Chief Marketing Officer (CMO)',
		        office: 'New York',
		        age: '40',
		        date: '2009/06/25',
		        salary: '$675',
		      },
		      {
		        name: 'Caesar Vance',
		        position: 'Pre-Sales Support',
		        office: 'New York',
		        age: '21',
		        date: '2011/12/12',
		        salary: '$106',
		      },
		      {
		        name: 'Doris Wilder',
		        position: 'Sales Assistant',
		        office: 'Sidney',
		        age: '23',
		        date: '2010/09/20',
		        salary: '$85',
		      },
		      {
		        name: 'Angelica Ramos',
		        position: 'Chief Executive Officer (CEO)',
		        office: 'London',
		        age: '47',
		        date: '2009/10/09',
		        salary: '$1',
		      },
		      {
		        name: 'Gavin Joyce',
		        position: 'Developer',
		        office: 'Edinburgh',
		        age: '42',
		        date: '2010/12/22',
		        salary: '$92',
		      },
		      {
		        name: 'Jennifer Chang',
		        position: 'Regional Director',
		        office: 'Singapore',
		        age: '28',
		        date: '2010/11/14',
		        salary: '$357',
		      },
		      {
		        name: 'Brenden Wagner',
		        position: 'Software Engineer',
		        office: 'San Francisco',
		        age: '28',
		        date: '2011/06/07',
		        salary: '$206',
		      },
		      {
		        name: 'Fiona Green',
		        position: 'Chief Operating Officer (COO)',
		        office: 'San Francisco',
		        age: '48',
		        date: '2010/03/11',
		        salary: '$850',
		      },
		      {
		        name: 'Shou Itou',
		        position: 'Regional Marketing',
		        office: 'Tokyo',
		        age: '20',
		        date: '2011/08/14',
		        salary: '$163',
		      },
		      {
		        name: 'Michelle House',
		        position: 'Integration Specialist',
		        office: 'Sidney',
		        age: '37',
		        date: '2011/06/02',
		        salary: '$95',
		      },
		      {
		        name: 'Suki Burks',
		        position: 'Developer',
		        office: 'London',
		        age: '53',
		        date: '2009/10/22',
		        salary: '$114',
		      },
		      {
		        name: 'Prescott Bartlett',
		        position: 'Technical Author',
		        office: 'London',
		        age: '27',
		        date: '2011/05/07',
		        salary: '$145',
		      },
		      {
		        name: 'Gavin Cortez',
		        position: 'Team Leader',
		        office: 'San Francisco',
		        age: '22',
		        date: '2008/10/26',
		        salary: '$235',
		      },
		      {
		        name: 'Martena Mccray',
		        position: 'Post-Sales support',
		        office: 'Edinburgh',
		        age: '46',
		        date: '2011/03/09',
		        salary: '$324',
		      },
		      {
		        name: 'Unity Butler',
		        position: 'Marketing Designer',
		        office: 'San Francisco',
		        age: '47',
		        date: '2009/12/09',
		        salary: '$85',
		      },
		      {
		        name: 'Howard Hatfield',
		        position: 'Office Manager',
		        office: 'San Francisco',
		        age: '51',
		        date: '2008/12/16',
		        salary: '$164',
		      },
		      {
		        name: 'Hope Fuentes',
		        position: 'Secretary',
		        office: 'San Francisco',
		        age: '41',
		        date: '2010/02/12',
		        salary: '$109',
		      },
		      {
		        name: 'Vivian Harrell',
		        position: 'Financial Controller',
		        office: 'San Francisco',
		        age: '62',
		        date: '2009/02/14',
		        salary: '$452',
		      },
		      {
		        name: 'Timothy Mooney',
		        position: 'Office Manager',
		        office: 'London',
		        age: '37',
		        date: '2008/12/11',
		        salary: '$136',
		      },
		      {
		        name: 'Jackson Bradshaw',
		        position: 'Director',
		        office: 'New York',
		        age: '65',
		        date: '2008/09/26',
		        salary: '$645',
		      },
		      {
		        name: 'Olivia Liang',
		        position: 'Support Engineer',
		        office: 'Singapore',
		        age: '64',
		        date: '2011/02/03',
		        salary: '$234',
		      },
		      {
		        name: 'Bruno Nash',
		        position: 'Software Engineer',
		        office: 'London',
		        age: '38',
		        date: '2011/05/03',
		        salary: '$163',
		      },
		      {
		        name: 'Sakura Yamamoto',
		        position: 'Support Engineer',
		        office: 'Tokyo',
		        age: '37',
		        date: '2009/08/19',
		        salary: '$139',
		      },
		      {
		        name: 'Thor Walton',
		        position: 'Developer',
		        office: 'New York',
		        age: '61',
		        date: '2013/08/11',
		        salary: '$98',
		      },
		      {
		        name: 'Finn Camacho',
		        position: 'Support Engineer',
		        office: 'San Francisco',
		        age: '47',
		        date: '2009/07/07',
		        salary: '$87',
		      },
		      {
		        name: 'Serge Baldwin',
		        position: 'Data Coordinator',
		        office: 'Singapore',
		        age: '64',
		        date: '2012/04/09',
		        salary: '$138',
		      },
		      {
		        name: 'Zenaida Frank',
		        position: 'Software Engineer',
		        office: 'New York',
		        age: '63',
		        date: '2010/01/04',
		        salary: '$125',
		      },
		      {
		        name: 'Zorita Serrano',
		        position: 'Software Engineer',
		        office: 'San Francisco',
		        age: '56',
		        date: '2012/06/01',
		        salary: '$115',
		      },
		      {
		        name: 'Jennifer Acosta',
		        position: 'Junior Javascript Developer',
		        office: 'Edinburgh',
		        age: '43',
		        date: '2013/02/01',
		        salary: '$75',
		      },
		      {
		        name: 'Cara Stevens',
		        position: 'Sales Assistant',
		        office: 'New York',
		        age: '46',
		        date: '2011/12/06',
		        salary: '$145',
		      },
		      {
		        name: 'Hermione Butler',
		        position: 'Regional Director',
		        office: 'London',
		        age: '47',
		        date: '2011/03/21',
		        salary: '$356',
		      },
		      {
		        name: 'Lael Greer',
		        position: 'Systems Administrator',
		        office: 'London',
		        age: '21',
		        date: '2009/02/27',
		        salary: '$103',
		      },
		      {
		        name: 'Jonas Alexander',
		        position: 'Developer',
		        office: 'San Francisco',
		        age: '30',
		        date: '2010/07/14',
		        salary: '$86',
		      },
		      {
		        name: 'Shad Decker',
		        position: 'Regional Director',
		        office: 'Edinburgh',
		        age: '51',
		        date: '2008/11/13',
		        salary: '$183',
		      },
		      {
		        name: 'Michael Bruce',
		        position: 'Javascript Developer',
		        office: 'Singapore',
		        age: '29',
		        date: '2011/06/27',
		        salary: '$183',
		      },
		      {
		        name: 'Donna Snider',
		        position: 'Customer Support',
		        office: 'New York',
		        age: '27',
		        date: '2011/01/25',
		        salary: '$112',
		      },
		    ],
    	}
    	//return <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} />;
    	return <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={HC_Data} />;
    }

    get_example_datatable__1()
    {
    	// Some Hardcoded stuff.
    	//let data = json;
        //let { columns, rows } = json;
        
        let data = { "placeholder_key": "placeholder_value" };
        //let data = [ { "id": "1" } ];

        let columns = [];
        columns.push({
          label: 'Own Data',
          field: 'id',
          sort: 'asc',
          width: 150
        });

        var key_Counter_HC = 0;
        let rows = [];
        rows.push({id:1})
	     //    rows.push(
	     //        {
	     //        	id: (<MDBBadge
	     //          			color='info'
	     //          			className='w-100'
	     //          			searchvalue='0'
	     //          			key='0'
	     //        		>
	     //          		0
	     //        		</MDBBadge>)
	     //      	}
	    	// );

        // rows = rows.map((row, key) => ({
        //   ...row,
        //   id: (
        //     <MDBBadge
        //       color='info'
        //       className='w-100'
        //       searchvalue={key}
        //       key={key}
        //     >
        //       {key}
        //     </MDBBadge>
        //   )


    	let retHTML = [];
    	let keyCounter = 0;
    	retHTML.push(
    		<div key={keyCounter}>
    			HELLO WORLD!
    			<br />
    			<MDBContainer className='mt-3'>
			        <DocsLink
			          title='Datatable'
			          href='https://mdbootstrap.com/docs/react/tables/datatables/'
			        />
			        <MDBRow className='py-3'>
			          <MDBCol md='12'>
			            <SectionContainer header='Datatable with data from API' noBorder>
			              <MDBCard>
			                <MDBCardBody>
			                  <MDBDataTable
			                    striped
			                    bordered
			                    hover
			                    data='https://my-json-server.typicode.com/Rotarepmi/exjson/db'
			                  />
			                </MDBCardBody>
			              </MDBCard>
			            </SectionContainer>
			          </MDBCol>
			        </MDBRow>

			        <MDBRow className='py-3'>
			          <MDBCol md='12'>
			            <SectionContainer
			              header='With scrollX and scrollY properties'
			              noBorder
			            >
			              <MDBCard>
			                <MDBCardBody>
			                  <MDBDataTable
			                    striped
			                    bordered
			                    hover
			                    scrollX
			                    scrollY
			                    maxHeight='300xp'
			                    data='https://my-json-server.typicode.com/Rotarepmi/exjson/db'
			                  />
			                </MDBCardBody>
			              </MDBCard>
			            </SectionContainer>
			          </MDBCol>
			        </MDBRow>

			        <MDBRow className='py-3'>
			          <MDBCol md='12'>
			            <SectionContainer
			              header='Datatable with data from API + custom data'
			              noBorder
			            >
			              <MDBCard>
			                <MDBCardBody>
			                  <MDBDataTable
			                    striped
			                    bordered
			                    hover
			                    data={data}
			                    sortRows={['id']}
			                  />
			                </MDBCardBody>
			              </MDBCard>
			            </SectionContainer>
			          </MDBCol>
			        </MDBRow>
			      </MDBContainer>
    		</div>
    	);
    	return retHTML;
    }

    // Placeholder for api__API_FUNCTION_NAME() {} // api__GetServerVersions() {}

    render()
    {
        //console.log("Login.render: was called.");

        let renderHTML = [];
        let keyCounter = 0;

        //let innerHTML = this.get_example_datatable__1();
        //let innerHTML = this.get_example_datatable__2();
        //let innerHTML = this.get_example_datatable__3();
        let innerHTML = this.get_example_datatable__4({});
        

        renderHTML.push(
            <div key={keyCounter} >
                <h1>TestDataTables Page</h1>
                {innerHTML}
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
