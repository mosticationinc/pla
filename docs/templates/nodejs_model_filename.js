/**
 * Model Name	: mostication.pla.model.[MODEL:lowercase]
 * Copyright by	: Mostication Inc. and Most Vending Co.,Ltd.
 * Author		: [YOUR_NAME]
 * Created Date	: [CREATE_DATE]
 * Description	: Object model (attributes, class function, instance methods) that refer to a user in the application (exclude relations)
 */


/*
 * Using
 * 
 * Normally, please look at models/index.js or use below statements:
 * 		var model = require("[ROOT]/models");			//	refer to package path
 * 		var [MODEL_NAME:First_char_is_uppercase] = model.[MODEL_NAME:First_char_is_uppercase];							//	get [MODEL_NAME:First_char_is_uppercase] model
 * 
 * For advance cases such as new initialization, use below statement:
 * 		var [MODEL_NAME:First_char_is_uppercase]Model = sequelize.import("./[MODEL_NAME:First_char_is_uppercase]");		//	explicitly importing
 * 
 */

//	#TODO: should not permit create, drop for db user in the production because database may be dropped by a junk code.

/*
 * ---------------------------
 * Imports
 * ---------------------------
 */

/*

//	Import below for testing only

//	get configurations
var placonfig = require("../placonfig.js");

//	get logging
var mostlogModule = require("../assets/libs/mostication/nodejs/mostlog.js");
var mostlog = mostication.nodejs.mostlog;

var Sequelize = require("sequelize");

*/


/*
 * ---------------------------
 * Global Setting
 * ---------------------------
 */	

/*

//	#TODO: comment this statement when you use Sequelize.import. this statement used for testing only!!
var sequelize = new Sequelize(placonfig.db.databaseName, placonfig.db.username, placonfig.db.password, {
								host: placonfig.db.host,
								port: placonfig.db.port,
								dialect: placonfig.db.dbms,
								logging: false,
								omitNull: true
								});

*/


/*
 * ---------------------------
 * Define Model
 * ---------------------------
 */


//	model creator function that used for calling when you want to create the model object by using :
//		var UserModel = sequelize.import("./[MODEL_NAME:First_char_is_uppercase]");
//
//	Parameters:
//		- (Sequelize) sequelize = sequelize module
//		- (Sequelize Class) ormClass = container of data types, definitions and other functions that we want to use in this defining model process 
//	Return:
//		- ([MODEL_NAME:First_char_is_uppercase]) = data model of [MODEL:lowercase]s
var [MODEL_NAME:First_char_is_uppercase] = function(sequelize, ormClass) {
	return sequelize.define("[MODEL_NAME:First_char_is_uppercase]", {
		
		//	define attributes
		
		//	Sequelize will create id (int, pk), createdAt (date), updatedAt (date) by automatically.
		
		//	(PK) user id (reference key of user in the application)
		//id:	{ type: Sequelize.BIGINT, autoIncrement: true, primaryKey: true, comment: "user id (reference key of user in the application)"},
		
		//email: { type: ormClass.STRING, allowNull: false, unique: true, validate: {isEmail:true}, comment: "email of user (unique email)" },
		
	},
	{
		classMethods: {
			
			//	define class methods
			//method1: function(){ return 'smth' },
			
		},
		
		instanceMethods: {
			
			//	define instance methods
			//method2: function() { return 'foo' },
			
		}
	});

};


//	export user model include attributes, class functions, instance methods
module.exports = [MODEL_NAME:First_char_is_uppercase];

/*
 * ---------------------------
 * Testing
 * ---------------------------
 */


