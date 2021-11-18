let prevNum = document.querySelector('#prevNum');
let currentSelection = document.querySelector('#currentSelection');


const add = function(num,num2) {
	return num + num2;
};

const subtract = function(num, num2) {
	return num - num2;
};

const divide = function(num, num2) {
  return num / num2;
};

const multiply = function(num) {
   return num.reduce((multi, curr) => multi * curr, 1);
};
let buttons = document.querySelector('.buttons').children;
for(i = 0; i < buttons.length; i++) {
    if( buttons[i].classList.contains('oper')) {
        buttons[i].addEventListener('click', function (e) {
            addOperand(e.target.textContent);
          });
    }
    else if(buttons[i].id === 'clr') {
        buttons[i].addEventListener('click', clearCalc);
    }
    else if(buttons[i].id === 'backspace') {
        buttons[i].addEventListener('click', clearCalc);
    }
    else if(buttons[i].id === 'negitive') {
        buttons[i].addEventListener('click', clearCalc);
    }
    else if(buttons[i].id === 'backspace') {
        buttons[i].addEventListener('click', clearCalc);
    }
}

function addOperand(sym) {
    prevNum.textContent = currentSelection.textContent + " " +  sym;
}
function clearCalc() {
    prevNum.textContent = "";
    currentSelection.textContent = "0";
}
function checkDecimal() {

}
function makeNegitiveOrPositive() {

}
console.log(parseInt(currentSelection.textContent));
/*  when a user clicks a button it saves that number in a variable concating each one until a operand symbol is pressed
    when operand is pressed add that to another variable,   */
    // check which id is clicked before adding event listener
