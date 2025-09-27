/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';
const date = new Date();
let hour = date.getHours();

// Dichiara la funzione qui.

/**
 * 
 * @param {string} name 
 * @returns {string}
 * 
 * Se l'ora è minore o uguale a 13, allora dici Buongiorno; se altrimenti l'ora è compresa tra 14 e 17, allora dici Buon pomeriggio; altrimenti dici Buonasera
 */

function sayCiao(name) {
    let message = "";
    if (hour <= 13) {
        message = "Buongiorno ";
    } else if (hour > 13 && hour <= 17) {
        message = "Buon pomeriggio ";
    } else {
        message = "Buonasera ";
    }

    message = message + name
    return message
}

// Invoca la funzione qui e stampa il risultato in console

console.log(sayCiao(name));


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.