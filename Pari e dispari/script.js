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

const evenOdd = [
    "pari",
    "dispari",
    "even",
    "odd"
  ]

let evenOddUser = prompt("Insdicare se pari o dispari, grazie!")
  console.log ("Utente ha scelto: " + evenOddUser + "!")

  if (evenOdd.includes(evenOddUser)){
    console.log("Valore corretto!");
 } else {
    console.log ( "Valore non corretto!");
 }
 while (!evenOdd.includes(evenOddUser)) {
    console.log("Valore non corretto!");
    evenOddUser = prompt("Indicare se 'pari' o 'dispari', grazie!");
}


let userNumber = parseInt(prompt("Inserire un numero da 1 a 5, grazie!"))
  console.log ("Il numero inserito dall'utente è: " + userNumber)

function rollDice() {
    return Math.floor(Math.random() * (5 - 1 + 1) ) + 1;
  }
  const randomNumerPc = rollDice();
  console.log("Il numero inserito dal PC è: " + randomNumerPc);


  function sumAll(userNumber, randomNumerPc) {
    let sum = userNumber + randomNumerPc;
    return sum;
  }

  let result = sumAll(userNumber,randomNumerPc);
  console.log("Il risultato finale è: " + result);
  

  if (result % 2 === 0) {
    console.log("Il numero è pari!");
    
  }
 else {
    console.log("Il numero è dispari");
 }