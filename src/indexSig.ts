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
  
  console.log(margherita2["RRJ"]); // returns undefined
  // Margherita2 is a type of NewObj
  // Hence, Index Signature
  
  // -------------------
  
  interface Student {
    // Index Signature
    [key: string]: number | string | boolean | string[];
    Name: string;
    RollNo: number;
    Class: string[];
  }
  
  const HRJ: Student = {
    Name: "Harshit Ranjan Jha",
    RollNo: 2073,
    Class: ["2C", "A3"],
  };
  
  console.log(HRJ.Class);
  
  // Using keyof & typeof
  
  interface newObjII {
    //   [index: string]: number;
  }
  
  const newOb: newObjII = {
    name: 32,
    class: 42,
  };
  
  

  for (const key in newOb) {
    // console.log(`${key} + ${newOb[key]}`); // String being used for type
    console.log(`${key} + ${newOb[key as keyof newObjII]}`);
    console.log(`${key} + ${newOb[key as keyof typeof newOb]}`);
  }
  
  // Different types
  
  type Stream = "Name" | "Class" | "Age";
  type girl = Record<Stream, number[]>; // Record - utility type (accepts key, value)
  
  const anotherObj: girl = {
    Name: [3, 2],
    Class: [13, 13],
    Age: [23, 3],
  };
  
  console.log(anotherObj);
  
  for (const key in anotherObj) {
      console.log(`${anotherObj[key as keyof girl]}`);
  }