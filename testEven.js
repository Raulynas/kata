"use strict";

function testEven(n) {
    let test = null;
    n % 2 === 0? test = true : test = false;

    return test;
}

console.log(testEven(-4));

// Test.assertEquals(testEven(0), true, "testEven for 0");
// Test.assertEquals(testEven(0.5), false, "testEven for 0.5");
// Test.assertEquals(testEven(1), false, "testEven for 1");
// Test.assertEquals(testEven(2), true, "testEven for 2");
// Test.assertEquals(testEven(-4), true, "testEven for 2");

// let a = 7;
// let b = 6;
// let c = 0;
// a > b? c = "yes" : c = "no";