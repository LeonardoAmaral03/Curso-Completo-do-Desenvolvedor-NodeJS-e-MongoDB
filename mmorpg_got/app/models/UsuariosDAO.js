function UsuariosDAO(connection){
	this._connection = connection;
}

UsuariosDAO.prototype.inserirUsuario = function(usuario, res){
	var dados = {
		operacao: "inserir",
		usuario: usuario,
		collection: "usuarios",
		callback: function(err, result) {
			//res.send("olá Marilene"); send causa erro
		}
	};
	this._connection(dados);
}

UsuariosDAO.prototype.autenticar = function(usuario){
	console.log(usuario);
}

module.exports = function(){
	return UsuariosDAO;
}