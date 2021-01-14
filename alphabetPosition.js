"use strict";

function positionLetter(letter) {
    let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let position = letters.indexOf(letter) + 1;

    return "Position of alphabet: "+ position; 
} 

console.log(positionLetter("z"));
