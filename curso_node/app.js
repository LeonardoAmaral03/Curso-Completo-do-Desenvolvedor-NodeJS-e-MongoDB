var express = require('express');
var app = express();

app.set('view engine', 'ejs');
//app.set('views', '<novo_local>'); Por padrão o ejs procura as views na pasta views
								  //Para mudar o local de busca das views usar o código acima

app.get('/', function(req, res){
	res.render("home/index");
});

app.get('/formulario_inclusao_noticia', function(req, res){
	res.render("admin/form_add_noticia");
});

app.get('/noticias', function(req, res){
	res.render("noticias/noticias");
});

app.listen(3000, function(){
	console.log("Servidor rodando com Express");
});