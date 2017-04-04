const appconfig=require('../../appconfig');
const globalobj=require('../../core/global');
const util=require('util');
const mongoose=require('mongoose');
const Issues = mongoose.model('Issues');
const execPromise=require('../../core/execPromise');


function getAllIssues(aTableInfo,callback){
  let totalRecord=null;
  let perPage = aTableInfo.RPP
    , page = Math.max(0, aTableInfo.CurPage);
  Issues.count({},function(err,data){
    if(err)
      totalRecord=0;
    else
      totalRecord=data;
  });
  Issues.find(function(err,data){
    if(err)
      callback(null,err);
    else {
      let	obj = {
        status: 'success',
        data: data
      };
      callback(globalobj.globalObject(obj));
    }
  }).skip(perPage * (page-1)).limit(perPage).sort('IssueTitle');
};


function addIssue(issuedetails) {
  issuedetails.Status="Open";
  issuedetails.Resolution="Unresolved";
  issuedetails.Reporter="Meesam";
  issuedetails.Assignee="Meesam";
  let issue=new Issues(issuedetails);
  return issue.savePromise();
}

function getIssueById(issueId,callback){
  if(issueId==0)
    callback(null,err);
  else{
    Issues.find({_id:issueId},function(err,data){
      if(err)
        callback(null,err);
      else{
        let	obj = {
          status: 'success',
          count:data.length,
          data: data
        };
        callback(globalobj.globalObject(obj));
      }
    });
  }
};

function getSearchIssue(aTableInfo,callback){
  let totalRecord=null;
  let perPage = aTableInfo.RPP
    , page = Math.max(0, aTableInfo.CurPage);
  let mongoqueryfilter;
  if(aTableInfo.ProjectNameitle){

    mongoqueryfilter={'IssueTitle' : new RegExp(aTableInfo.IssueTitle, 'i')}

  } else {
    mongoqueryfilter={};
  }

  //let mongoqueryfilter={'ProjectName' : new RegExp(aTableInfo.ProjectName, 'i'),'ProjectType':aTableInfo.ProjectType};
  Issues.count(mongoqueryfilter,function(err,data){
    if(err)
      totalRecord=0;
    else
      totalRecord=data;
  });
  Issues.find(mongoqueryfilter,function(err,data){
    if(err)
      callback(null,err);
    else {
      let	obj = {
        status: 'success',
        data: data
      };
      callback(globalobj.globalObject(obj));
    }
  }).skip(perPage * (page-1)).limit(perPage).sort('IssueTitle');
};

module.exports={
  addIssue:addIssue,
  getSearchIssue:getSearchIssue,
  getIssueById:getIssueById,
  getAllIssues:getAllIssues
}
