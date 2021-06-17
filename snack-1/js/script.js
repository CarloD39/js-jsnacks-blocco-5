// Creare un oggetto palla che abbia le seguenti proprietà.
// Nome = palla
Peso = 10

var palla = {
    nome : 'palla',
    peso : 1
}


// Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.
palla.peso = parseInt(prompt('cambia il peso'));

console.log(palla);

//Inserire  l’oggetto palla in una array
var giochi = [];

giochi.push(palla);


// Permettere all’utente di inserire un nuovo oggetto all’interno dell’array giochi
var newGame = prompt('inserisci nuovo gioco-oggetto');



giochi.push({
    newGame
})

console.log(giochi);


