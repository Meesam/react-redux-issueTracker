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
  return Q.Promise((resolve, reject)=> {
    that.save((err, item, numberAffected)=> {
      if (err) {
        reject(err);
      }
      resolve([item, numberAffected]);
    });
  });
};

