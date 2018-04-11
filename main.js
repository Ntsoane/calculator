const digits = document.querySelectorAll('.digit')
for (let i = 0; i < digits.length; i++) {
  digits[i].addEventListener('click', digitPressed)
}

const opps = document.querySelectorAll('.opp')
for (var i = 0; i < opps.length; i++) {
  opps[i].addEventListener('click', oppPressed)
}

document.querySelector('#ce').addEventListener('click', clearEntry)
document.querySelector('#ac').addEventListener('click', clearAll)
document.querySelector('#equals').addEventListener('click', calculate)
document.querySelector('#dot').addEventListener('click', dotPressed)

let ScreenMain = document.querySelector('#screenOne')
let screenCalc = document.querySelector('#screenTwo')

let currentValue = '';
let calcValue = '';
let previousAnswer = '';

function digitPressed() {
  let val = this.innerHTML;
  if (currentValue.length <= 15)


    if (currentValue == '') {
      currentValue = val
    } else {
      currentValue = val;
    }
  showMain(currentValue);
}


function oppPressed() {
  let val = this.innerHTML;
  if (!currentValue && previousAnswer) {
    currentValue = previousAnswer;
  }
  if (currentValue[currentValue.length - 1] == '.') {
    currentValue = currentValue.slice(0, -1)
  }
  if (currentValue) {
    calcValue += ' ' + currentValue + ' ' + val;
    currentValue = ' ';
  } else {
    calcValue = calcValue.slice(0, -1) + val;
  }
  showCalc(calcValue)
}

function dotPressed() {
  if (currentValue == '' || currentValue == '0') {
    currentValue = '0.'
  } else if (!/\./.test(currentValue)) {
    currentValue += '.'
  }
  showMain(currentValue);
}

function clearEntry() {
  currentValue = '';
  showMain('0');

}

function clearAll() {
  currentValue = '';
  showMain('0');
  calcValue = '';
  showCalc('0');
}

function calculate() {
  let answer = calcValue + currentValue;
  answer = answer.replace('x', '*').replace('/', '/')

  answer = eval(answer);
  showMain(answer)

  calcValue += ' ' + currentValue + ' = ' + answer
  showCalc(calcValue)
  currentValue = '';
  calcValue = '';

}

function showMain(text) {
  ScreenMain.innerHTML = text;
}

function showCalc(text) {
  screenCalc.innerHTML = text;
}
