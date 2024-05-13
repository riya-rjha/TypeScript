// Visibility Modifier, superclass & subclass, interfaces & implements
// Static members & methods, getters & setters
var Coder = /** @class */ (function () {
    // Creating a constructor
    function Coder(name, emailId, age) {
        this.name = name;
        this.emailId = emailId;
        this.age = age;
    }
    return Coder;
}());
var CoderII = /** @class */ (function () {
    function CoderII(name, age, id, lang) {
        this.name = name;
        this.age = age;
        this.id = id;
        this.lang = lang;
        this.name = name;
        this.age = age;
        // this.id = id
        this.lang = lang;
    }
    CoderII.prototype.getID = function () {
        return "Hi ".concat(this.id);
    };
    return CoderII;
}());
var cc = new CoderII("RRJ", 19, 120, "English");
console.log(cc.age);
console.log(cc.getID());
