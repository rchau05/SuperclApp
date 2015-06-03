var mongoose = require("mongoose");

var authorSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number
});

var Author = mongoose.model("Author", authorSchema);
module.exports = Author;

Author.csvCreate("jack, doe, 13",
	authorSchema.statics.csvCreate=function (csvStr, cb) {
		var attr=csvStr.split(",");
		this.create({
			
		})
	}