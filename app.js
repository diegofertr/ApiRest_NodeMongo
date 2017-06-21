var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var api = require('./routes/favorito');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//middleware
app.use((req, res, next) => {
	//En el parametro * es donde indicamos quien puede hacer peticiones a nuestra API
	//el * sirve para que cualquiera app pueda hacer peticiones a nuestra API
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

	next();
})


app.use('/api', api);

module.exports = app;