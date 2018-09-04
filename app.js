
/** 
	app.js
	
**/

// import the modules required in our program
var express = require('express');
var fs = require('fs');

// initialize an express app
var app = express();

// declare public directory to be used as a store for static files
app.use('/public', express.static(__dirname + '/public'));


// make the default route to serve our static file 
app.get('/',function(req,res){
	
	return res.redirect('/public/home.html');

});

// start app on port 3003 and log the message to console

app.listen(3003,function(){
	console.log('App listening on port 3003!');
});