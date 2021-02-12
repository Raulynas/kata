// Move the first letter of each word to the end of it, then add "ay"
// to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// Test.assertEquals(pigIt('Pig latin is cool'),'igPay atinlay siay oolcay')
// Test.assertEquals(pigIt('This is my string'),'hisTay siay ymay tringsay')

function pigIt(str) {
    let array = str.split(' ');
    let newString = array.map(convert);

    function convert(word) {
        if (word !== '!' && word !== '?' && word !== '.' && word !== ',') {
            let newWord = word.substring(1) + word.charAt(0) + 'ay';
            return newWord;
        }
        return word;
    }
    return newString.join(' ');
}

console.log(pigIt('o Hello world !'));
