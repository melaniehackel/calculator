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
    console.log(num1 + " " + num2 + " " + operator);
    // ISSUE HERE
    if (operator === "/" && num2 === "00"){
        alert("You cannot divide by 0!!!");
        console.log("Here");
        display.textContent = num1 + operator;
    }
    else {
        let result = operate(Number(num1), Number(num2), operator);
        display.textContent = result;
        var1 = result;
        var2 = 0;
        isVar2 = false;
    }
}


function runCalculation (symbol){
    display.textContent += symbol;
    if ((symbol === "+" || symbol === "-" || symbol === "*" || symbol === "/") && isOpp === false){
        opp = symbol;
        isOpp = true;
    }
    else if ((symbol === "+" || symbol === "-" || symbol === "*" || symbol === "/") && 
    isOpp === true && isVar1 === true && isVar2 === true){
        evaluate(var1, var2, opp);
        opp = symbol;
        display.textContent += symbol;
    }
    else if (symbol === "="){
        evaluate(var1, var2, opp);
        isOpp = false;
    }
    else if (!isOpp){
        var1 += symbol;
        isVar1 = true;
    }
    else if (isOpp){
        var2 += symbol;
        isVar2 = true;
    }

}

function clearDisplay(){
    var1 = 0;
    var2 = 0;
    isOpp = false;
    isVar1 = false;
    isVar2 = false;
    display.textContent = "";
}

let var1 = 0;
let var2 = 0;
let opp = "+";

let isOpp = false;
let isVar1 = false;
let isVar2 = false;

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

// TODO
// No idea
// Pressing = before all numbers entered
// Dividing by zero
// Only run when two numbers and one operator is inputted
// When two operators inputted change last one
// Once result outputted entering new number shouldnt append it