/* 1.Creare un oggetto che descriva uno studente con le seguenti proprietà: 
nome, cognome ed età.
Stampare a schermo attraverso il for in tutte le proprietà.
2. Creare un array di oggetti di studenti.Ciclare su tutti gli studenti e 
stampare per ognuno nome e cognome.
3.  Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo 
oggetto studente inserendo nell’ordine: nome, cognome e età. */


//1. Parte 1
var studente = {
    'nome': 'Mario',
    'cognome': 'Rossi',
    'eta': '40'
};

for(var k in studente){
    $('.info-studente').append(k + ': ' + studente[k]+ ' ')
    /* console.log(k + ': ' + studente[k]); */
}

//2. Parte 2
var studenti = [
    {
        'nome': 'Mario',
        'cognome': 'Rossi',
        'eta': '40'
    },
    {
        'nome': 'Marta',
        'cognome': 'Ivanov',
        'eta': '25'
    },
    {
        'nome': 'Caroline',
        'cognome': 'Bassi',
        'eta': '21'
    }
];

//stampiamo nome cognome
 for (var i = 0; i <studenti.length; i++){
     $('.array-studente').append(studenti[i].nome + '  ' + studenti[i].cognome + ' ');
 /*   console.log(studenti[i].nome + ' ' + studenti[i].cognome ); */
 }

 //3. Parte 3
 var name = prompt('Inserisci il nome ');
 var surname = prompt ('Inserisci il cognome');
 var age = parseInt(prompt("Inserisci l'età ")); 

 var studenteUtente = {
    'nome': name,
    'cognome': surname,
    'eta': age
};

studenti.push(studenteUtente);

    for (var k in studenti[i]) {
        $('.nuovo-studente').append('<li>' + k + ': ' + studenti[i][k] + '</li>');
    }

/* console.log(studenti);  */