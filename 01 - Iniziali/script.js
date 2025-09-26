/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

/**
 * 
 * @param {array} array 
 * @returns {array}
 * 
 * Per ogni elemento dell'array, estrarre l'iniziale e porla come elemento di un nuovo array
 */

function returnInitials(array) {
    const firstLetters = []
    for (let i = 0; i < array.length; i++) {
        curName = array[i];
        let firstLetter = curName[0];
        firstLetters[i] = firstLetter;
    }

    return firstLetters;
}

// Invoca la funzione qui e stampa il risultato in console

const result = console.log(returnInitials(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]