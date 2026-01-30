function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(num1, num2, operator){
    console.log(num1+ " " + num2 + " " + operator);
    if (operator === "+"){
        return add(num1, num2);
    }
    else if (operator === "-"){
        return subtract(num1, num2);
    }
    else if (operator === "*"){
        return multiply(num1, num2);
    }
    else if (operator === "/"){
        return divide(num1, num2);
    }
}


function runCalculation (symbol){
    display.textContent += symbol;
    if (symbol === "+" || symbol === "-" || symbol === "*" || symbol === "/"){
        opp = symbol;
        isOpp = true;
    }
    else if (symbol === "="){
        let result = operate(Number(var1), Number(var2), opp);
        display.textContent = result;
    }
    else if (!isOpp){
        var1 += symbol;
    }
    else if (isOpp){
        var2 += symbol;
    }

}

function clearDisplay(){
    var1 = 0;
    var2 = 0;
    isOpp = false;
    display.textContent = "";
}

let var1 = 0;
let var2 = 0;
let opp = "+";

let isOpp = false;

let one = document.querySelector(".one");
let plus = document.querySelector(".plus");
let equal = document.querySelector(".equal");
let clear = document.querySelector(".clear");
let display = document.querySelector(".displayText");

one.addEventListener("click", () => runCalculation("1"));
plus.addEventListener("click", () => runCalculation("+"));
equal.addEventListener("click", () => runCalculation("="));
clear.addEventListener("click", () => clearDisplay());