"use strict";
let age = 18;
console.log(age);
const greetMe = {
    greet: "Hello",
    name: "Harshit"
};
const greetFunc = (greetMe) => {
    if (greetMe.name != undefined) {
        return `${greetMe.greet} ${greetMe.name}!`;
    }
    return (`${greetMe.greet} Riya!`);
};
console.log(greetFunc(greetMe));
let a = 1;
let b = 2;
let c = 3;
let d = 4;
let sum = (a, b, c, d = 5) => {
    return a + b + c + d;
};
console.log(sum(a, b, c, d));
//# sourceMappingURL=demo.js.map