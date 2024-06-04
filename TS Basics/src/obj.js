var emp = { id: 1 };
// emp.name = 'r' // Invalid TS Code
var employee_details = [
    {
        id: 1,
        name: "RRJ"
    },
    {
        id: 2,
        name: "HRJ"
    },
];
employee_details.map(function (n) {
    console.log(n);
});
var emP_Details = [{
        id: 0,
        name: "RRJ",
        retire: function (date) {
            console.log(date);
        }
    }];
emP_Details.map(function (n) { console.log(n); });
var employee_det = {
    id: 0,
    name: "RRJ",
    retire: function (date) {
        console.log(date);
    }
};
