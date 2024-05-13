let age: number = 18
console.log(age);

type Hello = {
    greet: string,
    name?: string
}

interface anotherHello {
    greet: string,
    name?: string | undefined
}

const greetMe: Hello = {
    greet: "Hello",
    name: "Harshit"
}

const greetFunc = (greetMe: Hello): string => {
    if (greetMe.name != undefined) {
        return `${greetMe.greet} ${greetMe.name}!`;
    }
    return (`${greetMe.greet} Riya!`);
}

console.log(greetFunc(greetMe));

let a: number = 1;
let b: number = 2;
let c: number = 3;
let d: number = 4;

let sum = (a: number, b: number, c: number, d: number = 5): number => {
    return a + b + c + d;
}

console.log(sum(a, b, c, d));

const arr: number[] = [1, 2, 3, 4, 5];

const total = (...nums: number[]): number => {
    return nums.reduce((prev, curr) => {
        console.log("prev:", prev, "curr:", curr);
        return prev + curr; 
    }, 0);
};

console.log(total(...arr));