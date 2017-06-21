'use strict'

let Favorito = require('../models/favorito');

function prueba(req, res) {
	if (req.params.nombre) {
		var nombre = req.params.nombre;	
	} else {
		var nombre = "S/N";
	}

	res.status(200).send({
		data: [2,3,4],
		texto: "Hola mundo con Nodejs y Express - "+nombre
	});
}

function getFavorito(req, res){
	var favoritoId = req.params.id;
	Favorito.findById(favoritoId, (err, favorito) => {
		if (err) {
			res.status(500).send({message: 'Error al devolver el marcador'});
		}
		if (!favorito) {
			res.status(404).send({message: 'Error no existe el marcador'});
		}

		res.status(200).send({favorito});
	});

}

function getFavoritos(req, res){
	//El primer parametro el alguna query 
	//El segundo parametro es un callback
	Favorito.find({}).sort('-_id').exec((err, favoritos) => {
		if(err){
			res.status(500).send({message: 'Error al devolver los marcadores'});
		}
		if(!favoritos) {
			res.status(404).send({message: 'Error no existen marcadores'});			
		}
		res.status(200).send({favoritos});
	});
}

function saveFavorito(req, res){
	let favorito = new Favorito();
	let params = req.body;

	favorito.title = params.title;
	favorito.description = params.description;
	favorito.url = params.url;

	//funcion callback
	favorito.save((err, favoritoStored) => {
		if(err){
			res.status(500).send({message: 'Error al guardar el marcador'});
		}
		res.status(200).send({favorito: favoritoStored});
	});
}

function updateFavorito(req, res){
	var favoritoId = req.params.id;
	var update = req.body;

	Favorito.findByIdAndUpdate(favoritoId, update, (err, favoritoUpdated) => {
		if(err){
			res.status(500).send({message: 'Error al actualizar el marcador'});
		}
		res.status(200).send({favorito: favoritoUpdated});
	});
}

function deleteFavorito(req, res){
	var favoritoId = req.params.id;

	Favorito.findById(favoritoId, (err, favorito) => {
		if(err){
			res.status(500).send({message: 'Error al devolver el marcador'});
		}
		if(!favorito) {
			res.status(404).send({message: 'Error no existe marcador'});
		} else {
			favorito.remove(err => {
				if (err) {
					res.status(500).send({message: 'Error al borrar marcador'});
				} else {
					res.status(200).send({message: 'El marcador se ha eliminado'});
				}
			});
		}
	})
}


module.exports = {
	prueba,
	getFavorito,
	getFavoritos,
	saveFavorito,
	updateFavorito,
	deleteFavorito
}