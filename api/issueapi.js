import express from 'express';
import db from '../core/db';
import logger from '../core/Logger';
import {getAllIssues,getIssuesByName,updateIssue,addIssue,addIssueComment,getSearchIssue,getIssueById} from '../controllers/issuemodule/issues';

let apiRoutes=express.Router();

apiRoutes.post('/issues', function (req, resp, next) {
return getAllIssues(req.body)
   .then(function (response) {
     resp.json(response);
   })
   .catch(function (error) {
     return next(error);
   })
})

// Get issues list by Name
apiRoutes.post('/searchissues', function (req, resp, next) {
 return getIssuesByName(req.body)
   .then(function (response) {
     resp.json(response);
   })
   .catch(function (error) {
     return next(error);
   })
})

// Add Issues
apiRoutes.post('/issues/add', function (req, resp, next) {
 let issuedetails = req.body;
 if (req.body._id) {
   return updateIssue(issuedetails).then(function (result) {
     resp.json(result);
   })
     .catch(function (err) {
       return next(err);
     })
 }
 else {
   return addIssue(issuedetails).then(function (result) {
     resp.json(result);
   })
     .catch(function (err) {
       return next(err);
     })
 }
})

// Add Issue comment
apiRoutes.post('/issues/addcomment', function (req, resp, next) {
 let issuedetails = req.body;
 if (req.body._id) {
   return addIssueComment(issuedetails).then(function (result) {
     resp.json(result);
   })
     .catch(function (err) {
       return next(err);
     })
 }
})

// Issue Search
apiRoutes.post('/issues/search', function (req, resp, next) {
 return getSearchIssue(req.body, function (data, err) {
   if (err) {
     return next(err);
   }
   else {
     resp.json(data);
   }
 });
})

apiRoutes.get('/issues/:issueId', function (req, resp, next) {
return getIssueById(req.params.issueId)
   .then(function (response) {
     resp.json(response);
   })
   .catch(function (error) {
     return next(error);
   })
})


module.exports = apiRoutes;



