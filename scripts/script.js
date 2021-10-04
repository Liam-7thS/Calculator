const upDisplay = document.querySelector('.Upper-display');
const loDisplay = document.querySelector('.Lower-display');
const nums = document.querySelectorAll('.Number');
let a = 0;
let b = 0;

function Add(a,b){
    return a + b;
}

function Substract(a,b){
    return a - b;
}

function Multiply(a,b){
    return a * b;
}

function Divide(a,b){
    return a / b;
}

function Operate(a,o,b){
    switch (o) {
        case "+":
            return Add(a,b);
            break;
        
        case "-":
            return Substract(a,b);
            break;
        
        case "*":
            return Multiply(a,b);
            break;

        case "/":
            return Divide(a,b);
            break;
        default:
            return console.error("No valid operator");
            break;
    }
}