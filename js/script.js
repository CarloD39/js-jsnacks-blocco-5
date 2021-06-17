// <!-- Creare un array di 3 studenti (3 oggetti in un array, quindi) con queste proprietà:
// nome
// cognome
// age
// descrizione
// Per nome, cognome ed age assegnate direttamente nel codice i valori che volete.
// ATTENZIONE: la descrizione invece sarà l’unico valore vuoto, stringa vuota.

// Successivamente, con dei prompt chiediamo di volta in volta all’utente la descrizione di ciascun studente, salviamola quindi all’interno della sua proprietà.
// Nota bene: questo naturalmente, in un ciclo, per ciascun studente. ;)
// Stampiamo con un console.log il risultato di questo array di studenti aggiornato. -->


var students = [

    {
        names: 'Pino',
        Lastnames: 'Nopi',
        age: 32,
        description:''
    },

    {
        names: 'Patroclo',
        Lastnames: 'Bruno',
        age: 22,
        description:''
    },

    {
        names: 'Ciccio',
        Lastnames: 'Magro',
        age: 50,
        description:''
    }
]


for( var x = 0; x < students.length; x++){

var thisStudent = students[x];
var thisNameSur = thisStudent.names + '  ' + thisStudent.Lastnames;
thisStudent.description = prompt('dammi una descrizione' + thisNameSur);


}

console.log(students);







