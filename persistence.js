function persistence(num) {
    if (num < 10) {
        return 0;
    }
    let count = 1;

    function result(text) {
        let sum = 1;
        let string = text.toString();
        for (let i = 0; i < string.length; i++) {
            sum *= string[i];
        }
        return sum;
    }

    let total = num;

    while (result(total) > 9) {
        total = result(total);
        count++;
    }
    return count;
}

console.log(persistence());

//  describe('Initial Tests', function () {
//     Test.assertEquals(persistence(39),3);
//     Test.assertEquals(persistence(4),0);
//     Test.assertEquals(persistence(25),2);
//     Test.assertEquals(persistence(999),4);
//   });
