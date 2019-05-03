/* Bulls and Cows */

function getRandomNumber() {
  let num = '';

  while (num.length < 4) {
    let newNum = Math.floor(Math.random() * 10);
    if (num.indexOf(newNum) < 0) {
      num += newNum;
    }
  }
  return num;
}

const randomNumber = getRandomNumber();

console.log(randomNumber);


var bulls = 0;
var cows = 0;

function testNumber(answer) {
  for (let i = 0; i < 4; i++) {
    if (answer[i] == randomNumber[i]) {
      bulls++;
    } else if (randomNumber.indexOf(answer[i]) >= 0) {
      cows++;
    }
  }
}

var turns = 10;

for (let j = 0; j <= 10; j++){
  var answer = prompt("Введите четыри цифры!");
  testNumber(answer);
  if (turns == 0 || bulls == 4) {
    let status = ' Вы проиграли ';
    if (bulls == 4) {
      status = ' Вы выиграли ';
      break;
    }
    alert('You' + status + '\r\nЗагаданнное число: ' + randomNumber);
    break;
  }
  turns-- ;
  alert('Осталось попыток: ' + turns + ' Ваше ответ: ' + answer + ' - ' + ' Быки: ' + bulls + ' Коровы ' + cows);
}





