String.prototype.toAlternatingCase = function () {
    let string = '';
    for (let i = 0; i < this.length; i++) {
        if (this.charAt(i) !== this.charAt(i).toUpperCase()) {
            string += this.charAt(i).toUpperCase();
        } else {
            string += this.charAt(i).toLowerCase();
        }
    }
    return string;
};

console.log('hello WORLD'.toAlternatingCase());

// function toAlternatingCase(string) {
//     let newString = '';
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === string[i].toUpperCase()) {
//             newString += string[i].toLowerCase();
//         } else {
//             newString += string[i].toUpperCase();
//         }
//     }
//     return newString;
// }

// console.log(toAlternatingCase('Hello world'));

// describe('String.prototype.toAlternatingCase', (_) => {
//     it('should work for fixed tests (provided in the description)', (_) => {
//         Test.assertEquals('hello world'.toAlternatingCase(), 'HELLO WORLD');
//         Test.assertEquals('HELLO WORLD'.toAlternatingCase(), 'hello world');
//         Test.assertEquals('hello WORLD'.toAlternatingCase(), 'HELLO world');
//         Test.assertEquals('HeLLo WoRLD'.toAlternatingCase(), 'hEllO wOrld');
//         Test.assertEquals('12345'.toAlternatingCase(), '12345');
//         Test.assertEquals('1a2b3c4d5e'.toAlternatingCase(), '1A2B3C4D5E');
//         Test.assertEquals(
//             'String.prototype.toAlternatingCase'.toAlternatingCase(),
//             'sTRING.PROTOTYPE.TOaLTERNATINGcASE'
//         );
//         Test.assertEquals(
//             'Hello World'.toAlternatingCase().toAlternatingCase(),
//             'Hello World'
//         );
//     });
// });
// return this.charAt(0).toUpperCase() + this.slice(1);
