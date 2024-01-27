// Write a Javascript snippet to do each of the following. Make your best guess if you don't know. Make sure to put some sort of response on each:

// 1)Add two numbers
    var x = 2;
    console.log(x += "2")
// 2)Multiply two numbers
    var x = 2;
    console.log(x *= 3)
// 3)Subtract one from a number
    var x = 2;
    console.log(x -= 1)
// 4)concatinate two strings together.
    const a = "Hello";
    const b = "World";
    console.log(a + " " + b)
// 5)assign a value to a variable
    const myVariable = "Hello, World"
    console.log(myVariable)
// 6)increment the value in a variable by 3
    let myNumber = 4;
    console.log(myNumber += 3)
// 7)compare two values to see if they are the same
    const w = "Hi";
    const e = "Hi";
    console.log(w == e)
// 8)check to see if one number is less than another number
    const n1 = 3;
    const n2 = 4;
    console.log(3 <= 4)
// 9)Check to see if two values are NOT equal
    const r = "Yes";
    const t = "No";
    console.log(r != t)
// 10)check to see if a value is less than 10 and greater than 0
    const o = 8;
    console.log(o <= 10, o >= 0)

let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

let namesB = names.filter(name => name.charAt(0) === 'B');  // easy way 

function filterItems(arr, query) {
    return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase())); // hard way
}

console.log(filterItems(names, "b"));

let nameLengths = names.map((name) => name.length);

names.reduce((total, name) => total + name.length, 0) / names.Lengths;