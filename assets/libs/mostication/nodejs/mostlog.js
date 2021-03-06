/**
 * Module Name	: mostication.nodejs.mostlog
 * Copyright by	: Mostication Inc. and Most Vending Co.,Ltd.
 * Author		: Anuntachai P.
 * Create Date	: 12/03/2014
 * Description	: Use this logging instead of all logging commands in your node.js code.
 */


/*
 * Using
 * 
 * Import this module in your node.js file:
 * 1) require package object
 * var mostlog = require("./assets/libs/mostication/nodejs/mostlog.js");	//	import logging
 * 
 * 2) or using namespace
 * var mostlogModule = require("./assets/libs/mostication/nodejs/mostlog.js");		//	refer to package path
 * var mostlog = mostication.nodejs.mostlog;		//	make shortened package name for using (optional)
 * 
 * For general case or normal flow in your code:
 * mostlog.log(10, "Hey! this is a message");		//	log
 * 
 * For your error checking:
 * if(error) {
 * 		mostlog.error("Hey! this is an error message.");	//	error
 * }
 * 
 */

/*
 * ---------------------------
 * Import
 * ---------------------------
 */

//	date formatting package (TODO: should not import any package in this module.
//	but I don't know how to print date format. so, fix this later. -- from Tum)
var moment = require("moment");


/*
 * ---------------------------
 * Define module
 * ---------------------------
 */
if(typeof(mostication)=="undefined") mostication={};
if(typeof(mostication.nodejs)=="undefined") mostication.nodejs={};
if(typeof(mostication.nodejs.mostlog)=="undefined") mostication.nodejs.mostlog={};


/*
 * ---------------------------
 * Global Setting
 * ---------------------------
 */	

mostication.nodejs.mostlog.logEngine = console.log;		//	use console module for logging
mostication.nodejs.mostlog.verboseFilter = 10;			//	show log message that has verbose less than or equal verboseFilter value.


/*
 * ---------------------------
 * Define Functions / Methods
 * ---------------------------
 */

//	Use this function when you what to log something in node.js.
//	you can change log engine and level of message
//
//	Parameters:
//		- (int) verbose = severity of log message, is number form 1 to infinity, 1 = very high
//		- (str) logMessage = message that you want to log
//	Return:
//		- None
mostication.nodejs.mostlog.log = function(verbose, logMessage){
	
	//	if verbose of this message is lower than or equal verboseFiler, show the message.
	//	else don't show the message.
	if(verbose <= mostication.nodejs.mostlog.verboseFilter){
		mostication.nodejs.mostlog.logEngine(logMessage);
	}
};


//	Use this function when you check some errors in you code.
//	All error message will appear.
//
//	Parameters:
//		- (str) errorMessage = your error message.
//		- (bool)(optional) enableTimeStamp = option for showing error time or not.
//									- true: show time on log output.
//									- false: show only error message. (default)
//	Return:
//		- None
mostication.nodejs.mostlog.error = function(errorMessage, enableTimeStamp){
	if (typeof(enableTimeStamp)=="undefined") enableTimeStamp = false;	// default parameter
	
	//	if you need to show error time, show the time.
	if(enableTimeStamp==true) {
		mostication.nodejs.mostlog.logEngine("#ERROR: [" + moment().format() + "]");
	}
	
	//	show error message
	mostication.nodejs.mostlog.logEngine(errorMessage);
};


//	Use this function instead of express.logger(env)
//
//	Parameters:
//		- (Req) req = request object
//		- (Res) res = response object
//		- (Callback) next = callback function for doing next step
mostication.nodejs.mostlog.expresslog = function(req, res, next) {
	//	show log
	mostication.nodejs.mostlog.logEngine('[%s] %s %s', moment().format(), req.method, req.url);
	
	//	goto next step
	next();
};




//	export
module.exports = mostication.nodejs.mostlog;