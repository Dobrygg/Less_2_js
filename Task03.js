'use strict';

function calculate(total, product, promoCode) {
    if (product > 10) {
        total = total - (total * 0.03);
    }
    if (total > 30000) {
        total = total  - ((total - 30000) * 0.15);
    }
    if (promoCode === "METHED") {
        total = total - (total * 0.1);
    }
    if (promoCode === "G3H2Z1" && total > 2000) {
        total = total - 500;
    }
    return total;
}

console.log(`Сумма покупри с учетом всех скидок равна ${calculate(32000, 11, "METHED")} рублей`); 