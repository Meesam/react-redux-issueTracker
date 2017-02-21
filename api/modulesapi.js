const express=require('express');
let db=require('../core/db');
let appModule=require('../controllers/appmodule/appmenu');
let apiRoutes = express.Router();
let redis=require('../core/redisClient');

apiRoutes.get('/modules',function(req,resp,next){
  appModule.getAllModules(function(data,err){
    if(err){
      return next(err);
    } else{
      resp.json(data);
    }
  });
});

apiRoutes.get('/modulemenu/:id',function(req,resp,next){
  appModule.getMenubyId(req.params.id,function(data,err){
   if(err){
    return next(err);
   } else{
    resp.json(data);
   }
  });
});


module.exports = apiRoutes;