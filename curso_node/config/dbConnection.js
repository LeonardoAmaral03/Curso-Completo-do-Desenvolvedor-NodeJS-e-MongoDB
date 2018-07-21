var mysql = require('mysql'); // usa o modulo mysql no node_modules, baixado pelo npm

var connMySQL = function(){

	//Parametros de conexão são passados por uma estrutura json ( chave : 'valor' )
	return mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : '1234',
		database : 'portal_noticias'
	});
}

module.exports = function(){
	return connMySQL;
};