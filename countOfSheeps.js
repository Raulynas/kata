function countSheeps(arrayOfSheep) {
    let sum = 0;
    let sheeps = arrayOfSheep;
    for ( let i = 0; i < sheeps.length; i++) {
      if (sheeps[0 + i] === true) {
        sum += 1; 
      }
    }
      return sum;

}

console.log(countSheeps([true,  true,  false,  false, true,  true,  true,  true , true,  false, true, false, true, false, false, true, true,  true,  true,  true, false, false, true,  true ]))
