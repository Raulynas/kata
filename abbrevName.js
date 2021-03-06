
//Function return name into initials.

function abbrevName(name){
    let init = name[0].toUpperCase() + "."
    for ( let i = 0; i < name.length; i++) {
      if ( name[i] === " ") {
        init += name[i + 1].toUpperCase();
      }
    }
    return init;
}



console.log(abbrevName("sam harris"));
console.log(abbrevName("P Favuzzi"));


// Test.assertEquals(abbrevName("Sam Harris"), "S.H");
// Test.assertEquals(abbrevName("Patrick Feenan"), "P.F");
// Test.assertEquals(abbrevName("Evan Cole"), "E.C");
// Test.assertEquals(abbrevName("P Favuzzi"), "P.F");
// Test.assertEquals(abbrevName("David Mendieta"), "D.M");