
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
        id = result.id;
        book.find({ name: { $ne: name}, $or :  [{genre: genre}, {rating: rating}]}, function(err, results) {
            res.render('result', {results: results});
        });
    });
};

exports.vote = function(req, res) {
    name = req.body.book;
    value = req.body.value;
    if ( value == 'up') {
        book.update({ name: name}, { $inc: { rating: 1 } }, function(error, result) {
            if (error) return handleError(error);
        });
    } else {
        book.update({ name: name}, { $inc: { rating: -1 } }, function(error, result) {
            if (error) return handleError(error);
        });
    }
    res.end();
}
