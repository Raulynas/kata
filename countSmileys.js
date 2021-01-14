// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.



//return the total number of smiling faces in the array
function countSmileys(arr) {
    let count = 0;
    for ( i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        if ( 
            arr[i] ===';)'|| arr[i] === ';-)' || arr[i] === ';~)' || 
            arr[i] ===':)'|| arr[i] === ':-)' || arr[i] === ':~)' || 
            arr[i] ===';D'|| arr[i] === ';-D' || arr[i] === ';~D' ||
            arr[i] ===':D'|| arr[i] === ':-D' || arr[i] === ':~D')
            {
            count++;
        }
    }
return count;
}

console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));











// Test.describe("Basic testing", function() {
//     it("", _ => {
//       Test.assertEquals(countSmileys([]), 0);
//       Test.assertEquals(countSmileys([':D',':~)',';~D',':)']), 4);
//       Test.assertEquals(countSmileys([':)',':(',':D',':O',':;']), 2);
//       Test.assertEquals(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);
//     });
//   });