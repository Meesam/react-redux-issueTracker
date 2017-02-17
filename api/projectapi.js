(function () {
	'use strict';

let express=require('express');
let db=require('../core/db');
let projects=require('../controllers/projectmodule/projects');
let apiRoutes = express.Router();
let logger=require('../core/Logger');


// Get all project list
apiRoutes.post('/project',function (req,resp,next) {
	projects.getAllProject(req.body,function(data,err){
		if(err) {
			return next(err);
		}
		else {
      console.log(JSON.stringify(data));
			resp.json(data);
		}
	});
});


apiRoutes.get('/projects/:projectId',function(req,resp,next){
	projects.getProjectById(req.params.projectId,function(data,err){
		if(err) {
			return next(err);
		}
		else{
			resp.json(data);
		}
	});
});


apiRoutes.post('/projects/add',function(req,resp,next){
	projects.addProject(req.body.Obj,function(data,err){
		if(err) {
			return next(err);
		}
		else {
			resp.json(data);
		}
	});
});

module.exports = apiRoutes;

})();