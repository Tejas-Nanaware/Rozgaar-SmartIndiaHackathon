var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017/Rozgaar2k17';

//Query to find:
var findRegistrations = function(db, callback) {
   var cursor =db.collection('registration').find({"First name":"Abhishek","Last name":"Jain"});
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         console.dir(doc);
      } else {
         callback();
      }
   });
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  findRegistrations(db, function(){
  db.close();
});
});