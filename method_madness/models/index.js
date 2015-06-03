var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/method_test");

var Book = require("./books.exit
"); //putting it as ./book.js is optional
var Author = require("./author");

//allows people to interact with book model
//e.g.
//var db = require("./models")
//db.Book.create

module.exports.Book = Book;
module.exports.Author = Author;