/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

/**
 * 
 * @param {array} array 
 * @param {string} letter 
 * @returns {array}
 * 
 * Per ogni elemento dell'array, se inizia con la lettera scelta allora viene aggiunto a un nuovo array
 */

function filterByInitial(array, letter) {
    const validWords = [];
    for (i = 0; i < array.length; i++) {
        curWord = array[i];
        if (curWord[0] === letter) {
            validWords.push(curWord);
        }
    }
    return validWords
}


// Invoca la funzione qui e stampa il risultato in console

const result = console.log(filterByInitial(names, "A"));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]