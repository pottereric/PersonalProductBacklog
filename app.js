var express = require('express');
var app = express();
var formidable = require('formidable');

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response){
	response.send('Hello World');
});

app.get('/addition', function (request, response){
	response.writeHead(200, { 'Content-Type': 'application/json' });
	response.end('{ "result": 77 }');
	console.log('Handled addition request');
});

var port = 8080;
app.listen(port);
console.log('listening');
