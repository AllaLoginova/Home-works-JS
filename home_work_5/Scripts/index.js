function addToNumbers(a, b) {
    return `Сумма чисел ${a} и ${b} равна ${a + b}`;
}

function cubeNumber(a) {
    return `${a} в кубе равно ${a * a * a}`;
}

function addPadEntry(text) {
    return `${i}. ${text}\n`;
}

var pattern = 'Введите номер команды:\n1. Сложить два числа\n2. Возвести число в куб\n3. Добавить запись в блокнот\n4. Посмотреть блокнот\n5. Очистить блокнот\n6. Завершить программу';
var x = +prompt(pattern, '');
var res = '';
var i = 1;

do {
    
    if (x === 1) {
        var a = +prompt('Сложение двух чисел\nВведите первое число:', '');
        var b = +prompt('Введите второе число:');
        alert(addToNumbers(a, b));
        x = +prompt(pattern, '');
    }

    else if (x === 2) {
        var a = +prompt('Возвести число в куб\nВведите число', '');
        alert(cubeNumber(a));
        x = +prompt(pattern, '');
    }

    else if (x === 3) {
        var currText = prompt('Добавить запись в блокнот\nВведите текст', '');
        res += addPadEntry(currText);
        i += 1;
        x = +prompt(pattern, '');
    }

    else if (x === 4) {
        alert(res);
        x = +prompt(pattern, '');
    }
    
    else if (x === 5){
        res = '';
        i = 1;
        alert('Блокнот пуст')
        x = +prompt(pattern, '');

    } 

} while(x != 6)