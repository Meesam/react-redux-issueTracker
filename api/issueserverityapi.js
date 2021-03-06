(function () {
  'use strict';

  let express=require('express');
  let serverity=require('../controllers/issuemodule/serverity');
  let apiRoutes = express.Router();

  apiRoutes.get('/serverity',function(req,resp,next) {
	 serverity.getAllServerity(function(data,err){
      if(err) {
        return next(err);
      }
      else {
        resp.json(data);
      }
	});
  });

  apiRoutes.get('/serverity/:Sid',function(req,resp,next){
    serverity.getServerityById(req.params.Sid,function(data,err){
      if(err) {
        return next(err);
      }
      else {
        resp.json(data);
      }
    });
  });

  apiRoutes.post('/serverity',function(req,resp,next){
    let serveritydata=req.body.Obj;
    serverity.addServerity(serveritydata,function(data,err){
       if(err)
       	return next(err);
       else
       	resp.json(data);
    });
});

module.exports=apiRoutes;
})();