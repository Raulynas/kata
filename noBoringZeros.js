// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.


function noBoringZeros(n) {
    if ( n === 0) {
        return 0;
    }
    let newNumber = n;
    while (newNumber %10 === 0) {
        newNumber = newNumber / 10;
    }
    return newNumber
}

console.log(noBoringZeros(10));





//   function testing(actual, expected) {
//     Test.assertSimilar(actual, expected);
// }

// Test.describe("Basic tests",function() {
// Test.it("noBoringZeros",function() {
//     testing(noBoringZeros(1450), 145)
//     testing(noBoringZeros(960000), 96)
//     testing(noBoringZeros(1050), 105)
//     testing(noBoringZeros(-1050), -105)
//     testing(noBoringZeros(-105), -105)
//     testing(noBoringZeros(0), 0)
// })})