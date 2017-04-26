import express from 'express';
import db from '../core/db';
//import projects from '../controllers/projectmodule/projects';
import logger from '../core/Logger';
import {getAllProject,getSearchProject,getProjectById, getProjectByName,
  checkProjectByName, addProject} from '../controllers/projectmodule/projects'

//let apiRoutes = express.Router();


export default class projectapi {
  constructor(){
    this.apiRoutes=express.Router();
  }

  getAllroutes() {
    this.apiRoutes.post('/project',function (req,resp,next) {
      return getAllProject(req.body)
        .then(function (response) {
          console.log('project responce are ' , response);
          resp.json(response);
        })
        .catch(function (error) {
          return next(error);
        })
    });

    this.apiRoutes.post('/project/search',function (req,resp,next) {
      return getSearchProject(req.body,function(data,err){
        if(err) {
          return next(err);
        }
        else {
          console.log('search response are ' + JSON.stringify(data));
          resp.json(data);
        }
      });
    });


    this.apiRoutes.get('/projects/:projectId',function(req,resp,next){
      logger.info('projectId on server ' , req.params)
      return getProjectById(req.params.projectId,function(data,err){
        if(err) {
          return next(err);
        }
        else{
          resp.json(data);
        }
      });
    });

    this.apiRoutes.get('/suggestprojects/:name',function(req,resp,next){
      return getProjectByName(req.params.name,function(data,err){
        if(err) {
          return next(err);
        }
        else{
          resp.json(data);
        }
      });
    });

    this.apiRoutes.get('/project/:name',function(req,resp,next){
      return checkProjectByName(req.params.name,function(data,err){
        if(err) {
          return next(err);
        }
        else{
          console.log('data ' , data);
          resp.json(data);
        }
      });
    });


    this.apiRoutes.post('/projects/add',function(req,resp,next){
      return addProject(req.body)
        .then(function (result) {
          resp.json(result);
        })
        .catch(function (err) {
          return next(err);
        })
    });
    return this.apiRoutes;
  }
}

/*module.exports = apiRoutes;*/





