var express=require('express');
var app=express();

app.get('/', function (req,res) {
	res.send("Welcome to Ghetto Calculator")
});

app.get('/subtract/:num1/:num2', function(req,res){
	var num_1=parseInt(req.params.num1)
	var num_2=parseInt(req.params.num2)
	res.send('Answer is ' + (num_1-num_2))
});

app.get('/multiply/:num1/:num2', function(req,res){
	var num_1=parseInt(req.params.num1)
	var num_2=parseInt(req.params.num2)
	res.send('Answer is ' + (num_1*num_2))
});

app.listen(3000);