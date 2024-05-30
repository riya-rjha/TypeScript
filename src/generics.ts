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

const isObject = <O>(args: O):boolean => {
    if(typeof args === "object" && args!==null && !Array.isArray(args)){
        return true;
    }
    return false;
}

// Create a function to check for object
const isTrue = <O>(args: O): { args: O; ans: boolean } => {
  if (Array.isArray(args)) {
    console.log("This is an array");
    // args:args (Shorthand)
    return { args, ans: false };
  }
  if (isObject(args) && !Object.keys(args as keyof O).length) {
    // Given not object since the object's properties keys do not have any length
    console.log("This is an object with no keys");
    return { args, ans: false };
  }
  console.log("This is an object");
  return { args, ans: !!args }; // Objects truthy in TS
};

console.log(isTrue({}));
