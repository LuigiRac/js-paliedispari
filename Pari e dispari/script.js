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

const validNumber = [
  1, 2, 3, 4, 5
];

// pari || dispari
let evenOddUser = prompt("Insdicare se pari o dispari, grazie!")
console.log("Utente ha scelto: " + evenOddUser + "!")

if (evenOdd.includes(evenOddUser)) {
  console.log("Valore corretto!");
} else {
  console.log("Valore non corretto!");
}
while (!evenOdd.includes(evenOddUser)) {
  console.log("Valore non corretto!");
  evenOddUser = prompt("Indicare se 'pari' o 'dispari', grazie!");
}


// 1-5
let userNumber = parseInt(prompt("Inserire un numero da 1 a 5, grazie!"))
console.log("Il numero inserito dall'utente è: " + userNumber)

if (validNumber.includes(userNumber)) {
  console.log("Valore corretto!");
} else {
  console.log("Valore non corretto!");
}

while (!validNumber.includes(userNumber)) {
  console.log("Valore non corretto!");
  userNumber = parseInt(prompt("Inserire un numero da 1 a 5, grazie!"));
}

// console.log(); NON SERVE 


function rollNumber() {
  return Math.floor(Math.random() * (5 - 1 + 1)) + 1;
}
const randomNumerPc = rollNumber();
console.log("Il numero inserito dal PC è: " + randomNumerPc);


function sumAll(userNumber, randomNumerPc) {
  let sum = userNumber + randomNumerPc;
  return sum;
}

let result = sumAll(userNumber, randomNumerPc);
console.log("Il risultato finale è: " + result);


if (result % 2 === 0 && evenOddUser == 'pari') {
  console.log("Utente ha vinto! Computer ha perso!");

} else if (result % 2 != 0 && evenOddUser == 'dispari') {
  console.log("Utente ha vinto! Computer ha perso!");
} else {
  console.log("Utente ha perso! Computer ha vinto!");
}



