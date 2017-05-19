var express       = require('express'),
    app           = express(),
    server        = require('http').createServer(app),
    bodyParser    = require('body-parser'),
    sessionController     = require('./controllers/sessionController.js');

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json());

app.use('/', express.static(__dirname + '/app'));

app.get('/home', sessionController.getValue);
app.post('/home', sessionController.setValue);

server.listen(8080, function(){
	console.log('Listening at port 8080...');
});