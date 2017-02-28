var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017/Rozgaar2k17';


var insertDocument = function(db, callback) {
	db.collection('registration').insertOne( {
		"First name":"Abhishek",
		"Middle name":"Jayantilal",
		"Last name":"Jha",
		"Age":19,
		//"Date of Birth":{"$date": 1393804800000},
		"Sex":"M",
		//"Date of Expiry":{"$date": 1393804800000},
		"Gram Panchayat":"Virar"
	}, function(err, result) {
		assert.equal(err, null);
		console.log("Inserted a document into the restaurants collection.");
		callback();
	});	
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  insertDocument(db, function(){
  db.close();
});
});