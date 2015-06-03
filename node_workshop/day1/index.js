var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello Green World!')
})

//':name' is a parameter
app.get('/greet/:name', function(req,res){
	res.send('Hello ' + req.params.name);
});

app.get('/add/:num1/:num2')

var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port);
});