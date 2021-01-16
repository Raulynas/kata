// Your task is to convert strings to how they would be written by Jaden Smith.
// The strings are actual quotes from Jaden Smith, but they are not capitalized
// in the same way he originally typed them.


String.prototype.toJadenCase = function () {
    let str = this;
    let capText = "";
    capText += str[0].toUpperCase();
    for ( let i = 1; i < str.length; i++) {
        capText += str[i];
        if ( str[i] === " ") {
            capText += str[i+1].toUpperCase();
            i = i + 1;
        }
    }
    return capText;
  }

var str = "How can mirrors be real if our eyes aren't real and bla bbla ba";


console.log("How can mirrors be real if our eyes aren't real and bla bbla ba".toJadenCase());






