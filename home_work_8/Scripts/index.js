// --------======== Задача 1 ========--------
var point1 = {
    x: 2,
    y: 3
}

var point2 = {
    x: 5,
    y: 7
}

function distance(obj1, obj2) {
    var resX = Math.pow(obj1.x - obj2.x, 2);
    var resY = Math.pow(obj1.y - obj2.y, 2);
    var result = Math.sqrt(resX + resY);

    return result;
}

// alert(distance(point1, point2));

// --------======== Задание 2 ========--------
var arr = [];
var min = 1;
var max = 100;

for (let i = 1; i <= 10; i++) {
    var curr = Math.floor(min + Math.random() * (max + 1 - min));
    arr.push(curr);
}

function reverseArray(arr) {
    var result = '';

    for (let i = 0; i < arr.length; i++) {
        result =  `${arr[i]} ` + result;
    }

    return result;
}

// alert(`${arr}\n${reverseArray(arr)}`);