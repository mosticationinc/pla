/**
 * Controller	: register
 * Copyright by	: Mostication Inc. and Most Vending Co.,Ltd.
 * Author		: Anuntachai P.
 * Created Date	: 17/03/2014
 * Description	: Controller of user register process.
 */


/*
 * Using
 * 
 * Import this module in your node.js file:
 * var [MODULE_NAME]Module = require("./assets/libs/mostication/nodejs/[MODULE_NAME].js");		//	refer to package path
 * var [MODULE_NAME] = mostication.nodejs.[MODULE_NAME]		//	make shortened package name for using (optional)
 * 
 * [EXAMPLE]
 * 
 */


/*
 * ---------------------------
 * Imports
 * ---------------------------
 */

//	get configurations
var placonfig = require("../placonfig.js");

//	get logging
var mostlog = require("../assets/libs/mostication/nodejs/mostlog.js");


//	get models
var model = require("../models");


/*
 * ---------------------------
 * Define Namespace
 * ---------------------------
 */
if(typeof(mostication)=="undefined") mostication={};
if(typeof(mostication.pla)=="undefined") mostication.pla={};
if(typeof(mostication.pla.provider)=="undefined") mostication.pla.provider={};
if(typeof(mostication.pla.provider.register)=="undefined") mostication.pla.provider.register={};


/*
 * ---------------------------
 * Global Setting
 * ---------------------------
 */	



/*
 * ---------------------------
 * Define Functions / Methods
 * ---------------------------
 */

//	[FUNCTION_DESCRIPTION]
//
//	Parameters:
//		- ([DATATYPE1]) [PARAM1] = [PARAM1_DESCRIPTION]
//		- ([DATATYPE2]) [PARAM2] = [PARAM2_DESCRIPTION]
//	Return:
//		- ([RETURNED_DATATYPE]) = [RETURNED_DESCRIPTION]
mostication.pla.provider.register.beginRegister = function (req, res) {
	
	mostlog.log(0,"Show a register form...");
	
	res.writeHead(301, {Location: 'register.html'});
	res.end();
	//res.render('register.html');
};


//[FUNCTION_DESCRIPTION]
//
//	Parameters:
//		- ([DATATYPE1]) [PARAM1] = [PARAM1_DESCRIPTION]
//		- ([DATATYPE2]) [PARAM2] = [PARAM2_DESCRIPTION]
//	Return:
//		- ([RETURNED_DATATYPE]) = [RETURNED_DESCRIPTION]
mostication.pla.provider.register.createUser = function (req, res) {
	//res.writeHead(301, {Location: 'register.html'});
	//res.end();
	
	mostlog.log(0,"Creating a user...");
	mostlog.log(10, "  user_email = " + req.param('user_email'));
	mostlog.log(10, "  first_name = " + req.param('first_name'));
	mostlog.log(10, "  last_name = " + req.param('last_name'));
	mostlog.log(10, "  user_password = " + req.param('user_password'));
	
	//	insert new user to db
	model.User.create({ 
		email: req.param('user_email'),
		firstName: req.param('first_name'),
		lastName: req.param('last_name'),
		password: model.User.getEncryptedPassword(req.param('user_password'))	// encrypt password before create
		//password: req.param('user_password')
	})
	.success(function() {
		mostlog.log(10,"Created a new user!");
		
		//	if user was create, go to first page.
		res.redirect('/');
	})
	.error(function(errors) {
		//	if error, write log
		mostlog.error("At mostication.pla.provider.register.createUser",true);
		mostlog.error(errors.stack);
		
		//	show detail of error message (from model validation)
		for (var prop in errors) {
	        if (errors.hasOwnProperty(prop))
	        	mostlog.error("Errors for field " + prop + ": ");
	        for (var i=0; i<errors[prop].length; ++i) {
	        	mostlog.error("\t" + errors[prop][i]);
	        }
	    }
		
	});
};



//	export
module.exports = mostication.pla.provider.register;

