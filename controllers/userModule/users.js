
let mongoose=require('mongoose');
let Users = mongoose.model('Users');
let appconfig=require('../../appconfig');
let globalobj=require('../../core/global');
let util=require('util');
let Q=require('q');

let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');
mongoose.Promise = Promise;

	/*
if (!process.env.JWT_SECRET) {
	console.error('ERROR!: Please set JWT_SECRET before running the app. \n run: export JWT_SECRET=<some secret string> to set JWTSecret. ')
	process.exit();
}*/

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

	function generateToken(user) {
		//Dont use password and other sensitive fields
		//Use fields that are useful in other parts of the app/collections/models
		console.log('user are ' + JSON.stringify(user));
		let token;
		var u = {
			name: user.FirstName + ' ' + user.LastName ,
			username: user.Username,
			_id: user._id,
			emailid:user.Email
		};
		return token = jwt.sign(u, process.env.JWT_SECRET, {
			expiresIn: 60 * 60 * 24 // expires in 24 hours
		});
	}

// Login
exports.doLogin=function(users, callback){
	let obj;
	if(users != null){
		Users.find({usersName:users.usersName,Password:users.password},{__v:0,Password:0},function(err,data){
		 if(err)
		  callback(null,err);
		  else{
		  	if(data.length != 0) {
					var token = generateToken(data[0]);
					obj={
					  status:'success',
					  count:data.length,
					  data:data[0],
					  tokenvalue:token
				  }
			  } else {
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

/*// Save User Detalis
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

};*/


// Get User by Email

	process.env.JWT_SECRET='meesam';
exports.getUserBytoken=function(token,callback){
	let obj;
	if(token != null){
		// decode token
		jwt.verify(token, process.env.JWT_SECRET, function(err, user) {
			if (err)
				throw err;
			Users.findById({'_id': user._id}, function(err, data) {
				if (err)
					callback(null,err);
				if(data) {
					token = generateToken(data);
					obj={
						status:'success',
						count:data.length,
						data:data,
						tokenvalue:token
					}
				} else {
					obj = {
						status: 'success',
						count: 0,
						data: null
					};
				}
				callback(globalobj.globalObject(obj));
			});
		});

	}

};

// Get All Users
exports.getAllUsers=function(aTableInfo,callback){
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

