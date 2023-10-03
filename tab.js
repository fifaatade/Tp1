
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
    } 
    else {
        return "Mot introuvable dans le dictionnaire.";
    }
}


module.exports = {table,translate};

//export default= {table,translate,traitement};
