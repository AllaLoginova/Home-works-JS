// --------======== Задание 1 ========--------

function get_sum_every_second_num(end) {

    if (end === 1) {
        return end;
    }
    if (end < 1) {
        return 0;
    }

    let result_sum = 0;

    for (let i = 1; i <= end; i += 2) {
        result_sum += i;
    }

    return result_sum;
}

// --------======== Задание 2 ========--------

function pow(n, m) {

    let result_pow = 1;

    if (m === 0) {
        return 1;
    }

    if (m < 0) {
        for (let i = 1; i <= -m; i++) {
            result_pow /= n;
        }
    }

    if (m > 0) {
        for (let i = 1; i <= m; i++) {
            result_pow *= n;
    } 
    }
    
    return result_pow;
}

// --------======== Задание 3 ========--------

function get_max_num(num1, num2, num3, num4) {

    let check_1 = num1 > num2 ? num1 : num2;
    let check_2 = num3 > num4 ? num3 : num4;

    return check_1 > check_2  ? check_1 : check_2;
}

// --------======== Задание 4 ========--------

function isPerfectNum(num) {

    let sum_of_division = 0;

    for (let i = 1; i < num; i++) {

        if (num % i === 0) {
            sum_of_division += i;
        }
    }

    return sum_of_division === num;

}