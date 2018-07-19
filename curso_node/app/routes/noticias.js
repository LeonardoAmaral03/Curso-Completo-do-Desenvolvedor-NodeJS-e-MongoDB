var dbConnection = require('../../config/dbConnection'); //Aqui esta pegando a função de conexao

module.exports = function(app){

	var connection = dbConnection(); //Aqui está executando a função de conexao

	app.get('/noticias', function(req, res){

		connection.query('select * from noticias', function(error, result){
			//console.log(result);
			//console.log(error);
			res.render("noticias/noticias", {noticias : result});
		});
	});
};