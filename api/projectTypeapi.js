const express=require('express');
let db=require('../core/db');
let projecttype=require('../controllers/projectmodule/projectTypeModule');
let apiRoutes = express.Router();
let redis=require('../core/redisClient');

  apiRoutes.get('/projecttype',function(req,resp,next){
    console.log('i am call');
    projecttype.getProjectType(function(data,err){
      if(err){
        return next(err);
      } else{
        console.log('data are ' + JSON.stringify(data));
        resp.json(data);
      }
    });
  });

module.exports = apiRoutes;