const newVal = <T>(args: T): T => args;

console.log(newVal("RRJ"));

const isArray = <A>(arg: A): A => {
  if (Array.isArray(arg) && arg[0] != 0) {
    return arg;
  }
  if (typeof arg === null) {
    console.log("Null value");
    return arg;
  }
  return arg;
};

console.log(isArray([0, 2, 9]));

// Used in utility functions when type of parameter is not fixed

const isObject = <O>(args: O): boolean => {
  if (typeof args === "object" && args !== null && !Array.isArray(args)) {
    return true;
  }
  return false;
};

// Create a function to check for object
const isTrue = <O>(args: O): { args: O; ans: boolean } => {
  if (Array.isArray(args)) {
    console.log(`${args} is an array`);
    // args:args (Shorthand)
    return { args, ans: false };
  }
  if (isObject(args) && !Object.keys(args as keyof O).length) {
    // Given not object since the object's properties keys do not have any length
    console.log(`${args} is an object with no keys`);
    return { args, ans: false };
  }
  if (typeof args === "undefined" || args === null) {
    console.log(`${args} is not an object`);
    return { args, ans: false };
  }
  console.log(`${args} is an object`);
  return { args, ans: !!args }; // Objects truthy in TS
};

console.log(isTrue({}));
console.log(isTrue({ name: "RRJ" }));
console.log(isTrue([{}]));
console.log(isTrue([1, 3, 5]));
console.log(isTrue(null));
console.log(isTrue(true));
console.log(isTrue(undefined));

// Using an interface for generics
interface checkForObj<T> {
  value: T;
  ans: boolean;
}

const checkForObjectType = <T>(args: T): checkForObj<T> => {
  if (Array.isArray(args)) {
    return { value: args, ans: false };
  }

  if (isObject(args) && !Object.keys(args as keyof T).length) {
    return { value: args, ans: false };
  }

  return { value: args, ans: true };
};

console.log(checkForObjectType({}));
console.log(checkForObjectType({ Name: "RRJ" }));
console.log(checkForObjectType([1, 3, 4]));

// Extending properties of interface

interface hasID {
  id: number;
}

const anotherCheck = <T extends hasID>(args: T): number => {
  return args.id;
};

console.log(anotherCheck({ id: 1, name: "RRJ" }));
// console.log(anotherCheck({"name": "RRJ"})); -> Error (Name property alone does not exist in hasID interface)

const userArr = [
  {
    id: 2313,
    name: "Robert",
    address: {
      sector: 5,
      hno: 320,
      lane: "Green Street",
    },
  },
  {
    id: 3987,
    name: "Drowney",
    address: {
      sector: 9,
      hno: 318,
      lane: "Blue Street",
    },
  },
  {
    id: 2863,
    name: "Junior",
    address: {
      sector: 20,
      hno: 106,
      lane: "Pink Street",
    },
  },
];

// More than one generics

const getUserAddress = <T extends hasID, K extends keyof T>(
  user: T[],
  key: K
): T[K][] => {
  return user.map((user) => user[key]);
};

console.log(getUserAddress(userArr, "name"));

/* ```

 Explanation: 
  1. Create a user array dataset.
  2. Create a function that excepts a user array and a key value to be searched
  3. The function has a type T that has an ID + a type K which extends the keys of T
  4. The function returns an array with index at key position
  5. Within the function, map through every user and return the value of array at the given key index 
  ```

*/

// Classes + Objects
// Eg of Encapsulation + Index Signature + Generics Type variable

class newStateObject<T> {
  private ID: T;

  // initialize ID by value of same type T
  constructor(value: T) {
    this.ID = value;
  }

  // Getter
  get accessState(): T {
    return this.ID;
  }

  // Setter
  set newState(value: T) {
    this.ID = value;
  }
}

const objectOne = new newStateObject("RRJ");
objectOne.accessState;
console.log(objectOne.accessState);
// objectOne.newState = 2; - Error (Number won't be assignable after string has been assigned)
objectOne.newState = "HRJ";
console.log(objectOne.accessState);
