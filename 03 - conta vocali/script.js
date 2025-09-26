/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

/**
 * 
 * @param {string} word 
 * @returns {num}
 * 
 * Per ogni lettera della parola, verificare se è una vocale e, in tal caso, aggiungere 1 al conteggio
 */

function countVowels(word) {
    let counter = 0;
    for (let i = 0; i < word.length; i++) {
        curLetter = word[i];
        if (curLetter === "a" || curLetter === "e" || curLetter === "i" || curLetter === "o" || curLetter === "u") {
            counter += 1;
        }
    }
    return counter;
}


// Invoca la funzione qui e stampa il risultato in console

console.log(countVowels(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)