(function () {
  'use strict';

  let mongoose = require( 'mongoose' );
  let projectTypeSchema=new mongoose.Schema({
    Title:{type:String,required:true}
  });

  module.exporst=mongoose.model('ProjectType',projectTypeSchema);
})();