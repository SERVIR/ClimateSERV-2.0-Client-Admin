//utils.js


var sid = "";



// Cookie *Create and Store a Cookie:*
function setCookie(c_name,value,exdays)
{
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
	document.cookie=c_name + "=" + c_value;
}

// The function which will return the specified cookie:
function getCookie(c_name)
{
	var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i++)
	{
	  	x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
	  	y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
	  	x=x.replace(/^\s+|\s+$/g,"");
	 	if (x==c_name)
    	{
	    	return unescape(y);
		}
	}
}

function isCookieSet(c_name)
{
	var c_value = getCookie(c_name);
	if (c_value!=null && c_value!="")	{	return true;	}
	else								{ 	return false; 	}
}


function validateEmail(email) 
{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


function resolve(path, obj) 
{
	//console.log("resolve: (path, obj): " + path + ", " + obj);
    return path.split('.').reduce(function(prev, curr) 
    {
        return prev ? prev[curr] : null
    }, obj || self)
}

// Hide backbutton for homepage only
function check_for_back_button()
{
	try
	{
		var is_hide_back_button = false;
		try
		{
			var element = $("#hide_back_button")[0];
			if(typeof element === "undefined") { is_hide_back_button = false; } else { is_hide_back_button = true; }
			
		}
		catch(err)
		{
			is_hide_back_button = false;
		}
		if(is_hide_back_button == true)
		{
			$(".back_button_generic").hide();
		}
		else
		{
			$(".back_button_generic").show();
		}
	}
	catch(err)
	{

	}
	
	
	
}

//var is_debug_mode = false;
