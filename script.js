let prevNum = document.querySelector('#prevNum');
let currentSelection = document.querySelector('#currentSelection');


function add(num,num2) {
	return num + num2;
};

function subtract(num, num2) {
	return num - num2;
};

function divide(num, num2) {
  return num / num2;
};

function multiply(num, num2) {
   return num * num2;
};



let buttons = document.querySelector('.buttons').children;
for(i = 0; i < buttons.length; i++) {
    if( buttons[i].classList.contains('oper')) {
        buttons[i].addEventListener('click', function (e) {
            saveLastNumber();
            addOperand(e.target.textContent);
            resetCurrentDisplay();
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
    else if(buttons[i].id === 'equals') {
        buttons[i].addEventListener('click', function (e) {
            saveCurrentNumber();
            evaluate(equation.currentNumber,equation.lastNumber, equation.operand);
        });
    }
    else {
        buttons[i].addEventListener('click', function (e) {
            if (currentSelection.textContent === "0") {
               currentSelection.textContent = currentSelection.textContent.slice(1);
            }
            currentSelection.textContent = currentSelection.textContent + e.target.textContent; 
        });
    }
}


function addOperand(sym) {
    prevNum.textContent = equation.lastNumber + " " +  sym;
    equation.operand = sym;
}
function clearCalc() {
    prevNum.textContent = "";
    currentSelection.textContent = "0";
    equation.hasDecimal = false;
    equation.operand = false;
    equation.currentNumber = false;
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
function saveCurrentNumber() {
    equation.currentNumber = parseFloat(currentSelection.textContent);
}
function saveLastNumber() {
    if(equation.lastNumber === false){
        equation.lastNumber = parseFloat(currentSelection.textContent);
    }
    else{
        return;
    }
}
function evaluate(f, l, o) {
    if(o === "÷") {
        currentSelection.textContent = divide(l, f);
        clearThenSaveLastNumber();
    }
    if(o === "*") {
        currentSelection.textContent = multiply(f, l);
        clearThenSaveLastNumber();
    }
    if(o === "+") {
        currentSelection.textContent = add(f, l);
        clearThenSaveLastNumber();
    }
    if(o === "-") {
        currentSelection.textContent = subtract(l, f);
        clearThenSaveLastNumber();
    }
}
function resetCurrentDisplay() {
    currentSelection.textContent = "0";
}
function clearThenSaveLastNumber() {
    equation.lastNumber = false;
    saveLastNumber();
    prevNum.textContent = equation.lastNumber;
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
        currentNumber: false,
        lastNumber: false,
        operand: false,
    }