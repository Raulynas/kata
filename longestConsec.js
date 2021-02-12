function longestConsec(strarr, k) {
    if (k <= 0 || k > strarr.length || strarr.length === 0) {
        return '';
    }
    let maxLength = 0;
    let newArray = [];
    for (let i = 0; i < strarr.length; i++) {
        newArray.push(strarr.slice(i, i + k).join(''));
    }
    newArray.map((a) => (maxLength = Math.max(a.length, maxLength)));
    let longestString = newArray.filter((string) => string.length === maxLength);
    return longestString[0].toString();
}

console.log(longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas', 'dfds'], 7));
console.log(longestConsec(['ejjjjmmtthh', 'zxxuueeg', 'aanlljrrrxx', 'dqqqaaabbb', 'oocccffuucccjjjkkkjyyyeehh'], 1));
console.log(longestConsec([], 3));
console.log(longestConsec(['wkppqsztdkmvcuwvereiupccauycnjutlv', 'wkppqsztdkmvcuwvereiupccauycnjutlv', 'vweqilsfytihvrzlaodfixoyxvyuyvgpck'], 2));
console.log(longestConsec(['wlwsasphmxx', 'owiaxujylentrklctozmymu', 'wpgozvxxiu'], 2));
console.log(longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], -2));
console.log(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 3));
console.log(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 15));
console.log(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 0));

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
