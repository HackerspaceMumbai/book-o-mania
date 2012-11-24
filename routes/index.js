
/*
 * GET home page.
 */

var db = require('mongoose');
var book = db.model('book');

exports.index = function(req, res){
  res.render('index', { title: 'Book-O-Mania' });
};

exports.result = function(req, res) {
    name = req.body.book;
    book.findOne({name: name},'genre rating keywords',function(err, result) {
        if (err) return handleError(err);
        genre = result.genre;
        keywords = result.keywords;
        rating = result.rating;
        book.find({ name: { $ne: name}, $or :  [{genre: genre}, {rating: rating}]}, function(err, results) {
            res.render('result', {results: results, title: "Book-O-Mania"});
        });
    });
};
