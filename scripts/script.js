const upDisplay = document.querySelector('.Upper-display');
const loDisplay = document.querySelector('.Lower-display');
const bttns = document.querySelectorAll('.Number');
const c = document.querySelector('#C');
let a = '0';
let b = '0';
let num1 = 0;
let num2 = 0;
let operator = '';

window.addEventListener('keydown', function(e){

    const key = document.querySelector(`[data-val="${e.key}"]`);
    if(key){
        keyInputManager(key.getAttribute("data-val"));
    }

} );
window.addEventListener('click',function(e){
    const key = e.target;
    if(key){
        keyInputManager(key.getAttribute("data-val"));
    }
} );
c.addEventListener('click',ClearAll);


function keyInputManager(val){
    if (val !== null && val !== undefined){
        if (val >= 0)
    {
        Read(val);
    }
    else{
        console.log("you clicked an operator: " + val)
    }
    }
    

}
function Read(val){
    if (a === '0')
    {
        a = val;
    }
    else{
        a += val;
    }
    
    loDisplay.textContent = a;
}


function ClearAll(){
    a = '0';
    b = '0';
    upDisplay.textContent = a;
    loDisplay.textContent = b;
}
function ClearUpper(){
    a = '0'
}
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