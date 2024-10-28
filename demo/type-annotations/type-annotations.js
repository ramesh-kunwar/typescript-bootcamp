"use strict";
const myName = "Ramesh Kunwar";
const amount = 2 + 2;
const hello = `hello ${myName} `;
const powerLevel = 9000n + 1n;
const yes = true;
function sum(lhs, rhs) {
    const total = lhs + rhs;
    return total;
}
const one = sum(1, 1);
const two = sum(2, "two");
console.log(one);
console.log(two);
