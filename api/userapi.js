import express from 'express';
import db from '../core/db';
import usersModule from '../controllers/userModule/users';
import Logger from '../core/Logger';

let apiRoutes=express.Router();

apiRoutes.post('/login',function(req,resp,next){
  let users=req.body;
  if(users){
    usersModule.doLogin(users,function(data,err){
      if(err){
        return next(err);
      }
      else{
        if(data.Status=='loginfail')
          return next(new Error('Login Fail'));
        resp.json(data);
      }
    });
  }
});

apiRoutes.post('/allusers',function (req,resp,next) {
  usersModule.getAllUsers(req.body,function(data,err){
    if(err) {
      return next(err);
    }
    else {
      resp.json(data);
    }
  });
});

apiRoutes.get('/userfromtoken',function(req,resp,next){
  let token = req.body.token || req.query.token || req.headers['x-access-token'];
  if (!token) {
    return resp.status(401).json({
      message: 'Must pass token'
    });
  } else {
    usersModule.getUserBytoken(token,function(data,err){
      if(err)
        return next(err);
      else{
        resp.json(data);
      }
    });
  }
});

apiRoutes.post('/userDetails',function (req,resp,next) {
  usersModule.addUserDetails(req.body.Obj,function(data,err){
    if(err) return next(err);
    else resp.json(data);
  });
});

apiRoutes.post('/user/add',function (req,resp,next) {
  console.log(JSON.stringify(req.body));
  usersModule.createUsers(req.body,function(data,err){
    if(err) return next(err);
    else resp.json(data);
  });
});

module.exports = apiRoutes;


