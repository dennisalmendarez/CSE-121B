/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2
};

function addNumbers (add1, add2) {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
function subtract (number1, number2) {
    return number1 - number2
}

function subtractNumbers (subtract1, subtract2) {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);

}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers)
/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2


const multiplyNumbers = (factor1, factor2) => {
    const multiplyNumber1 = Number(document.querySelector('#factor1').value);
    const multiplyNumber2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers)

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2


const divideNumbers = (factor1, factor2) => {
    const divideNumber1 = parseFloat(document.querySelector('#dividend').value);
    const divideNumber2 = parseFloat(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2).toFixed(2);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */
function getTotal() {
    let subtotal = parseFloat(document.getElementById('subtotal').value);

    if (document.getElementById('member').checked)  {
        subtotal = subtotal - (subtotal * 0.20)
    };
    
    document.getElementById('total').textContent = subtotal.toFixed(2);
}
document.querySelector('#getTotal').addEventListener('click', getTotal);



/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.getElementById('array').textContent = numbersArray;

/* Output Odds Only Array */
function isOdd(numbersArray) {
    return numbersArray % 2 !== 0;
  };

document.getElementById('odds').textContent = numbersArray.filter(isOdd);

/* Output Evens Only Array */
function isEven(numbersArray) {
    return numbersArray % 2 === 0 
};

document.getElementById('evens').textContent = numbersArray.filter(isEven)

/* Output Sum of Org. Array */
function sumOfArray(numbersArray) {
    return numbersArray.reduce((sum, number) => sum + number);
}

document.getElementById('sumOfArray').textContent = sumOfArray(numbersArray)

/* Output Multiplied by 2 Array */
function multiplied(numbersArray) {
    return numbersArray.map(x=> x * 2);
}

document.getElementById('multiplied').textContent = multiplied(numbersArray)

/* Output Sum of Multiplied by 2 Array */

function sumOfMultiplied(numbersArray) {
    return multiplied(numbersArray).reduce((sum, number) => sum + number);
}

document.getElementById('sumOfMultiplied').textContent = sumOfMultiplied(numbersArray)