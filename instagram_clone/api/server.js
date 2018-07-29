var express = require('express'),
	bodyParser = require('body-parser'),
	mongodb = require('mongodb');

var app = express();

//body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = 8080;

app.listen(port);

var db = new mongodb.Db(
	'instagram',
	new mongodb.Server('localhost', 27017, {}),
	{}
);

console.log('servidor HTTP esta escutando na porta ' + port);

app.get('/', function(req, res) {

	res.send({msg: 'Olá'});
});

//POST (create)
app.post('/api', function(req, res) {

	var dados = req.body;

	db.open( function(err, mongoclient){
		mongoclient.collection('postagens', function(err, collection){
			collection.insert(dados, function(err, records){
				if(err){
					//res.json(err);
					res.json({'status': 'error'});
				} else {
					//res.json(records);
					res.json({'status': 'Inclusão realizada com sucesso!'});
				}
				mongoclient.close();
			});
		});
	});
});

//GET (read)
app.get('/api', function(req, res) {
	db.open( function(err, mongoclient){
		mongoclient.collection('postagens', function(err, collection){
			collection.find().toArray( function(err, results){
				if(err) {
					res.json(err);
				} else {
					res.json(results);
				}
				mongoclient.close();
			});
		});
	});
});