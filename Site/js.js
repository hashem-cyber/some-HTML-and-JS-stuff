function puzzle() 
{
	var result = 0;

	function askQuestion(textBoxId, userAnswer)
	{
		var answer = document.getElementById(textBoxId).value;
		if (answer == userAnswer) {result++;};
	};

	askQuestion("answer1", "капуста");
	askQuestion("answer2", "елочка");
	if (result == 2) {
		alert("Все загадки угаданы верно! :)");
	} else if (result == 1) {
		alert("Один верный ответ!");
	} else {
		alert("К сожалению, ни одного верного ответа :(");
	};
	result = 0;
};


function riddle()
{
	var answer = parseInt(Math.random() * 100);
	
	while(true) {
			var userAnswer = prompt("Угадай число от 1 до 100. Для выхода нажми Q.");
			if (userAnswer.toLowerCase() == "q") {
				break;
			};
			if (userAnswer > answer) {
				alert("Предположенное число больше загаданного.")
			} else if (userAnswer < answer) {
				alert("Предположенное число меньше загаданного.");
			} else if (userAnswer == answer) { 
				alert("Угадано верно!")
				break;
			};
	};
};

function riddlemp()
{
var answer1 = parseInt(Math.random() * 100);
var answer2 = parseInt(Math.random() * 100);
var count = 1;
var turnCount1 = 0;
var turnCount2 = 0;
var warning = alert("Игра для двух игроков. Компьютер загадывает число от 1 до 99, а игроки должны его отгадать, используя подсказки.\nДля каждого игрока загадано отдельное число, ходы делаются по очереди.\nВсего дано 7 ходов, по истечении которых объявляется ничья.\nДля выхода в любое время введите \"q\".");
		
	while(turnCount1 < 7 || turnCount2 < 7) {
		if (count % 2 !== 0) {
			var userAnswer1 = prompt("Попытка игрока №1");
			if (userAnswer1 > answer1) {
					alert("Предположенное число больше загаданного.");
					count++;
					turnCount1++;
			} else if (userAnswer1 < answer1) {
					alert("Предположенное число меньше загаданного.");
					count++;
					turnCount1++;
			} else if (userAnswer1 == answer1) { 
					alert("Игрок №1 угадал верно и выиграл за " + turnCount1 + " ходов!")
					count++;
					turnCount1++;
					break;
			} else if (userAnswer1.toLowerCase() == "q") {
					break;
			};

			} else if (count % 2 == 0) {
			var userAnswer2 = prompt("Попытка игрока №2");
			if (userAnswer2 > answer2) {
					alert("Предположенное число больше загаданного.");
					count++;
					turnCount2++;
			} else if (userAnswer2 < answer2) {
					alert("Предположенное число меньше загаданного.");
					count++;
					turnCount2++;
			} else if (userAnswer2 == answer2) { 
					alert("Игрок №2 угадал верно и выиграл за " + turnCount2 + " ходов!")
					count++;
					turnCount2++;
					break;
			} else if (userAnswer2.toLowerCase() == "q") {
					break;
			};
		};
	};

	if (turnCount1 >= 7 || turnCount2 >= 7) {
		alert("7 ходов истекло. Ничья!\nЧтобы сыграть ещё раз нажмите f5 или перезагрузите страничку.");
	};
};