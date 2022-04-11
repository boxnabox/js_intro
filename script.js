"use strict"

function askMounth() {
    let answer;
    for (answer = prompt("Введите целое число от 1 до 12 включительно"); (answer < 1 || answer > 12) || (answer % Math.floor(answer) != 0);) {
        if (answer === null) {
            break;
        } else {
            alert("Вы ввели некорректное значение");
            answer = prompt("Введите целое число от 1 до 12 включительно");
        }
    }

    if (answer === null) {
        alert("Вы не справились!");
    } else if (answer == 12 || answer < 3) {
        alert("Это Зима");
    } else if (answer < 6) {
        alert("Это Весна");
    } else if (answer < 9) {
        alert("Это Лето")
    } else {
        alert("Это Осень")
    }
}