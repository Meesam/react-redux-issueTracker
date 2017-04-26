import express from 'express';
import db from '../core/db';
import logger from '../core/Logger';
import {getAllIssues,getIssuesByName,updateIssue,addIssue,addIssueComment,getSearchIssue,getIssueById} from '../controllers/issuemodule/issues';

export default class issueapi {
  constructor() {
    this.apiRoutes = express.Router();
  }

  getAllroutes() {
    this.apiRoutes.post('/issues', function (req, resp, next) {
      return getAllIssues(req.body)
        .then(function (response) {
          resp.json(response);
        })
        .catch(function (error) {
          return next(error);
        })
    }),


      // Get issues list by Name
      this.apiRoutes.post('/searchissues', function (req, resp, next) {
        return getIssuesByName(req.body)
          .then(function (response) {
            resp.json(response);
          })
          .catch(function (error) {
            return next(error);
          })
      }),

      // Add Issues
      this.apiRoutes.post('/issues/add', function (req, resp, next) {
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
      }),

      // Add Issue comment
      this.apiRoutes.post('/issues/addcomment', function (req, resp, next) {
        let issuedetails = req.body;
        if (req.body._id) {
          return addIssueComment(issuedetails).then(function (result) {
            resp.json(result);
          })
            .catch(function (err) {
              return next(err);
            })
        }
      }),

      // Issue Search
      this.apiRoutes.post('/issues/search', function (req, resp, next) {
        return getSearchIssue(req.body, function (data, err) {
          if (err) {
            return next(err);
          }
          else {
            resp.json(data);
          }
        });
      }),

      this.apiRoutes.get('/issues/:issueId', function (req, resp, next) {
        return getIssueById(req.params.issueId)
          .then(function (response) {
            resp.json(response);
          })
          .catch(function (error) {
            return next(error);
          })
      })
    return this.apiRoutes;
  }
}






