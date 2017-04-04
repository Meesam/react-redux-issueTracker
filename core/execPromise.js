/**
 * Created by administrator on 3/4/17.
 */
const Q=require('q');
const mongoose=require('mongoose');

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
