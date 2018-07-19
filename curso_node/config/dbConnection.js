var mysql = require('mysql'); // usa o modulo mysql no node_modules, baixado pelo npm

module.exports = function(){

	//Parametros de conexão são passados por uma estrutura json ( chave : 'valor' )
	return mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : '1234',
		database : 'portal_noticias'
	});
};