/* 1.Creare un oggetto che descriva uno studente con le seguenti proprietà: 
nome, cognome ed età.
Stampare a schermo attraverso il for in tutte le proprietà.
2. Creare un array di oggetti di studenti.Ciclare su tutti gli studenti e 
stampare per ognuno nome e cognome.
3.  Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo 
oggetto studente inserendo nell’ordine: nome, cognome e età. */

var studente = {
    'nome': 'Mario',
    'cognome': 'Rossi',
    'eta': '40'
}

for(var k in studente){
    console.log(k + ': ' + studente[k]);
}
