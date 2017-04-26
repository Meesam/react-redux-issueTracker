import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import UserApi from './api/userapi'
import moduleapi from './api/modulesapi';
import issueapi from './api/issueapi';
import projectapi from './api/projectapi';
import ProjectTypeApi from './api/projectTypeapi';
import cookieparser from 'cookie-parser';
import responseTime from 'response-time';
import logger from './core/Logger';
import config from 'config';
var projectApi = new projectapi();
var issueApi = new issueapi();
var moduleApi = new moduleapi();
const apis=[moduleApi.getAllroutes(),issueApi.getAllroutes(),projectApi.getAllroutes(),ProjectTypeApi, UserApi];

class Server{
  constructor(app){
    this.app=app;
  }

  getResponseTime(){
    this.app.use(responseTime(function (req, resp, value){
        logger.info('[' + req.path +'] http-response-time=' + value + 'ms ');
      })
    );
  }

  setCrossOrigin(){
    this.app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });
  }

  setMiddleware(){
    this.app.use(express.static(path.join(__dirname+'/public')));
    this.app.use(express.static(path.join(__dirname+'/public/swagger_dist')));
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
    this.app.use(cookieparser());
  }

  setStartPage(){
    this.app.route('/*').get(function(req, res) {
      return res.sendFile(path.join(__dirname+'/public/index.html'));
    });
  }

  getRoute(){
    return this.app.use('/api',apis);
  }

  startServer(){
    this.app.listen(config.get('WEB_PORT'), function () {
      logger.debug('Server runing at ' + config.get('WEB_PORT'));
    });
  }
}

export default Server;










