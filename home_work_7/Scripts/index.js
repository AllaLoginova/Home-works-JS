var infoCar = {

    'proisvoditel': 'Германия',
    'model': 'Audi',
    'year': 2017,
    'avrgSpeed': 150,


    'printInfo': function () {

        alert(`Данные об автомобиле:\n\nПроизводитель: ${this.proisvoditel}\nМодель: ${this.model}\nГод выпуска: ${this.year}\nСредняя скорость (км/ч): ${this.avrgSpeed}`);
    },


    'trevelTime': function getTrevelTime(distance) {

        var distance = +prompt(`Введите расстояние в км:`, 0);

        var timeWithoutPitStop = distance / this.avrgSpeed;
        var totalPitStops = Math.floor(timeWithoutPitStop / 4)
        var resTime = timeWithoutPitStop + totalPitStops

        var timeWithPitStop = timeWithoutPitStop % 4 === 0 ? Math.floor(resTime) - 1 : Math.floor(resTime);


        alert(`Время в пути составит: ${timeWithPitStop} ч.`);
    },

    'carAge': function getCarAge() {

        var userToday = new Date().toLocaleDateString();
        var arrUserToday = userToday.split('.')
        var userTodayYear = +arrUserToday[2];

        var res = userTodayYear - this.year;

        alert(`Количество лет, прошедших с момента выпуска автомобиля: ${res}`);

    }
};

// infoCar.printInfo();
// infoCar.trevelTime();
// infoCar.carAge();