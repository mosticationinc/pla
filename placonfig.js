/**
 * Module Name	: placonfig
 * Copyright by	: Mostication Inc. and Most Vending Co.,Ltd.
 * Author		: Anuntachai P.
 * Created Date	: 13/03/2014
 * Description	: Configuration file for PLA's application.
 */


/*
 * Using
 * 
 * Import this configuration in your node.js file:
 * var placonfig = require("./placonfig.js");		//	refer to configuration file
 * 
 * Get a config
 * var applicationName = placonfig.app.applicationName;
 * 
 */


/*
 * ---------------------------
 * Define module
 * ---------------------------
 */
if(typeof(placonfig)=="undefined") placonfig={};


/*
 * ---------------------------
 * Configurations
 * ---------------------------
 */	

//	environment
if(typeof(placonfig.env)=="undefined") placonfig.env={};
placonfig.env.dev = "development";		//	development environment name
placonfig.env.prod = "production";		//	production environment name

//	TODO: Change to production env when deployed.
placonfig.env.currentEnv = placonfig.env.dev;	//	current environment


//	Application configurations set
if(typeof(placonfig.app)=="undefined") placonfig.app={};	//	define application configurations set
placonfig.app.applicationName = "PLA";
placonfig.app.author = "Mostication Inc.";
placonfig.app.authorWebsite = "http://www.mostvending.th.ht";
placonfig.app.authorEmail = "mostvending@gmail.com";


//	Database
if(typeof(placonfig.db)=="undefined") placonfig.db={};		//	define database configurations set
placonfig.db.host = "localhost";
placonfig.db.port = 5432;
placonfig.db.username = "postgres";
placonfig.db.password = "public";
placonfig.db.databaseName = "pla";
placonfig.db.dbms = "postgres";


//	Application Path
if(typeof(placonfig.path)=="undefined") placonfig.path={};		//	define path set
placonfig.path.root = "./";										//	root directory of pla project (should be full path because you can use this from difference path)
placonfig.path.nodecore = placonfig.path.root + "placore/";		//	node.js core of the project
placonfig.path.assets = placonfig.path.root + "assets/";		//	all assets
placonfig.path.lang = placonfig.path.assets + "lang/";			//	languages 
placonfig.path.libs = placonfig.path.assets + "libs/";			//	libraries


//	Web URL
if(typeof(placonfig.webUrl)=="undefined") placonfig.webUrl={};		//	define web path set
placonfig.webUrl.root = "http://localhost/";						//	web url (if there is http's port, add it to this text)
placonfig.webUrl.port = 80;											//	port of server 
placonfig.webUrl.css = placonfig.webUrl.root + "asset/css";			//	css
placonfig.webUrl.img = placonfig.webUrl.root + "asset/img";			//	images
placonfig.webUrl.libs = placonfig.webUrl.root + "asset/libs";		//	libs


//	API
if(typeof(placonfig.api)=="undefined") placonfig.api={};			//	define api information
placonfig.api.name = "PLA API";
placonfig.api.path = "http://localhost:8888/api.js";				//	api url that external application can use our apis



/*
 * ---------------------------
 * Export for requiring
 * ---------------------------
 */

//	when you use require("./placonfig.js"), you will get the placonfig object.
module.exports = placonfig;

