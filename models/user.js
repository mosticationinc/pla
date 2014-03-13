/**
 * Model Name	: mostication.pla.model.user
 * Copyright by	: Mostication Inc. and Most Vending Co.,Ltd.
 * Author		: Anuntachai P.
 * Created Date	: 13/03/2014
 * Description	: Object model that refer to a user in the application
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
 * Define module
 * ---------------------------
 */
if(typeof(mostication)=="undefined") mostication={};
if(typeof(mostication.pla)=="undefined") mostication.pla={};
if(typeof(mostication.pla.model)=="undefined") mostication.pla.model={};
if(typeof(mostication.pla.model.user)=="undefined") mostication.pla.model.user={};



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

//	create model of User
var User = sequelize.define("User",{
	
	//	define attributes
	
	//	Sequelize will create id (int, pk), createdAt (date), updatedAt (date) by automatically.
	
	//	(PK) user id (reference key of user in the application)
	//id:	{ type: Sequelize.BIGINT, autoIncrement: true, primaryKey: true, comment: "user id (reference key of user in the application)"},
	
	//	unique email (doesn't register with the same email)
	email: { type: Sequelize.STRING, allowNull: false, unique: true, validate: {isEmail:true}, comment: "email of user (unique email)" },
	
	//	password
	password: { type: Sequelize.STRING, allowNull: false, comment: "encoded password" },
	
	//	first name
	firstName: { type: Sequelize.STRING },
	
	//	middle name
	middleName: { type: Sequelize.STRING },
	
	//	last name
	lastName: { type: Sequelize.STRING },
	
	//	home address
	homeAddress: { type: Sequelize.STRING(1000) },
	
	//	country
	country: { type: Sequelize.STRING },
	
	//	telephone number
	telephone: { type: Sequelize.STRING },
	
	//	company
	company: { type: Sequelize.STRING },
	
	//	job position
	jobPosition: { type: Sequelize.STRING },
	
	//	this user was verified or not
	isVerifiedAccount: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false, comment: "True = Verified Account, default = False" },
	
	//	date registered
	dateRegistered: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW, comment: "Registered date" },
	
	//	reference to facebook account (doesn't use the same facebook account for many users)
	facebookRef: { type: Sequelize.STRING, unique: true, allowNull: true, comment: "Reference to facebook account" },
	
	//	reference to google+ account (doesn't use the same google+ account for many users)
	googleRef: { type: Sequelize.STRING, unique: true, allowNull: true, comment: "Reference to google account" },
	
	//	reference to twitter account (doesn't use the same google+ account for many users)
	twitterRef: { type: Sequelize.STRING, unique: true, allowNull: true, comment: "Reference to twitter account" }
	
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

