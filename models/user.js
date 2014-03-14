/**
 * Model Name	: mostication.pla.model.user
 * Copyright by	: Mostication Inc. and Most Vending Co.,Ltd.
 * Author		: Anuntachai P.
 * Created Date	: 13/03/2014
 * Description	: Object model (attributes, class function, instance methods) that refer to a user in the application (exclude relations)
 */


/*
 * Using
 * 
 * Normally, please look at models/index.js or use below statements:
 * 		var model = require("[ROOT]/models");			//	refer to package path
 * 		var User = model.User;							//	get User model
 * 
 * For advance cases such as new initialization, use below statement:
 * 		var UserModel = sequelize.import("./User");		//	explicitly importing
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
var placonfig = require("../placore/placonfig.js");

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
//		var UserModel = sequelize.import("./User");
//
//	Parameters:
//		- (Sequelize) sequelize = sequelize module
//		- (Sequelize Class) ormClass = container of data types, definitions and other functions that we want to use in this defining model process 
//	Return:
//		- (User) = data model of users
var User = function(sequelize, ormClass) {
	return sequelize.define("User", {
		
		//	define attributes
		
		//	Sequelize will create id (int, pk), createdAt (date), updatedAt (date) by automatically.
		
		//	(PK) user id (reference key of user in the application)
		//id:	{ type: Sequelize.BIGINT, autoIncrement: true, primaryKey: true, comment: "user id (reference key of user in the application)"},
		
		// unique email (doesn't register with the same email)
		email: { type: ormClass.STRING, allowNull: false, unique: true, validate: {isEmail:true}, comment: "email of user (unique email)" },
		
		//	password
		password: { type: ormClass.STRING, allowNull: false, comment: "encoded password" },
		
		//	first name
		firstName: { type: ormClass.STRING },
		
		//	middle name
		middleName: { type: ormClass.STRING },
		
		//	last name
		lastName: { type: ormClass.STRING },
		
		//	home address
		homeAddress: { type: ormClass.STRING(1000) },
		
		//	country
		country: { type: ormClass.STRING },
		
		//	telephone number
		telephone: { type: ormClass.STRING },
		
		//	company
		company: { type: ormClass.STRING },
		
		//	job position
		jobPosition: { type: ormClass.STRING },
		
		//	this user was verified or not
		isVerifiedAccount: { type: ormClass.BOOLEAN, allowNull: false, defaultValue: false, comment: "True = Verified Account, default = False" },
		
		//	date registered
		dateRegistered: { type: ormClass.DATE, allowNull: false, defaultValue: ormClass.NOW, comment: "Registered date" },
		
		//	reference to facebook account (doesn't use the same facebook account for many users)
		facebookRef: { type: ormClass.STRING, unique: true, allowNull: true, comment: "Reference to facebook account" },
		
		//	reference to google+ account (doesn't use the same google+ account for many users)
		googleRef: { type: ormClass.STRING, unique: true, allowNull: true, comment: "Reference to google account" },
		
		//	reference to twitter account (doesn't use the same google+ account for many users)
		twitterRef: { type: ormClass.STRING, unique: true, allowNull: true, comment: "Reference to twitter account" }
		
	},
	{
		classMethods: {
			
			//	define class methods
			//method1: function(){ return 'smth' },
			
		},
		
		instanceMethods: {
			
			//	define instance methods
			//method2: function() { return 'foo' },
			
			//	get full name (fisrt name and last name)
			getFullName: function() {
				return [this.firstName, this.lastName].join(" ");
			},
		
			//	get long name (first name, middle name, last name)
			getLongName: function() {
				return [this.firstName, this.middleName, this.lastName].join(" ");
			},
			
		}
	});

};


//	export user model include attributes, class functions, instance methods
module.exports = User;

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

