'use strict';

function NOD (x, y) {
	if (y > x) {
        return NOD(y, x);
    }
        if (!y) {
        return x;
    }
	return NOD(y, x % y);
}
console.log(NOD(69, 24));