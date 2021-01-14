// Task Overview:
// You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

function enough(cap, on, wait) {
    if ( cap - on >= wait ) {
        enoughtSpace = 0; 
    } else {
        enoughtSpace = wait - cap + on
    }
    return enoughtSpace;
  }


console.log(enough(100, 60, 50));

// alternative

// function enough(cap, on, wait) {
//     return Math.max(wait + on - cap, 0);
//   }
  
//   console.log(enough(100, 60, 50));










//   describe('Example Tests', function(){
//     Test.assertEquals(enough(10, 5, 5), 0);
//     Test.assertEquals(enough(100, 60, 50), 10);
//     Test.assertEquals(enough(20, 5, 5), 0);
//   });