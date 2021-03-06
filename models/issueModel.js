(function () {
  'use strict';

  let mongoose = require( 'mongoose' );

  let IssueSchema=new mongoose.Schema({
    IssueTitle:{type:String,required:true},
    Project:{type:String},
    IssueType:{type:String,required:true},
    Priority:{type:String,required:true},
    StartDate:Date,
    EndDate:Date,
    Sprint:{type:String},
    Lable:{type:String},
    Status:{type:String},
    Resolution:{type:String},
    Reporter:{type:String},
    Assignee:{type:String},
    Watchers:{type:Array},
    Activity:[{
      UpdateDate:Date,
      UpdateBy:{type:String},
      UpdateDescription:{type:String}
    }],
    Comments:{
      CommentBy:{type:String},
      CommentDate:Date,
      CommentText:{type:String}
    },
    Attachment:{
      FileName:{type:String},
      Extention:{type:String}
    },
    Description:{type:String, required:true},

  });
  module.exporst=mongoose.model('Issues',IssueSchema);
})();
