var game = {
    'title': `"Некоторая странная игра..."`,
    'description': 'по ходу игры вы сможете: \n    * получить среднее арифметическое введённых вами пяти чисел\n            * прокачаете навыки сложения двух чисел\n                  * получите введенный вами текст без гласных букв',
    'const lvlsNumber': 3,
    

    'info': function() {
        alert(`                         Данные об игре:\nНазвание игры: ${this.title}\n   Описание игры:\n     =>  ${this.description}\n\nКоличество уровней: ${this["const lvlsNumber"]}`);
    },

    'chooseLvl': function() {
        let userLevel = prompt(`Введите уровень сложности:\nEASY, NORMAL, HARD`);
        if (userLevel === 'EASY') {
            this.lvl1()
            return 1;
        }

        if (userLevel === 'NORMAL') {
            this.lvl2()
            return 2;
        }

        if (userLevel === 'HARD') {
            this.lvl3()
            return 3;
        }

        else {
            alert('Я не знаю, как сделать этот блок 👈 😒😠😢😭🤕⚡')
            // for (let i = 1; i <= 2; i++) {
            //     this.chooseLvl();
            // }
            // return 0;
        }
    },

    'lvl1': function() {
        let numbers = prompt('Введите 5 чисел через пробел:').split(' ', 5).map(string => parseInt(string));
        let sum = 0;
        numbers.forEach(function(num) {
            sum += num;
        });
        let average = sum / 5;
        alert(`Среднее арифметическое всех элементов массива [${numbers}] = ${average}`);  
    },

    'lvl2': function() {
        let num1 = Math.round(Math.random() * 100);
        let num2 = Math.round(Math.random() * 100);
        let sumNums = num1 + num2;

        let userSum = +prompt(`Введите сумму чисел ${num1} и ${num2}`);
        alert(userSum === sumNums);
        return userSum === sumNums;

    },

    'lvl3': function() {
        let user_string = prompt('Введите строку текста на русском языке:').toLowerCase();
        let res = user_string.replace(/[аоуиэыяюеё]/gi, '');
        alert(res);
        }
}

Object.defineProperty(game, "const lvlsNumber", {
    writable: false
  });

game.info();
game.chooseLvl();

// game.lvl1();
// game.lvl2();
// game.lvl3();