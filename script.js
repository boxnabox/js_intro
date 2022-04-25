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
};


function guesFruit() {
    console.log("game2");

    function shuffle(array){
        array = array.sort(() => Math.random() - 0.5);
    }
    
    const fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    shuffle(fruits);
    console.log(fruits);
    alert(`Постарайтесь запомнить порядок элементов: ${fruits.join(", ")}`);
    
    let answerOne = prompt("Чему равнялся первый элемент массива?");
    let answerTwo;
    if (answerOne !== null) {
        answerTwo = prompt("Чему равнялся последний элемент массива?");
    };

    if (answerOne === null || answerTwo === null) {
        alert("Не хочешь как хочешь...");
    } else {
        answerOne = answerOne.toLowerCase() == fruits[0].toLowerCase();
        answerTwo = answerTwo.toLowerCase() == fruits[6].toLowerCase();
        const answers = [answerOne, answerTwo];

        if (answers.every(item => item === true)) {
        alert("Поздравляю, пользователь, ты угадал оба элемента");
    } else if (answers.every(item => item === false)) {
        alert("Пользователь, ты не угадал ни одного элемента, сообщаю, что ты ответил неверно");
    } else {
        alert("Вы были близки к победе!");
    }
    }
};