"use strict";

function past(h, m, s){

    let total = (h * 3600 + m * 60 + s) * 1000;
    return total;

  }
  console.log(past(1, 0, 0));












//   Test.describe("Fixed Tests", _ => {
//     Test.it("Tests", __ => {
//       Test.assertEquals(past(0,1,1),61000)
//       Test.assertEquals(past(1,1,1),3661000)
//       Test.assertEquals(past(0,0,0),0)
//       Test.assertEquals(past(1,0,1),3601000)
//       Test.assertEquals(past(1,0,0),3600000)
//     });
//   });