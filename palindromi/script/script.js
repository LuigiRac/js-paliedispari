"use strict"
console.clear()

/* 
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma 
*/

const userWord = prompt("Inserire una parola, grazie!")
console.log("La parola inserita è: " + userWord + "!")


const reversedText = turnWord(userWord);

if (userWord.toLowerCase() === reversedText.toLowerCase()) {
  console.log("La parola è palindroma");
}
else {
  console.log("La parola NON è palindroma")
}
console.log(reversedText);


function turnWord(word) {
  let reversedWord = "";

  for (let i = word.length - 1; i >= 0; i--) {
    reversedWord = reversedWord + userWord[i];
  }

  return reversedWord;
}

