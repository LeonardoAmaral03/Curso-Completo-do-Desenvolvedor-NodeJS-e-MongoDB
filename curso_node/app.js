var app = require('./config/server');

//Os require de rotas agora são feitos com o consign no server.js
//var rotaNoticias = require('./app/routes/noticias')(app);	//Desta forma retorna a execução da função
//var rotaHome = require('./app/routes/home')(app);
//var rotaFormInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia')(app);

app.listen(3000, function(){
	console.log('Servidor ON');
});