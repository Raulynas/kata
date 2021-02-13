function alphabetPosition(text) {
    let conText = text.toLowerCase().replace(/[^\w\s]/g, '');
    let list = '.abcdefghijklmnopqrstuvwxyz';
    let newText = '';
    for (let i = 0; i < text.length; i++) {
        if (list.search(conText[i]) > 0) {
            newText += list.search(conText[i]) + ' ';
        }
    }
    return newText.trim();
}
console.log(alphabetPosition('sdaf*!_#^'));

// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)
// Should return "21 9 6 20 22 15 20 6 21 20 6 21 20 2 21 21 24 6 13 23 6 16 4 13 16 4 12" (as a string)
