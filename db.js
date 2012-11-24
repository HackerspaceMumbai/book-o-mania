var db = require("mongoose");
var Schema = db.Schema;

var book = new Schema({
    name: String,
    genre: String,
    rating: Number,
    keywords: [ String ]
});

db.model('book', book);
db.connect('mongodb://localhost/express-book');
