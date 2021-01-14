// You get an array of numbers, return the sum of all of the positives ones.


function positiveSum(arr) {

    let sum = 0;
    for ( i = 0; i < arr.length; i++) {
        if ( arr[i] > 0 ) {
            sum += arr[i];
        }
    }
    return sum;
}

console.log(positiveSum([-1,2,3,4,-5]));



// Test.assertEquals(positiveSum([1,2,3,4,5]),15);
// Test.assertEquals(positiveSum([1,-2,3,4,5]),13);
// Test.assertEquals(positiveSum([]),0);
// Test.assertEquals(positiveSum([-1,-2,-3,-4,-5]),0);
// Test.assertEquals(positiveSum([-1,2,3,4,-5]),9);