import express from 'express';
import db from '../core/db';
import logger from '../core/Logger';
import {getProjectType } from '../controllers/projectmodule/projectTypeModule'

let apiRoutes = express.Router();
apiRoutes.get('/projecttype',function(req,resp,next){
  return getProjectType(function(data,err){
    if(err){
      return next(err);
    } else{
      console.log('data are ' + JSON.stringify(data));
      resp.json(data);
    }
  });
});

module.exports = apiRoutes;

