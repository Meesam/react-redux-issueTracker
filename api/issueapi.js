(function () {
  'use strict';

  let express=require('express');
  let issues=require('../controllers/issuemodule/issues');
  let apiRoutes = express.Router();
  let logger=require('../core/Logger');

// Get all issues list
  apiRoutes.post('/issues',function (req,resp,next) {
    issues.getAllIssues(req.body)
      .then(function (response) {
        resp.json(response);
      })
      .catch(function (error) {
        return next(error);
      })
  });

  // Get issues list by Name
  apiRoutes.post('/searchissues',function (req,resp,next) {
    issues.getIssuesByName(req.body)
      .then(function (response) {
        resp.json(response);
      })
      .catch(function (error) {
        return next(error);
      })
  });

  // Add Issues
  apiRoutes.post('/issues/add',function (req,resp,next) {
    let issuedetails = req.body;
    console.log('req.body  are ', req.body);
    if (req.body._id) {
      issues.updateIssue(issuedetails).then(function (result) {
        resp.json(result);
      })
        .catch(function (err) {
          return next(err);
        })
    }
    else {
      issues.addIssue(issuedetails).then(function (result) {
        resp.json(result);
      })
      .catch(function (err) {
        return next(err);
      })
    }
  });


  // Issue Search
  apiRoutes.post('/issues/search',function (req,resp,next) {
    issues.getSearchIssue(req.body,function(data,err){
      if(err) {
        return next(err);
      }
      else {
        resp.json(data);
      }
    });
  });

 // Issue by Id
  apiRoutes.get('/issues/:issueId',function(req,resp,next){
    issues.getIssueById(req.params.issueId)
      .then(function (response) {
        resp.json(response);
      })
      .catch(function (error) {
        return next(error);
      })
  });


  module.exports = apiRoutes;
})();
