// It's pretty straightforward. Your goal is to create a function that removes
// the first and last characters of a string. You're given one parameter, the original string.
// You don't have to worry with strings with less than two characters.

function removeChar(str){
    let newStr = "";
    for ( let i = 1; i < str.length - 1; i++ ) {
        newStr += str[i];
    }
    return newStr;
   }

console.log(removeChar('place'));


//    Test.describe("Tests", function(){

//     Test.assertEquals(removeChar('eloquent'), 'loquen');
//     Test.assertEquals(removeChar('country'), 'ountr');
//     Test.assertEquals(removeChar('person'), 'erso');
//     Test.assertEquals(removeChar('place'), 'lac');
      
//     });