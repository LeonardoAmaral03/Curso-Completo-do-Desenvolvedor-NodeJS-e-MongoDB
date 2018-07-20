var express = require('express');
var consign = require('consign');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');
//app.set('views', '<novo_local>'); Por padrão o ejs procura as views na pasta views
								  //Para mudar o local de busca das views usar o código acima

consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.then('app/models')
	.into(app);

module.exports = app;