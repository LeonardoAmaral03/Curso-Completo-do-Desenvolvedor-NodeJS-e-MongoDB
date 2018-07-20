var mysql = require('mysql'); // usa o modulo mysql no node_modules, baixado pelo npm

var connMySQL = function(){
	console.log('Conexao com bd foi estabelecida');

	//Parametros de conexão são passados por uma estrutura json ( chave : 'valor' )
	return mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : '1234',
		database : 'portal_noticias'
	});
}

module.exports = function(){
	console.log('O autoload carregou o módulo de conexão com bd');
	return connMySQL;
};