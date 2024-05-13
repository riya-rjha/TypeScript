let emp = { id: 1 };
// emp.name = 'r' // Invalid TS Code

let employee_details: {
    id: number,
    name: string
}[] = [
        {
            id: 1,
            name: "RRJ"
        },
        {
            id: 2,
            name: "HRJ"
        },
    ];

employee_details.map((n) => {
    console.log(n);
});

let emP_Details: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}[] = [{
    id: 0,
    name: "RRJ",
    retire: (date: Date) => {
        console.log(date);
    }
}]

emP_Details.map((n) => { console.log(n) });

// Using type alias to configure type

type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
};

let employee_det: Employee = {
    id: 0,
    name: "RRJ",
    retire: (date: Date) => {
        console.log(date);
    }
}