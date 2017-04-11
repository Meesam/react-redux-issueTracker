/**
 * Created by administrator on 3/4/17.
 */
const Q=require('q');
const mongoose=require('mongoose');

function getModel() {
  return this.constructor;
}

mongoose.Document.prototype.savePromise = function () {
  var that = this;
  return Q.Promise(function(resolve, reject) {
    that.save(function (err, item, numberAffected) {
      if (err) {
        reject(err);
      }
      resolve([item, numberAffected]);
    });
  });
};

mongoose.Document.prototype.updatePromise=function () {
  var that = this;
  let doc = that.toObject();
  console.log('that' , that);
  console.log('doc' , doc);
  return Q.Promise(function(resolve, reject) {
    this.getModel.findOne({_id:that._id}).exec()
      .then(function (result) {
         console.log('result',result);
        resolve(result)
      })

    /*that.save(function (err, item, numberAffected) {
      if (err) {
        reject(err);
      }
      resolve([item, numberAffected]);
    });*/
  });
}
