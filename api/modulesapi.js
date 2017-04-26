import express from 'express';
import db from '../core/db';
//import appModule from '../controllers/appmodule/appmenu';
import redis from '../core/redisClient';
import {getAllModules} from '../controllers/appmodule/appmenu'


export default class moduleapi {
  constructor() {
    this.apiRoutes = express.Router();
  }

  getAllroutes() {
    this.apiRoutes.get('/modules',function(req,resp,next){
      return getAllModules(function(data,err){
        if(err){
          return next(err);
        } else{
          resp.json(data);
        }
      });
    });
    return this.apiRoutes;
  }

  }


