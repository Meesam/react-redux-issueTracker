import mongoose from 'mongoose';

let projectSchema=new mongoose.Schema({
  ProjectName:{type:String,required:true},
  StartDate:Date,
  EndDate:Date,
  ProjectType:{type:String,required:true},
  Description:{type:String, required:true},
});
const Projects = mongoose.model('Projects', projectSchema);

module.export=Projects;
