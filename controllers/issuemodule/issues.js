const appconfig=require('../../appconfig');
const globalobj=require('../../core/global');
const util=require('util');
const mongoose=require('mongoose');
const Issues = mongoose.model('Issues');
const execPromise=require('../../core/execPromise');
const Q=require('q');
const moment=require('moment');

function getAllIssues(aTableInfo){
  let perPage = aTableInfo.RPP
    , page = Math.max(0, aTableInfo.CurPage);
  return Q(Issues.count().exec())
    .then(function (count) {
      return Q(Issues.find().sort(aTableInfo.SortBy).skip(perPage * (page-1)).limit(perPage).exec())
        .then(function(issues) {
          return result={
            totalRecord:count,
            data:issues
          }
        })
    })
    .catch(function (error) {
      return error;
    })
};


function addIssue(issuedetails) {
  issuedetails.Activity=[];
  issuedetails.Status="Open";
  issuedetails.Resolution="Unresolved";
  issuedetails.Reporter="Meesam";
  issuedetails.Assignee="Meesam";
  issuedetails.Activity.push({
    UpdateDate:moment().format("DD-MM-YYYY"),
    UpdateBy:"Meesam",
    UpdateDescription:"Create new Issue"
  });
  let issue=new Issues(issuedetails);
  return issue.savePromise()
    .then(function (result) {
       console.log('result ' , result);
    })
}

/*function addActivity(id) {
  return Q(Issues.findOne({_id:id}).exec())
    .then(function(project) {

    })
    .catch(function (error) {
       console.log('error',error)
    })
}*/

function getIssueById(issueId){
  return Q(Issues.find({_id:issueId}).exec())
  .then(function (issue) {
    return result={
      data:issue
    }
  })
  .catch(function (error) {
     return error;
  })
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
