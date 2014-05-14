var express = require('express');
var router = express.Router();

var mongoose = require('../node_modules/mongoose');
mongoose.connect('mongodb://localhost/quotes');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
console.log("Mongoose Connected!");

var Schema = mongoose.Schema;
var quoteSchema = new Schema({
	screen: String,
	drive: String,
	memory: String,
	price: Number
});

var QuoteModel = mongoose.model('QuoteModel',quoteSchema,'qCol');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


router.get('/saveQuote', function(req, res) {
	//Save quote to the database
	var o = {};
	o.price = req.query.price;
	o.screen = req.query.screen;
	o.drive = req.query.drive;
	o.memory = req.query.memory;

	var quote = new QuoteModel(o);
	quote.save(function(err){
		if(err) return console.error(err);
	});
});

router.get('/loadQuotes', function(req, res) {
	QuoteModel.find().lean().exec(function (err, results) {
		res.send();
	});
});

module.exports = router;
