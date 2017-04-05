(function () {
	'use strict';

let express=require('express');
let db=require('../core/db');
let projects=require('../controllers/projectmodule/projects');
let apiRoutes = express.Router();
let logger=require('../core/Logger');


// Get all project list
  apiRoutes.post('/project',function (req,resp,next) {
    projects.getAllProject(req.body)
      .then(function (response) {
        resp.json(response);
     })
      .catch(function (error) {
        return next(error);
     })
  });

  // Project Search
  apiRoutes.post('/project/search',function (req,resp,next) {
    projects.getSearchProject(req.body,function(data,err){
      if(err) {
        return next(err);
      }
      else {
        console.log('search response are ' + JSON.stringify(data));
        resp.json(data);
      }
    });
  });


apiRoutes.get('/projects/:projectId',function(req,resp,next){
  logger.info('projectId on server ' , req.params)
	projects.getProjectById(req.params.projectId,function(data,err){
		if(err) {
			return next(err);
		}
		else{
			resp.json(data);
		}
	});
});

apiRoutes.get('/suggestprojects/:name',function(req,resp,next){
  projects.getProjectByName(req.params.name,function(data,err){
    if(err) {
      return next(err);
    }
    else{
      resp.json(data);
    }
  });
});

  apiRoutes.get('/project/:name',function(req,resp,next){
    projects.checkProjectByName(req.params.name,function(data,err){
      if(err) {
        return next(err);
      }
      else{
        console.log('data ' , data);
        resp.json(data);
      }
    });
  });


apiRoutes.post('/projects/add',function(req,resp,next){
	projects.addProject(req.body)
    .then(function (result) {
       resp.json(result);
    })
    .catch(function (err) {
      return next(err);
    })
});

module.exports = apiRoutes;

})();
