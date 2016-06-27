/*
 * Serve JSON to our AngularJS client
 */
var express     = require('express');
var https       = require('https');
var q           = require('q');
var api         = express.Router();
var db          = require('../config/db').connection;


// API endpoint for /api/apparel
api.get('/api/apparel/:styleCode?', function(req, res) {
	// Insert Apparel API code here
	console.log("getting");
	console.log(res.req.query);

});

// API endpoint for /api/quote
api.post('/api/quote', function(req, res) {
	// Insert Quoting API code here

});

// Function for making an Inventory API call
var getApparelPrice = function getPrice(style_code, color_code, size_code) {
	var	apparelPriceDeferred = q.defer();

	alert("Hello in get apparel");
	// Format the Inventory API endpoint as explained in the documentation
	https.get('// INSERT INVENTORY API END POINT', function(res) {
		res.on('data', function (data) {
			// Parse response XML data here

		});
	}).on('error', function(error) {
		// Handle EDI call errors here

	});

	return apparelPriceDeferred.promise;
}

function t1() {
	alert("t1");
}


// db.query('SELECT * FROM apparel', function(err, rows, fields) {
// 	if (err) throw err;

// 	console.log('The solution is: ', rows);
// });

module.exports = api;