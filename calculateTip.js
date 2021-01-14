// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.
// You need to consider the following ratings:
// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%
// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return
// "Rating not recognised"

function calculateTip(amount, rating) {
    let rate = rating.toUpperCase();
    let tip = 0;
    switch (rate) {
        case 'EXCELLENT' :
            tip = Math.ceil(amount * 0.2);
            break;
        case 'GREAT' :
            tip = Math.ceil(amount * 0.15);
            break;
        case 'GOOD' :
            tip = Math.ceil(amount * 0.1);
            break;
        case 'POOR' :
            tip = Math.ceil(amount * 0.05);
            break;
        case 'TERRIBLE' :
            tip = 0;
            break;
            default:
                tip = "Rating not recognised";
    }
    return tip;
}

console.log(calculateTip(26.95, "good"));

// Test.assertEquals(calculateTip(20, "Excellent"), 4);
// Test.assertEquals(calculateTip(26.95, "good"), 3);
