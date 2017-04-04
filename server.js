
'use strict';
let express=require('express');
let bodyParser=require('body-parser');
let path=require('path');
let userapi=require('./api/userapi');
let moduleapi=require('./api/modulesapi');
let issueapi=require('./api/issueapi');
let issuetypeapi=require('./api/issuetypeapi');
let statusapi=require('./api/statusapi');
let elastic=require('./api/elasticSearchapi');
let projectapi=require('./api/projectapi');
let projecttypeapi=require('./api/projectTypeapi');
let cookieparser=require('cookie-parser');
let responseTime=require('response-time');
let logger=require('./core/Logger');
let config = require('config');


// app configuration
let app=express();
let apiRoutes = express.Router();

// use middleware
app.use(express.static(path.join(__dirname+'/public')));
app.use(express.static(path.join(__dirname+'/public/swagger_dist')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieparser());

// define routing
app.use(responseTime(function (req, resp, value){
    logger.info('[' + req.path +'] http-response-time=' + value + 'ms ');
  })
);

// public api routing middleware

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api', apiRoutes);

//user routing middleware
app.use('/api', userapi);

app.use('/api', elastic);

//application module routing middleware
app.use('/api', moduleapi);

//project routing middleware
app.use('/api', projectapi);

//issue routing middleware
app.use('/api', issueapi);

//issuetype routing middleware
app.use('/api', issuetypeapi);

//status routing middleware
app.use('/api', statusapi);

//project type routing middleware
app.use('/api', projecttypeapi);



app.route('/*').get(function(req, res) {
  /*if(req.path==='/swagger'){
   // for swagger
   return res.sendFile(path.join(__dirname +'/public/swagger_dist/index.html'));
   }*/
  return res.sendFile(path.join(__dirname+'/public/index.html'));

});




// this is for run  server on localhost:9000
app.listen(config.get('WEB_PORT'), function () {
  logger.debug('Server runing at ' + config.get('WEB_PORT'));
});

