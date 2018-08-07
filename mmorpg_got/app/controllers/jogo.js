module.exports.jogo = function(application, req, res){
	res.header('Cache-control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');

	if(req.session.autorizado !== true){
		res.send('Usuário precisa fazer login');
		return;
	}

	var usuario = req.session.usuario;
	var casa = req.session.casa;

	var connection = application.config.dbConnection; // módulo que exporta a função de conexão com o banco
	var JogoDAO = new application.app.models.JogoDAO(connection); // objeto JogoDAO

	JogoDAO.iniciaJogo(res, usuario, casa);
}

module.exports.sair = function(application, req, res){

	req.session.destroy( function(err){
		res.redirect('/');
	});
}

module.exports.suditos = function(application, req, res){
	res.render("aldeoes", {validacao : {}})
}

module.exports.pergaminhos = function(application, req, res){
	res.render("pergaminhos", {validacao : {}})
}