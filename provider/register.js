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
var mostlog = require("../../assets/libs/mostication/nodejs/mostlog.js");


var async = require('async');
var passport = require('passport');
var local_strategy = require('passport-local').Strategy;
var facebook_strategy = require('passport-facebook').Strategy;


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
	res.writeHead(301, {Location: 'register.html'});
	res.end();
};


//	export
module.exports = mostication.pla.provider.register;

