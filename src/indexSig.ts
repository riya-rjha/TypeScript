// Index Signatures

interface PizzaObject {
  Pizza: String;
  Size: number;
  Likes: Number;
}

const margherita: PizzaObject = {
  // If properties are set to readonly, then you cannot change the properties
  Pizza: "Margherita",
  Size: 14,
  Likes: 3081,
};

// Accessing values through indices
console.log(margherita.Likes);
console.log(margherita["Size"]);

// Using Index Signatures

const prop: String = "Size";
// Error:

// console.log(margherita[prop]); // Type string cannot be used as an index type

interface NewObj {
  [index: string]: number;
}

const accessProps = (margherita: NewObj): number => {
  let total = 0;
  for (const key in margherita) {
    total += margherita[key];
  }
  return total;
};

const margherita2: NewObj = {
  Pizza: 1987,
  Size: 14,
  Likes: 3081,
};

console.log(accessProps(margherita2));

// Drawback of Index Signatures
// It creates properties which may not be listed in the interface as a key
// Eg

console.log(margherita2['RRJ']); // returns undefined
// Margherita2 is a type of NewObj 
// Hence, Index Signature



// -------------------

interface Student {
    // Index Signature
    [key: string]: number | string | boolean | string[] ,
    Name: string, 
    RollNo: number,
    Class: string[]
};

const HRJ: Student = {
    Name: "Riya Ranjan Jha",
    RollNo: 2073,
    Class: ["2C", "A3"]
};

console.log(HRJ.Class); 
