// Creare un array con tre numeri, calcolare la media di questi tre numeri.

var numbers = [1, 2, 4];

result = 0;

for(var x = 0; x < numbers.length; x++){
    result += numbers[x];
}

var Finalresult = result / numbers.length;
console.log(Finalresult);

// ----------------
// Costruiamo un array di tre giocatori di basket. Ogni giocatore avrà le seguenti proprietà:
// nome,cognome,anno,punteggio;
// Calcolare il punteggio medio dei tre giocatori.


var team = [

    {
        nome: 'Pippo',
        cognome: 'Hippo',
        anno: 1899,
        punteggio: 30
    },   
    
     {
        nome: 'Luca',
        cognome: 'MU',
        anno: 1999,
        punteggio: 15
    }, 
    
    {
        nome: 'Mimmo',
        cognome: 'Mao',
        anno: 1984,
        punteggio: 5
    } 

]

result2 = 0;

for(var x = 0; x < team.length; x++){

    result2 += team[x].punteggio;
   
}

var  Finalresult2 = result2 / team.length;

console.log(Finalresult2);


