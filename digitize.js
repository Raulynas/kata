//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.


function digitize(n) {
    let string = n.toString();
    let array = [];
    for ( let i = string.length - 1; i > -1; i--) {
        array.push(Number(string[i]));
    }
    return array;
  }
console.log(digitize(35231));
