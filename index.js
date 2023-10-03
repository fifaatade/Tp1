var {table,translate} =require ('./tab');

var server = require ('./server')

server.listen(8002, function() {
    console.log('Le serveur fonctionne sur le port 8002');
});

