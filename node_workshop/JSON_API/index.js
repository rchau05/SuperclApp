var express=require('express');
var app=express();
var request=require('request');
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended:true
}));

app.set('view engine', 'ejs');

app.get('/first', function(req,res){
	request('http://daretodiscover.herokuapp.com/users', function(error, response, body){
var users=JSON.parse(body);

		res.render('first', {
			allUsers: users
		});
	});
});

app.get('/last', function(req,res){
	request("http://daretodiscover.herokuapp.com/users", function(error, response, body){
 var users=JSON.parse(body);

 		res.render("last", {
			allUsers: users
		});
 	});
 });

app.get("/all", function(req, res) {
	request("http://daretodiscover.herokuapp.com/users", function(error, response, body) {
var users = JSON.parse(body);

		res.render("all", {
			allUsers: users
		});
	});
});

app.get('/new', function(req,res) { 
	res.render('new');
});

app.post('/new', function(req,res) {
	request({
		method: "POST",
		uri: "http//daretodiscover.com/herokuapp.com/users",
		formData: {
			firstname: req.body.firstname,
			lastname:req.body.lastname,
			username:req.body.username,
			age: req.body.age
		}
	}, function(error, response, body){
		res.redirect('/all');
	});
});

var methodOverride = require("method-override");

app.use(methodOverride("_method"));

app.put("/user/:id", function(req, res) {
    request({
        method: "PUT",
        uri: "http://daretodiscover.herokuapp.com/users/" + req.params.id,
        formData: {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            age: req.body.age,
            username: req.body.username
        }
    }, function(error, response, body) {
        res.redirect("/user");
    });
});

app.delete("/user/:id", function(req, res) {
    request({
        method: "DELETE",
        uri: "http://daretodiscover.herokuapp.com/users/" + req.params.id
    }, function(error, response, body) {
        res.redirect("/user");
    });
});

app.get('/edit/:id', function(req, res) {
	request('http://daretodiscover.herokuapp.com/users/' + req.params.id, function(error, response, body){
		res.render('edit', {
			userInfo: JSON.parse(body)
		})
	})
})

app.listen(3000, function(){
	console.log("It works!")
});