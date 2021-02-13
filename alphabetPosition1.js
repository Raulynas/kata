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
