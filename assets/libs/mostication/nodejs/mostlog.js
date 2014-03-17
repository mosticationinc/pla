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
//	Return:
//		- None
mostication.nodejs.mostlog.error = function(errorMessage){
	//	show error message
	mostication.nodejs.mostlog.logEngine(errorMessage);
};



//	export
module.exports = mostication.nodejs.mostlog;