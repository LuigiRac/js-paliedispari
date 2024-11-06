"use strict"
console.clear()

/* 
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/


let userNumber = prompt("Inserire un numero da 1 a 5, grazie!")
  console.log ("Il numero inserito è: " + userNumber)

function rollDice() {
    return Math.floor(Math.random() * (5 - 1 + 1) ) + 1;
  }
  
