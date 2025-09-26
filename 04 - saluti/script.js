/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';

// Dichiara la funzione qui.

/**
 * 
 * @param {string} name 
 * @returns {string}
 */

const sayCiao = (name) => `Ciao ${name}`;

// Invoca la funzione qui e stampa il risultato in console

console.log(sayCiao(prompt("Scrivi qui il tuo nome")));

//Risultato atteso se si passa 'Mario': // ciao Mario