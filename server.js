var request = require("request");
var fs = require('fs');
username = "E10Tests\\MgrE10Tests"
password = "Eloqua123"
access_token="";


function oAuthLogin()
{
	json = {
	grant_type : "password",
	scope : "full",
	username : username,
	password : "Eloqua123"
	};


	var options = {
		method: 'POST',
		url : 'https://devlogin.eloquacorp.com/auth/oauth2/token' ,
		json : json,
		auth: { user: "282119e5-7ed8-4ffd-8ee7-29158f4a489a", pass: "1JvZmSeKmA0ixkOorSqby8LSjQ-FohbGyaqrsK4iy2YbeIWGDWo5CnkykXoM9paGZ9j-02ljgpbwLOt93-Cza-y5gdhEkhTeGf30"}
	};

	request(options,function(error,response,body)
	{
 		console.log(body);
 		access_token = body.access_token;
 		console.log("access token = " + access_token);
	});

}
function getFields()
{
	oAuthLogin();
	var options ={
		method: 'GET',
		url: 'https://devsecure.eloquacorp.com/api/bulk/2.0/contacts/fields',
		json: json,
		header: {'Authorization: bearer ' + access_token }
	};
	request(options, function(error,response,body){
		console.log(body);
	});
}
getFields();
