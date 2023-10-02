/* var http=require('http')
var server=http.createServer(function(req, res){
    res.writeHead(201,{"Content-Type":"application/json","Accept":"application/json"});

    var table =[
        {
            mot:'pomme',
            traduction:'apple',
        },
        {
            mot:'mangue',
            traduction:'mango',
        },
        {
            mot:'courir',
            traduction:'run',
        },
        {
            mot:'lune',
            traduction:'moon',
        },
        {
            mot:'soleil',
            traduction:'sun',
        },
        {
            mot:'sac',
            traduction:'bag',
        },
        {
            mot:'montre',
            traduction:'watch',
        },
        {
            mot:'viens',
            traduction:'come',
        },
        {
            mot:'amour',
            traduction:'love',
        },
    ]
    function translate(nom,nomTrad){
        const number=Math.floor(Math.random()*tab.length);
        return tab[number];
    }
    var dico=translate(nom,nomTrad);
    res.end(JSON.stringify(dico))
})
server.listen(8001,function(){
    console.log('server is running at port 8001')
}); */
var http = require('http');

var server = http.createServer(function(req, res) {
    res.setHeader("Content-Type", "application/json");

    var table = [
        {
            mot: 'pomme',
            traduction: 'apple',
        },
        {
            mot: 'mangue',
            traduction: 'mango',
        },
        {
            mot:'courir',
            traduction:'run',
        },
        {
            mot:'lune',
            traduction:'moon',
        },
        {
            mot:'soleil',
            traduction:'sun',
        },
        {
            mot:'sac',
            traduction:'bag',
        },
        {
            mot:'montre',
            traduction:'watch',
        },
        {
            mot:'viens',
            traduction:'come',
        },
        {
            mot:'amour',
            traduction:'love',
        },
    ];

    function translate(nom) {
        var foundWord = table.find(function(item) {
            return item.mot === nom;
        });

        if (foundWord) {
            return foundWord.traduction;
        } else {
            return "Mot introuvable dans le dictionnaire.";
        }
    }

    if (req.method === 'POST') {
        var body = '';
        req.on('data', function(data) {
            body += data;
        });

        req.on('end', function() {
            var requestData = JSON.parse(body);
            var nom = requestData.mot;
            var traduction = translate(nom);
            var response = { mot: nom, traduction: traduction };
            res.end(JSON.stringify(response));
        });
    } else {
        res.end(JSON.stringify({ message: "Requête non supportée. Utilisez POST pour traduire un mot." }));
    }
});

server.listen(8002, function() {
    console.log('Le serveur fonctionne sur le port 8002');
});

