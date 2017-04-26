import mongoose from 'mongoose';



let UserDetailSchema=new mongoose.Schema({
  Name:{type:String,required:true},
  Email:[String],
  Address:[String]
});

module.exports=UserDetailSchema;