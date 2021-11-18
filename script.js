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
            saveFirstNumber();
            console.log(equation.firstNumber);
          });
    }
    else if(buttons[i].id === 'clr') {
        buttons[i].addEventListener('click', clearCalc);
    }
    else if(buttons[i].id === 'backspace') {
        buttons[i].addEventListener('click', clearCalc);
    }
    else if(buttons[i].id === 'negitive') {
        buttons[i].addEventListener('click', makeNegitiveOrPositive);
    }
    else if(buttons[i].id === 'decimal') {
        buttons[i].addEventListener('click', checkDecimal); 
    }
}

function addOperand(sym) {
    prevNum.textContent = currentSelection.textContent + " " +  sym;
    equation.operand = sym;
}
function clearCalc() {
    prevNum.textContent = "";
    currentSelection.textContent = "0";
    equation.hasDecimal = false;
    equation.operand = false;
    equation.firstNumber = false;
    equation.lastNumber = false;
}
function checkDecimal(sym) {
     if(equation.hasDecimal === true) {
         return;
     }
     else {
          currentSelection.textContent = currentSelection.textContent + ".";
         equation.hasDecimal = true;
     }
}
function makeNegitiveOrPositive() {
    if(Math.sign(parseInt(currentSelection.textContent)) === -1 ) {
        currentSelection.textContent = currentSelection.textContent.slice(1);
    }
    else if(Math.sign(parseInt(currentSelection.textContent)) === -0) {
        return;
    }
    else {
        currentSelection.textContent = "-" + currentSelection.textContent;
    }
}
function saveFirstNumber() {
    equation.firstNumber = currentSelection.textContent;
}
/*  when a user clicks a button it saves that number in a variable concating each one until a operand symbol is pressed
    when operand is pressed add that to another variable,   */
    // check which id is clicked before adding event listener

    //when you click symbol it stores the current type in number as a variable and then allows you to type in your second number 
    //when you click on an operand key change the value of a varaible to be what teh text content of that current operand is.
    // when you clcik an operand set a 2nd variable to be 1, and check that when you click a number, and if it eqeals
    // anything turn the current number to 0 then reset the 2nd variable and then add that numbers text conent to the display
    // all functions should do ONE thing completely
    let equation = {
        hasDecimal: false,
        firstNumber: false,
        lastNumber: false,
        operand: false,
    }