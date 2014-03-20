/**
 * Module Name	: mostication.admin.tools.db.createmodeltable
 * Copyright by	: Mostication Inc. and Most Vending Co.,Ltd.
 * Author		: Anuntachai P.
 * Created Date	: 20/03/2014
 * Description	: Creating database tables from declared models.
 */


/*
 * Using
 * 
 * 1. Create database by db/201403101654_Create_DB.sql
 * 2. Change database configurations in placonfig.js
 * 3. Run this tools : node createmodeltable.js
 * 4. Check the database. If there are no table in the database, rerun again 
 *    (right now I don't know why the tables don't created in the first time.)
 *  
 */


/*
 * ---------------------------
 * Imports
 * ---------------------------
 */

//	get configurations
var placonfig = require("../../../placonfig.js");

//	get logging
var mostlog = require("../../../assets/libs/mostication/nodejs/mostlog.js");


/*
 * ---------------------------
 * Define Namespace
 * ---------------------------
 */
if(typeof(mostication)=="undefined") mostication={};
if(typeof(mostication.admin)=="undefined") mostication.admin={};
if(typeof(mostication.admin.tools)=="undefined") mostication.admin.tools={};
if(typeof(mostication.admin.tools.db)=="undefined") mostication.admin.tools.db={};
if(typeof(mostication.admin.tools.db.createmodeltable)=="undefined") mostication.admin.tools.db.createmodeltable={};


/*
 * ---------------------------
 * Global Setting
 * ---------------------------
 */	

//	load models
var model = require("../../../models");

var queryChainer = new model.Sequelize.Utils.QueryChainer();

/*
 * ---------------------------
 * Processes
 * ---------------------------
 */

mostlog.log(0, "Creating database tables...");

//	add models here!
queryChainer.add(model.User.sync());


//	check and create tables. (by .sync())
queryChainer.runSerially();

mostlog.log(0, "Done! All tables were created. Please check the database. If the tables do not created, Please run this tool again!");

