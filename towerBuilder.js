// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).


function towerBuilder(nFloors) {
    let tower = [];
    let space = " ";
    let star = "*";

    for ( let i = 0; i < nFloors; ++i ) {
        tower.push( space.repeat(nFloors - i - 1) + star.repeat(i * 2 + 1) + space.repeat(nFloors - i - 1));

    }
    return tower;
  }

console.log(towerBuilder(4));








// Test.assertDeepEquals(towerBuilder(1), ["*"]);
// Test.assertDeepEquals(towerBuilder(2), [" * ","***"]);
// Test.assertDeepEquals(towerBuilder(3), ["  *  "," *** ","*****"]);



// ---*---
// --***--
// -*****-
// *******