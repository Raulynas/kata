"use strict";

function getDrinkByProfession(param){
    let output = '';
    let input = param.toLowerCase();
    switch (input) {
        case 'jabroni':
            output = 'Patron Tequila';
            break;
        case 'school counselor':
            output = 'Anything with Alcohol';
            break;
        case 'programmer':
            output = 'Hipster Craft Beer';
            break;
        case 'bike gang member':
            output = 'Moonshine';
            break;
        case 'politician':
            output = 'Your tax dollars';
            break;
        case 'rapper':
            output = 'Cristal';
            break;
        default:
            output = 'Beer'
    }
    return output;

}

console.log(getDrinkByProfession('bike gang membeR'));




// Test.assertEquals(getDrinkByProfession("jabrOni"), "Patron Tequila", "'Jabroni' should map to 'Patron Tequila'");
// Test.assertEquals(getDrinkByProfession("scHOOl counselor"), "Anything with Alcohol", "'School Counselor' should map to 'Anything with alcohol'");
// Test.assertEquals(getDrinkByProfession("prOgramMer"), "Hipster Craft Beer", "'Programmer' should map to 'Hipster Craft Beer'");
// Test.assertEquals(getDrinkByProfession("bike ganG member"), "Moonshine", "'Bike Gang Member' should map to 'Moonshine'");
// Test.assertEquals(getDrinkByProfession("poLiTiCian"), "Your tax dollars", "'Politician' should map to 'Your tax dollars'");
// Test.assertEquals(getDrinkByProfession("rapper"), "Cristal", "'Rapper' should map to 'Cristal'");
// Test.assertEquals(getDrinkByProfession("pundit"), "Beer", "'Pundit' should map to 'Beer'");
// Test.assertEquals(getDrinkByProfession("Pug"), "Beer", "'Pug' should map to 'Beer'");