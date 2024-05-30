// Visibility Modifier, superclass & subclass, interfaces & implements
// Static members & methods, getters & setters
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
        this.lang = lang; // protected works in sub class
    }
    CoderII.prototype.getID = function () {
        return "Hi ".concat(this.id);
    };
    return CoderII;
}());
var RRJ = /** @class */ (function (_super) {
    __extends(RRJ, _super);
    function RRJ(laptop, education) {
        var _this = _super.call(this, "Riya", 19, 532630, "English") || this;
        _this.laptop = laptop;
        _this.education = education;
        _this.getLanguage = function () {
            return "I speak ".concat(_this.lang);
        };
        _this.laptop = laptop;
        _this.education = education;
        return _this;
    }
    return RRJ;
}(CoderII));
var cc = new CoderII("RRJ", 19, 120, "English");
console.log(cc.name);
console.log(cc.getID());
var rr = new RRJ("Lenovo", "BTech");
console.log(rr.laptop);
console.log(rr.getLanguage());
console.log(rr.education);
var Drummer = /** @class */ (function () {
    function Drummer(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    Drummer.prototype.play = function (action) {
        return "".concat(this.name, " plays ").concat(this.instrument, " by ").concat(action, "!");
    };
    return Drummer;
}());
var drum = new Drummer("Riya", "harmonium");
console.log(drum.play("pressing the keys"));
var Attendance = /** @class */ (function () {
    function Attendance() {
        this.getAttendance = function () {
            return ++Attendance.count; // Accessing static variables
        };
    }
    Attendance.count = 100;
    return Attendance;
}());
var lowAtt = new Attendance();
console.log(lowAtt.getAttendance());
var Marks = /** @class */ (function () {
    function Marks() {
        this.marksSet = [];
    }
    Object.defineProperty(Marks.prototype, "getMarks", {
        // Getter
        get: function () {
            return this.marksSet;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Marks.prototype, "setMarks", {
        // Setter
        set: function (marks) {
            if (Array.isArray(marks) && marks.every(function (el) { return typeof el === 'number'; })) {
                this.marksSet = marks;
            }
            else
                throw new Error("Parameters are not of number type!");
        },
        enumerable: false,
        configurable: true
    });
    return Marks;
}());
var mm = new Marks();
mm.setMarks = [1, 2, 3, 4];
console.log(mm.getMarks);
mm.setMarks = __spreadArray(__spreadArray([], mm.getMarks, true), [5, 6, 7], false);
console.log(mm.getMarks);
