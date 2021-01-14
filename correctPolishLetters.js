//There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

//Your task is to change the letters with diacritics:


function correctPolishLetters (string) {
    let newString = "";
    for ( let i = 0; i < string.length; i++ ) {
        switch (string[i]) {
            case "ą":
                newString +="a"; break;
            case "ć":
                newString +="c"; break;
            case "ę":
                newString +="e"; break;
            case "ł":
                newString +="l"; break;
            case "ń":
                newString +="n"; break;
            case "ó":
                newString +="o"; break;
            case "ś":
                newString +="s"; break;
            case "ź":
                newString +="z"; break;
            case "ż":
                newString +="z"; break;
                
            default: newString += string[i];
        }
    }
    return newString;

}

  console.log(correctPolishLetters("Maria Skłodowska-Curie"));




//   Test.assertEquals(correctPolishLetters("Jędrzej Błądziński"),"Jedrzej Bladzinski");
// Test.assertEquals(correctPolishLetters("Lech Wałęsa"),"Lech Walesa");
// Test.assertEquals(correctPolishLetters("Maria Skłodowska-Curie"),"Maria Sklodowska-Curie");