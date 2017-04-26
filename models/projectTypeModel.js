import mongoose from 'mongoose';

let projectTypeSchema=new mongoose.Schema({
    Title:{type:String,required:true}
  });

const ProjectType = mongoose.model('ProjectType', projectTypeSchema);

module.export=ProjectType;
