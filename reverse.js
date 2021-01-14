function solution(str){
    let reverseText = "";
    for ( i = str.length - 1; i >= 0; i--) {
        console.log(str[i]);
        reverseText += str[i];
    }
  return reverseText;
}


console.log(solution('world'));









// Test.assertEquals(solution('world'), 'dlrow')
// Test.assertEquals(solution('hello'), 'olleh')
// Test.assertEquals(solution(''), '')
// Test.assertEquals(solution('h'), 'h')