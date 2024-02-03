// const DAYS = 6;
// const LIMIT = 30;
// let studentReport = [11, 42, 33, 64, 29, 37, 44];

// function studentReportCard(studentReport) {
//     for (let i = 0; i < studentReport.length; i++)
//         if (studentReport[i] < LIMIT)
//         console.log(studentReport[i]);
// }

// let i = 0;
// while (i < studentReport.length){
//     if (studentReport[i] < LIMIT){
//         console.log(studentReport[i]);
//     }
//     i++;
// }

// studentReport.forEach(function (items){
//     if (items < LIMIT) {
//         console.log(items);
//     }
// })

// for (let i in studentReport) {
//     if (studentReport[i] < LIMIT) {
//         console.log(studentReport[i]);
//     }
//     }
    
// a = 2
// b = 3

// function calculate(a = 2, b = 3, callback) {
//     callback(a + b);
// }
    
// function displayResult(result) {
//     console.log('The result is: ' + result);
// }

let person = {
    name: "Antonia Francesca",
    age: 30,
    profession: "Software Engineer",
    hobbies: ["reading", "playing guitar", "hiking"],
    address: {
      street: "123 Camino Real",
      city: "Santa Rosa",
      country: "Honduras"
    },
    isEmployed: true,
    greet: function() {
      console.log(`Hello, my name is ${this.name}.`);
    }
};

