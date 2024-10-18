'use strict';

const total = 31000;
const product = 10;
const promoCode = "METHED";

function calculate(total, product, promoCode) {
    if (product > 10) {
        console.log(total = total - (total * 0.03));
    }
    if (total > 30000) {
        console.log(total = total - ((total - 30000) * 0.15));
    }
    if (promoCode === "METHED") {
        console.log(total = total - (total * 0.1));
    }
    if (promoCode === "G3H2Z1" && total > 2000) {
        console.log(total = total - 500);
    }
}

calculate(31000, 10, "METHED");