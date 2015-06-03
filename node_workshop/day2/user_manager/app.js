var express = require('express');
var	app = express();

//Set up PG and mode;s with Sequelize
var pg = require("pg");
var models = require('./models/index.js'),
	bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({
	extended:true
}));

//set up method override
var methodOverride=require('method-override');
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	models.User.findAll().done(function(users, error) {
		res.render('index')
		allUsers:users
		});
	});
});

//:id is an example of a parameter
app.get('/edit/:id', function(req, res) {
	models.User.findById(req.params.id).done(function(user, error) {
		res.render('edit', {
			userInfo: user
		})
	})
});

app.put('/edit/:id', function(req,res) {
	models.User.findById(req.params.id).done(function(user, error) {
		user.updateAttributes({
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			age: req.body.age,
			username: req.body.username
		}).done (function() {
			res.redirect('/');
		});
	});
});

app.get('/all', function(req, res) {
	res.render('add');
});

app.delete('/edit/:id', function(req, res) {
	models.User.findById(req.params.id).done(function(user, error) {
		user.destroy().done(function(){
			res.redirect("/");
		});
	});
});

app.post('/add', function(req,res) {
	models.User.create({
		firstname:req.body.firstname,
		lastname:req.body.lastname,
		age:req.body.age,
		username:req.body.username
	}).done(function(){ 
		res.redirect('/');
	});
});	

app.listen(3000);