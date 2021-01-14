/* Create a function that will return a string that combines all of the
letters of the three inputed strings in groups. Taking the first letter
of all of the inputs and grouping them next to each other. Do this for every letter*/



function tripleTrouble(one, two, three){
    let output = "";
    for ( let i = 0; i < one.length; i++) {
        output += one[i] + two[i] + three[i];
    }
    return output;
   }

console.log(tripleTrouble("LLh","euo","xtr"));




// Test.assertEquals(tripleTrouble("this","test","lock"), "ttlheoiscstk");
// Test.assertEquals(tripleTrouble("aa","bb","cc"), "abcabc");
// Test.assertEquals(tripleTrouble("Bm", "aa", "tn"), "Batman");
// Test.assertEquals(tripleTrouble("LLh","euo","xtr"), "LexLuthor");