let prevNum = document.querySelector('#prevNum');
let currentSelection = document.querySelector('#currentSelection');
let backspaceButton = document.querySelector('#backspace');
let equation = {
    hasDecimal: false,
    currentNumber: false,
    lastNumber: false,
    operand: false,
    result: false,
}

// OPERATIONS 
function add(num,num2) {
    temp = num + num2;
    return Math.round(temp * 1000) / 1000
};

function subtract(num, num2) {
    temp = num - num2;
    return Math.round(temp * 1000) / 1000
};

function divide(num, num2) {
    if(num === 0 || num2 === 0 ) {
        alert('no');
        return 0
    }
  temp = num / num2;
  return Math.round(temp * 1000) / 1000
};

function multiply(num, num2) {
    temp = num * num2;
    return Math.round(temp * 1000) / 1000
};



let buttons = document.querySelector('.buttons').children;
for(i = 0; i < buttons.length; i++) {
    if( buttons[i].classList.contains('oper')) {
        buttons[i].addEventListener('click', operButtons);
    }
    else if(buttons[i].id === 'clr') {
        buttons[i].addEventListener('click', clearCalc);
    }
    else if(buttons[i].id === 'backspace') {
        buttons[i].addEventListener('click', backButton);
    }
    else if(buttons[i].id === 'negitive') {
        buttons[i].addEventListener('click', makeNegitiveOrPositive);
    }
    else if(buttons[i].id === 'decimal') {
        buttons[i].addEventListener('click', checkDecimal); 
    }
    else if(buttons[i].id === 'equals') {
        buttons[i].addEventListener('click', equalsButton);
    }
    else {
        buttons[i].addEventListener('click', numberButtons);
    }
}

// ALL BUTTONS 
function operButtons(e) {
    saveLastNumber();
    addOperand(e.target.textContent);
    resetCurrentDisplay();
    equation.result = false;
}

function numberButtons(e) {
    if (currentSelection.textContent === "0") {
        currentSelection.textContent = currentSelection.textContent.slice(1);
     }
     currentSelection.textContent = currentSelection.textContent + e.target.textContent; 
     equation.result = false;
}

function equalsButton() {
    if(equation.lastNumber === false) { // prevents error printing out if first complete equation wasnt typed in
        return ;
    }
    temp2 = currentSelection.textContent;
    saveCurrentNumber();
    evaluate(equation.currentNumber,equation.lastNumber, equation.operand);
    clearThenSaveLastNumber();
    equation.result =  true;
    if(currentSelection.textContent === "Infinity") {
        alert("this number too got dang big");
        clearCalc();
    }
}

function backButton() {
    for(i = 0; i <= currentSelection.textContent.length; i++){
        if(i === currentSelection.textContent.length) {
            i--;
            currentSelection.textContent = currentSelection.textContent.slice(0, i)
        }
        if(currentSelection.textContent.length === 0) {
            return currentSelection.textContent = "0";
        }
    }
    equation.result = false;
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
    if(equation.result === true) [
        
    ]
    else if(Math.sign(parseInt(currentSelection.textContent)) === -1 ) {
        currentSelection.textContent = currentSelection.textContent.slice(1);
        saveCurrentNumber();
    }
    else if(Math.sign(parseInt(currentSelection.textContent)) === -0) {
        return;
    }
    else {
        currentSelection.textContent = "-" + currentSelection.textContent;
        saveCurrentNumber();
    }
}

function evaluate(f, l, o) {
    if(o === "÷") {
        currentSelection.textContent = divide(l, f);
    }
    if(o === "*") {
        currentSelection.textContent = multiply(f, l);
    }
    if(o === "+") {
        currentSelection.textContent = add(f, l);
    }
    if(o === "-") {
        currentSelection.textContent = subtract(l, f);
    }
}




// HELPER FUNCTIONS

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
function resetCurrentDisplay() {
    currentSelection.textContent = "0";
}
function clearThenSaveLastNumber() {
    let temp = equation.lastNumber;
    equation.lastNumber = false;
    saveLastNumber();
    prevNum.textContent = temp  + " " + equation.operand + " " + temp2 + " =";
}
function addOperand(sym) {
    prevNum.textContent = equation.lastNumber + " " +  sym;
    equation.operand = sym;
}
