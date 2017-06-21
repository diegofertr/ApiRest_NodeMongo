'use strict'

let db = require('mongoose');
//Esto nos va permitir definir objetos
let Schema = db.Schema;
//El esquema va representar a cada documento de nuestra base de datos


var FavoritoSchema = Schema({
	title: String,
	description: String,
	url: String
});

module.exports = db.model('Favorito', FavoritoSchema);