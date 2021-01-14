
function check(a, x) {
    let count = 0;
    for ( let i = 0; i < a.length; i++) {
        if ( a[i] === x ) {
            count++;
        }
    }
    return count > 0
  }

  console.log(check(['what', 'a', 'great', 'kata'], 'kat'));

// BETTER OPTION:

//   const check = (a,x) => a.includes(x);



//   Test.describe("Basic tests",_=>{
//     Test.assertEquals(check([66, 101], 66), true);
//     Test.assertEquals(check([80, 117, 115, 104, 45, 85, 112, 115], 45), true);
//     Test.assertEquals(check(['t', 'e', 's', 't'], 'e'), true);
//     Test.assertEquals(check(['what', 'a', 'great', 'kata'], 'kat'), false);
//     })