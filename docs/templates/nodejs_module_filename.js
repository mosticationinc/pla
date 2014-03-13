/**
 * Module Name	: mostication.nodejs.[MODULE_NAME]
 * Copyright by	: Mostication Inc. and Most Vending Co.,Ltd.
 * Author		: [YOUR_NAME]
 * Created Date	: [CREATE_DATE]
 * Description	: [MODULE_DESCRIPTION]
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
var placonfig = require("../placore/placonfig.js");

//	get logging
//var mostlogModule = require("../assets/libs/mostication/nodejs/mostlog.js");
//var mostlog = mostication.nodejs.mostlog;


/*
 * ---------------------------
 * Define module
 * ---------------------------
 */
if(typeof(mostication)=="undefined") mostication={};
if(typeof(mostication.nodejs)=="undefined") mostication.nodejs={};
if(typeof(mostication.nodejs.[MODULE_NAME])=="undefined") mostication.nodejs.[MODULE_NAME]={};


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
mostication.nodejs.[MODULE_NAME].[FUNCTION_NAME] = function([PARAM1], [PARAM2]){
	
	
};
