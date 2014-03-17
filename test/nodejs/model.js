

var mostlog = require("../../assets/libs/mostication/nodejs/mostlog.js");


//	load models
var model = require("../../models");



var queryChainer = new model.Sequelize.Utils.QueryChainer();


//force sync (if there is no Users in database, create it)
queryChainer.add(model.User.sync());
//model.User.sync({force:true});		

queryChainer.runSerially();

for(var i=0; i<10; i++) {
	var rand = "" + i + Math.floor(Math.random() * 99999);
	queryChainer.add(model.User.create({ 
							email: "mostvending" + rand + "@gmail.com",
							firstName: "Most" + rand,
							lastName: "Vending",
							password: "justapasword" + rand
						})
					);
}


//	execute sync, insert users
queryChainer.runSerially()
.success(function(users) {
	mostlog.log(0, "created!!! by query chainer");
	
	//	the first auser is a sync result object. so, there is no id.
	users.forEach(function(auser){
		mostlog.log(0, "ID = " + auser.id);
	});
	
})
.error(function(errors) {
	mostlog.error("querychainer error: " + errors);
});


//	show users in database
model.User.findAll().success(function(users){
	mostlog.log(0,"search results ->");
	users.forEach(function(auser){
		mostlog.log(0, "ID = " + auser.id + ", Full Name = " + auser.getFullName());
	});
	
});

