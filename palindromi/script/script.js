"use strict"
console.clear()

/* 
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma 
*/

const userWord = prompt("Inserire una parola, grazie!")
  console.log ("La parola inserita è: " + userWord + "!")

  

  let reversedText = ""; 

  for (let i = userWord.length -1; i >= 0; i--){
    reversedText = reversedText + userWord[i];
     console.log(reversedText);
  }