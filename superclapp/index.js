var express=require('express'),
	app=express(),
	request=require('request'),
	bodyParser=require('body-parser'),
	path=require('path'),
	views=path.join(process.cwd(), 'views')

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('views'))

app.get('/', function(req, res){
	var superClap= "<a href='index.html'>Are You Ready to Super Clap?!</a>"
	res.send(superClap)
})

app.post('/timer.html', function (req, res) {
	var timer=path.join(views, 'timer.html')
	res.sendFile(timer);
	res.redirect('/timer.html');
});

app.post('/intro.html', function(req,res){
	var intro=path.join(views, 'intro.html')
	res.sendFile(intro);
})

app.get('/add', function(req, res) {
	var num_1 =parseInt(req.params.num1)
	var num_2=parseInt(req.params.num2)
	res.send('answer is ' + (num_1+num_2))
})

app.listen(3000, function() {
	console.log('It works!')
});

