/**
 * Model Name	: mostication.pla.model.index
 * Copyright by	: Mostication Inc. and Most Vending Co.,Ltd.
 * Author		: Anuntachai P.
 * Created Date	: 13/03/2014
 * Description	: singleton of all models
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

//	#TODO: should not permit create, drop for db user in the production because database may be dropped from a junk code.

/*
 * ---------------------------
 * Imports
 * ---------------------------
 */

//	get configurations
var placonfig = require("../placore/placonfig.js");

//	get logging
var mostlogModule = require("../assets/libs/mostication/nodejs/mostlog.js");
var mostlog = mostication.nodejs.mostlog;

var Sequelize = require("sequelize");

/*
 * ---------------------------
 * Global Setting
 * ---------------------------
 */	


/*
 * ---------------------------
 * Define Model
 * ---------------------------
 */



//	connect to the database
var sequelize = new Sequelize(placonfig.db.databaseName, placonfig.db.username, placonfig.db.password, {
								host: placonfig.db.host,
								port: placonfig.db.port,
								dialect: placonfig.db.dbms,
								logging: false,
								omitNull: true
								});


//	models for loading
var models = [ "Users",
               ];

//	load all models
model.forEach(function(model){
	//	load each model and export it
	module.exports[model] = sequelize.import("./" + model);
});

//	make dependencies


/*
 * ---------------------------
 * Testing
 * ---------------------------
 */

/*

var queryChainer = new Sequelize.Utils.QueryChainer();

queryChainer.add(User.sync());

for(var i=0; i<10; i++) {
	var rand = "" + i + Math.floor(Math.random() * 99999);
	queryChainer.add(User.create({ 
							email: "mostvending" + rand + "@gmail.com",
							firstName: "Most" + rand,
							lastName: "Vending",
							password: "justapasword" + rand
						})
					);
}

queryChainer.run()
.success(function() {
	mostlog.log(0, "created!!! by query chainer");
})
.error(function(errors) {
	mostlog.error("querychainer error: " + errors);
});

*/

