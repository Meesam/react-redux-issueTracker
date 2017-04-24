import mongoose from 'mongoose';

let moduleSchema=new mongoose.Schema({
    MenuName:{type:String,required:true},
    MenuRoute:String
});
const Modules = mongoose.model('Modules', moduleSchema);

module.export=Modules;
