function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return Math.round((num1 * num2) * 100) / 100;
}

function divide(num1, num2){
    return Math.round((num1 / num2) * 100) / 100;
}

function operate(num1, num2, operator){
    console.log(num1 + " " + num2 + " " + operator);
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

function evaluate(num1, num2, operator){
    // Dividing by zero
    if (operator === "/" && num2 === "0"){
        alert("You cannot divide by 0!!!");
        display.textContent = num1;
        var2 = 0;
    }
    else {
        let result = operate(Number(num1), Number(num2), operator);
        display.textContent = result;
        var1 = result;
        var2 = 0;
        isVar2 = false;
        isResult = true;
    }
}


function runCalculation (symbol){
    // 3 possibilities
    // symbol
    if ((symbol === "+" || symbol === "-" || symbol === "*" || symbol === "/") && isVar1){
        // first operator
        if (!isOpp){
            display.textContent += symbol;
            opp = symbol;
            isOpp = true;
        }
        // change operator
        else if (isOpp && !isVar2){
            display.textContent = var1 + symbol;
            opp = symbol;
        }
        // evalute/next operator
        else if (isOpp && isVar2){
            evaluate(var1, var2, opp);
            opp = symbol;
            display.textContent += symbol;
        }
    }
    // equal
    else if (symbol === "=" && isOpp && isVar1 && isVar2 ){
        evaluate(var1, var2, opp);
        isOpp = false;
    }
    // number
    else if (!isNaN(symbol)){
        // replace num
        if (isResult && !isOpp){
            display.textContent = symbol;
            var1 = symbol;
            isResult = false;
        }
        // first num
        else if (!isOpp){
            display.textContent += symbol;
            (var1 === 0) ? var1 = symbol : var1 += symbol;
            isVar1 = true;
        }
        // second num
        else if (isOpp){
            display.textContent += symbol;
            (var2 === 0) ? var2 = symbol : var2 += symbol;
            isVar2 = true;
        }

    }

}

function clearDisplay(){
    var1 = 0;
    var2 = 0;
    isOpp = false;
    isVar1 = false;
    isVar2 = false;
    isResult = false;
    display.textContent = "";
}

let var1 = 0;
let var2 = 0;
let opp = "+";

let isOpp = false;
let isVar1 = false;
let isVar2 = false;
let isResult = false;

let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let zero = document.querySelector(".zero");
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let mult = document.querySelector(".mult");
let divi = document.querySelector(".divi");
let equal = document.querySelector(".equal");
let clear = document.querySelector(".clear");
let display = document.querySelector(".displayText");

one.addEventListener("click", () => runCalculation("1"));
two.addEventListener("click", () => runCalculation("2"));
three.addEventListener("click", () => runCalculation("3"));
four.addEventListener("click", () => runCalculation("4"));
five.addEventListener("click", () => runCalculation("5"));
six.addEventListener("click", () => runCalculation("6"));
seven.addEventListener("click", () => runCalculation("7"));
eight.addEventListener("click", () => runCalculation("8"));
nine.addEventListener("click", () => runCalculation("9"));
zero.addEventListener("click", () => runCalculation("0"));
plus.addEventListener("click", () => runCalculation("+"));
minus.addEventListener("click", () => runCalculation("-"));
mult.addEventListener("click", () => runCalculation("*"));
divi.addEventListener("click", () => runCalculation("/"));
equal.addEventListener("click", () => runCalculation("="));
clear.addEventListener("click", () => clearDisplay());