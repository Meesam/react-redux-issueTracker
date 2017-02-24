(function () {
	'use strict';

let appconfig=require('../../appconfig');
let globalobj=require('../../core/global');
let util=require('util');
let Q=require('q');
let mongoose=require('mongoose');
let Users = mongoose.model('Users');
let UsersDetails=mongoose.model('UsersDetails');

// Add User
exports.createUsers=function(users,callback){
  if(users){
	  console.log('User data is ' + JSON.stringify(users));
	  let user=new Users(users);
	   user.save(function(err,data){
	   if(err)
	    callback(null,err);
	   else {
		   let obj={
		   status:'success',
		   count:data.length,
		   data:data
	     };
		   callback(globalobj.globalObject(obj));
	   }
	 });
   }
};

// Login
exports.doLogin=function(users,callback){
	let obj;
	if(users != null){
	  Users.find({usersName:users.usersName,Password:users.password},function(err,data){
		 if(err)
		  callback(null,err);
		  else{
		  	if(data.length != 0) {
				   obj={
					  status:'success',
					  count:data.length,
					  data:data,
					 // tokenvalue: data[0].Email
					  tokenvalue:'meesam.engineer@gmail.com'
				  };
			  }
			 else {
				   obj = {
					  status: 'success',
					  count: 0,
					  data: null
				  };
			  };
			 callback(globalobj.globalObject(obj));
		 }
	  });
  }
};

// Save User Detalis
exports.addUserDetails=function (userDetails,callback) {
	for(let i=0;i < userDetails.length;i++){
		let userDetail=new UsersDetails({
			Name : userDetails[i].Name,
			Email: userDetails[i].Email,
			Address:userDetails[i].Address
		});
		userDetail.save(function(err){
			if(err)
				callback(null,err);
			else{
				let obj={
					status:'success',
					count:0,
					data:'Record add successfully'
				};
				callback(globalobj.globalObject(obj));
			}
		});
	}

};


// Get User by Email
exports.getUserByEmail=function(emailid,callback){
	if(emailid != null){
		Users.find({Email:emailid},function(err,data){
           if(err)
		    callback(null,err);
			else{
			   let obj={
				   status:'success',
				   count:data.length,
				   data:data
			   };
			   callback(globalobj.globalObject(obj));
		   }
		});
	}

};

// Get All Users
exports.getAllUsers=function(callback){
    Users.find({},function(err,data){
		if(err)
		 callback(null,err);
		else{
			let obj={
				status:'success',
				count:data.length,
				data:data
			};
			callback(globalobj.globalObject(obj));
		}
	});

};
})();
