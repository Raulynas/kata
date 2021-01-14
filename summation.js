"use strict";

var summation = function (num) {
let sum = 0;
for ( let i = 0; i < num + 1; ++i) {
    sum += i;
    }
    return sum;
}


console.log(summation(8));



//   describe('summation', function () {
//     it('should return the correct total', function () {
//       Test.assertEquals(summation(1), 1)
//       Test.assertEquals(summation(8), 36)
//     })
//   })