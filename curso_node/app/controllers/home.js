module.exports.index = function(application, req, res){

	var connection = application.config.dbConnection();
	var noticiasModel = new application.app.models.NoticiasDAO(connection);

	//função query recebe um callback com pelo menos 2 parametros, erro e resultado
	noticiasModel.get5UltimasNoticias(function(error, result){
		res.render("home/index", {noticias : result});
	});
}