module.exports.jogo = function(application, req, res){
	res.header('Cache-control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');

	if(req.session.autorizado){
		res.render('jogo');
	} else {
		res.send('Usuário precisa fazer login');
	}
}

module.exports.sair = function(application, req, res){

	req.session.destroy( function(err){
		res.redirect('/');
	});
}