// --------======== Задание 1 ========--------

let arr = [20, 108, 99, 35, 222, 501, 77, 48, 255, 8];

let sumEvenElements = 0;
let i = 0;

for (let el of arr) {

    if (el % 2 === 0) {
        sumEvenElements += el;
        i += 1;
    }
}

let result = sumEvenElements / i;

alert (`Задание 1\nСреднее арифметическое всех чётных элементов массива: ${result}`);

// --------======== Задание 2 ========--------

let tenRandomElementsArray = [];

for (let i = 0; i < 10; i ++) {

    let rand = 50 + Math.random() * (70 - 50 + 1);
    tenRandomElementsArray.push(Math.floor(rand));
}

let N = +prompt('Задание 2\nВведите число:');

let itemsFromUserRange = [];

for (let i = N - 3; i <= N + 3; i ++) {
    itemsFromUserRange.push(tenRandomElementsArray[i]);
}

alert(`Задание 2\n${itemsFromUserRange}`);

// --------======== Задание 3 ========--------

function getArrayDigits(num) {

    let numToString = num.toString(10);
    let res = [];

    for (let digit of numToString) {
        res.push(digit);
    }

    return res;
}

// alert(getArrayDigits(123456787654321));