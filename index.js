'use strict'

let db = require('mongoose');
let app = require('./app');
let port = process.env.PORT || 3678;


db.connect('mongodb://localhost:27017/cursofavoritos', (err, res) => {
	if (err) {
		throw err;
	} else {
		console.log('Conexion a MongoDB correcta');
		app.listen(port,() => {
			console.log(`ApiRest escuchando en el puerto http://localhost:${port}`)
		});
	}
});