function UsuariosDAO(connection){
	this._connection = connection();
}

UsuariosDAO.prototype.inserirUsuario = function(usuario){
	this._connection.open( function(err, mongoclient){
		mongoclient.collection("usuarios", function(err, collection){
			collection.insert(usuario);

			mongoclient.close();
		});
	});
}

UsuariosDAO.prototype.autenticar = function(usuario, req, res){
	this._connection.open( function(err, mongoclient){
		mongoclient.collection("usuarios", function(err, collection){
			collection.find(usuario).toArray(function(err, result){
				
				if(result[0] != undefined){

					req.session.autorizado = true;

					req.session.usuario = result[0].usuario;
					req.session.casa = result[0].casa;
				} else {
					req.session.autorizado = false;

					req.session.usuario = undefined;
					req.session.casa = undefined;
				}

				if(req.session.autorizado){
					res.redirect("jogo");
				} else {
					var erro = [ { msg : 'Usuário e ou Senha inválidos!' } ];
					res.render("index", {validacao : erro, usuario : usuario});
				}

			});
			mongoclient.close();
		});
	});
}

module.exports = function(){
	return UsuariosDAO;
}