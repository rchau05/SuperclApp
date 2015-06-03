var express=require('express');
var app=express();

var request=require('request');

//Another way of setting up variables
// var express=require('express')
// 	app=express(),
// 	request=require('request')

app.set('view engine', 'ejs');

//passing in a name
app.get('/greet/:name', function (req,res) {
	res.render('index', {
		//bottom is where you input your name in URL
		name: req.params.name
	});
})

app.get('/api', function(req, res){
	request("http://google.com", function(error, response, body){
		console.log(body)
})
})

app.listen(3000);