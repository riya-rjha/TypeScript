var age = 18;
console.log(age);
var greetMe = {
    greet: "Hello",
    name: "Harshit"
};
var greetFunc = function (greetMe) {
    if (greetMe.name != undefined) {
        return "".concat(greetMe.greet, " ").concat(greetMe.name, "!");
    }
    return ("".concat(greetMe.greet, " Riya!"));
};
console.log(greetFunc(greetMe));
var a = 1;
var b = 2;
var c = 3;
var d = 4;
var sum = function (a, b, c, d) {
    if (d === void 0) { d = 5; }
    return a + b + c + d;
};
console.log(sum(a, b, c, d));
var arr = [1, 2, 3, 4, 5];
var total = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (prev, curr) {
        console.log("prev:", prev, "curr:", curr);
        return prev + curr;
    }, 0);
};
console.log(total.apply(void 0, arr));
