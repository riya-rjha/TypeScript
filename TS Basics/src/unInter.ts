function union(weight: number | string) {
    console.log(weight);
}

console.log(1);
console.log('RRJ');

type Guitarist = {
    name: string,
    code: number,
    guitar: boolean
}

let riya: Guitarist = {
    name: "Riya",
    code: 2551,
    guitar: false
}

const harshit: Guitarist = {
    name: "Harshit",
    code: 6652,
    guitar: true
}

console.log(riya);

// riya = harshit
// console.log(riya);

console.log(riya.code);
console.log(typeof riya);

const greetGuitarist = (guitarist: Guitarist) => {
    console.log(`Hello ${guitarist.name}!`);
}

greetGuitarist(riya);