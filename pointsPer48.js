"use strict";

function pointsPer48(ppg, mpg) {

    if (ppg === 0 || mpg === 0) {
        return 0;
    }

    return 1 * (48 / mpg * ppg).toFixed(1);
}
console.log( pointsPer48(12, 20) );