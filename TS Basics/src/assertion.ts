type One = number;
type Two = number | string;
type Three = 'Hello';

let aNum: One = 1;
let bNum: Two = "RRJ";
let cNum = aNum as Two;

let dNum = <Three>'World';
let eNum = <string | number> 'Tumko paaya hai to jaise khoya hu';

let addOrConcat = (a: number, b: number, c: 'add' | 'concat'): string | number => {
    if(c === 'add'){
        return a + b;
    }
    return 'Concatenation: ' + a + b;
};

console.log(addOrConcat(2, 5, 'add'));

let myAns: string = addOrConcat(2, 5, 'add') as string;
console.log(myAns);