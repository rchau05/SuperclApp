var express=require ('express');
var	app=express();

//Set up PG and mode;s with Sequelize
var pg = require("pg");
var models = require("./models/index.js"),
	app=express(),
	bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({
	extended:true
}));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	models.User.findAll().done(function(users, error) {
		res.render('index')
		allUsers:users
		});
	});

//:id is an example of a paramaeter
app.get('/edit/:id', function(req, res) {
	res.render('edit')
	});

app.get('/all', function(req, res) {
	res.render('add')
})

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