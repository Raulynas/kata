// Given an integral number of watermelons w (1 ≤ w ≤ 100; 1 ≤ w in Haskell),
// check whether Pete and Billy can
// divide the melons so that each of them gets an even amount.


function divide(weight){
    return weight % 2 === 0 && weight > 3;
}

console.log(divide(4))
console.log(divide(2))
console.log(divide(5))
console.log(divide(88))
console.log(divide(100))
console.log(divide(67))
console.log(divide(90))
console.log(divide(10))
console.log(divide(99))
console.log(divide(32))