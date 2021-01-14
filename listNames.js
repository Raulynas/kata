
// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas
// except for the last two names, which should be separated by an ampersand.


function list(names){
    console.log();
    let name = ""
    if (names.length === 0) {
        return "";
    };
    if (names.length === 1) {
        return names[0].name;
    };
    for ( let i = 0; i < names.length - 2; i++) {
        name += (names[i].name) + ", ";
    }
    name += names[names.length - 2].name + " & "+ names[names.length - 1].name;
    return name;
  }

  console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]));
  console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]));
  console.log(list([{name: 'Bart'},{name: 'Lisa'}]));
  console.log(list([{name: 'Bart'}]));
  console.log(list([]));







// Test.assertEquals(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]), 'Bart, Lisa, Maggie, Homer & Marge',
// "Must work with many names")
// Test.assertEquals(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]), 'Bart, Lisa & Maggie',
// "Must work with many names")
// Test.assertEquals(list([{name: 'Bart'},{name: 'Lisa'}]), 'Bart & Lisa', 
// "Must work with two names")
// Test.assertEquals(list([{name: 'Bart'}]), 'Bart', "Wrong output for a single name")
// Test.assertEquals(list([]), '', "Must work with no names")