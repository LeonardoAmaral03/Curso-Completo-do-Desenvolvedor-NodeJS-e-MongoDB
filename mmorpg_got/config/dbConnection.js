/* importar o mongodb */
var mongo = require('mongodb');

var connMongoDB = function(){
	console.log('Entrou na função de conexão');
	var db = new mongo.Db( // cria instancia da classe de conexao
		'got', // string do nome do bd
		new mongo.Server( // objeto de conexao com servidor
			'localhost', // string contendo o endereço do servidor
			27017, // porta de conexão
			{} // objeto com opções de configuração do servidor
		),
		{} // objeto de configuração do objeto db
	);

	return db;
};

module.exports = function(){
	return connMongoDB;
}