const appconfig=require('../../appconfig');
const globalobj=require('../../core/global');
const util=require('util');
const mongoose=require('mongoose');
let Projects = mongoose.model('Projects');
const Q=require('q');

  function getAllProject(aTableInfo) {
    let perPage = aTableInfo.RPP
      , page = Math.max(0, aTableInfo.CurPage);
    return Q(Projects.count().exec())
			.then(function (count) {
				return Q(Projects.find().sort(aTableInfo.SortBy).skip(perPage * (page-1)).limit(perPage).exec())
					.then(function(project) {
						 return result={
						 	 totalRecord:count,
							 data:project
						 }
					})
			})
			.catch(function (error) {
				 return error;
      })
  }

  function getSearchProject(aTableInfo,callback){
    console.log('aTableInfo ' +  JSON.stringify(aTableInfo));
    let totalRecord=null;
    let perPage = aTableInfo.RPP
      , page = Math.max(0, aTableInfo.CurPage);
    let mongoqueryfilter;
    if(aTableInfo.ProjectName){

    	mongoqueryfilter={'ProjectName' : new RegExp(aTableInfo.ProjectName, 'i')}

		} else if(aTableInfo.ProjectType){

    	mongoqueryfilter={'ProjectType' : aTableInfo.ProjectType}

		} else if(aTableInfo.ProjectName && aTableInfo.ProjectType){

			mongoqueryfilter={'ProjectName' : new RegExp(aTableInfo.ProjectName, 'i'),'ProjectType':aTableInfo.ProjectType};
		} else {
      mongoqueryfilter={};
		}

    Projects.count(mongoqueryfilter,function(err,data){
      if(err)
        totalRecord=0;
      else
        totalRecord=data;
    });
    Projects.find(mongoqueryfilter,function(err,data){
      if(err)
        callback(null,err);
      else {
        let	obj = {
          status: 'success',
          data: data
        };
        callback(globalobj.globalObject(obj));
      }
    }).skip(perPage * (page-1)).limit(perPage).sort('ProjectName');
  };

 function addProject(projectdetails,callback){
		let project=new Projects(projectdetails);
		return project.savePromise();
	};

 function getProjectById(projectId,callback){
		if(projectId==0)
			callback(null,err);
		else{
			Projects.find({_id:projectId},function(err,data){
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

	function getProjectByName(name,callback){
		Projects.find({'ProjectName':new RegExp(name,'i') },function(err,data){
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
	};

  //checkProjectByName
  function checkProjectByName(name,callback){
    Projects.find({'ProjectName':name },function(err,data){
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
  };

  module.exports={
    checkProjectByName:checkProjectByName,
    getProjectByName:getProjectByName,
    getProjectById:getProjectById,
    addProject:addProject,
    getSearchProject:getSearchProject,
    getAllProject:getAllProject
	}





