'use strict'

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
	res.status(200).send({data : favoritoId});
}
function getFavoritos(req, res){

}
function saveFavorito(req, res){
	var params = req.body;
	res.status(200).send({favorito: params});
}
function updateFavorito(req, res){
	var params = req.body;
	res.status(200).send({update: true, favorito: params});
}
function deleteFavorito(req, res){
	var params = req.body;
	res.status(200).send({delete: true, favorito: params});
}


module.exports = {
	prueba,
	getFavorito,
	getFavoritos,
	saveFavorito,
	updateFavorito,
	deleteFavorito
}