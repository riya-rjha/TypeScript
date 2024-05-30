// Visibility Modifier, superclass & subclass, interfaces & implements
// Static members & methods, getters & setters

class Coder {
    name: string
    emailId: string
    age: number // !. - optional parameter

    // Creating a constructor
    constructor(name: string, emailId: string, age: number) {
        this.name = name;
        this.emailId = emailId;
        this.age = age
    }

}

class CoderII {

    constructor(public readonly name: string, public age: number, private id: number, protected lang: string) {
        this.name = name
        this.age = age
        // this.id = id
        this.lang = lang // protected works in sub class
    }

    public getID() {
        return `Hi ${this.id}`
    }

}

class RRJ extends CoderII {
    constructor(public laptop: string, public education: string) {
        super("Riya", 19, 532630, "English");
        this.laptop = laptop
        this.education = education
    }

    public getLanguage: () => string = () => {
        return `I speak ${this.lang}`;
    }

}

const cc = new CoderII("RRJ", 19, 120, "English");
console.log(cc.name);
console.log(cc.getID());

const rr = new RRJ("Lenovo", "BTech");
console.log(rr.laptop);
console.log(rr.getLanguage());
console.log(rr.education);


interface Musician {
    name: string
    instrument: string
    play(action: string): string
}

class Drummer implements Musician {
    name: string
    instrument: string;

    constructor(name: string, instrument: string) {
        this.name = name
        this.instrument = instrument
    }

    play(action: string) {
        return `${this.name} plays ${this.instrument} by ${action}!`
    }

}

const drum = new Drummer("Riya", "harmonium");
console.log(drum.play("pressing the keys"));


class Attendance {
    static count: number = 100

    public getAttendance: () => number = () => {
        return ++Attendance.count // Accessing static variables
    }

}

const lowAtt = new Attendance();
console.log(lowAtt.getAttendance());


class Marks {
    private marksSet: number[]

    constructor() {
        this.marksSet = []
    }

    // Getter

    public get getMarks(): number[] {
        return this.marksSet
    }

    // Setter

    public set setMarks(marks: number[]) {
        if (Array.isArray(marks) && marks.every(el => typeof el === 'number')) {
            this.marksSet = marks
        }
        else throw new Error("Parameters are not of number type!");
    }
}
const mm = new Marks();
mm.setMarks = [1, 2, 3, 4];
console.log(mm.getMarks);
mm.setMarks = [...mm.getMarks, 5, 6, 7];
console.log(mm.getMarks);

