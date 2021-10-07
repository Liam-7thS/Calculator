const upDisplay = document.querySelector('.Upper-display');
const loDisplay = document.querySelector('.Lower-display');
const bttns = document.querySelectorAll('.Number');
const c = document.querySelector('#C');
const ce = document.querySelector('#CE');
const supr = document.querySelector('#Backspace');
let a = '0';
let b = '0';
let num1 = 0;
let num2 = 0;
let operator = '';
let isFloat = false;

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
ce.addEventListener('click',ClearLower);
supr.addEventListener('click', Supress)



function Supress(){
    if (a.length > 1){
        a = a.slice(0,-1);
    }
    else{
        a = '0';
    }
    loDisplay.textContent = a;
}
function keyInputManager(val){
    if (val !== null && val !== undefined){
        if (val >= 0 || (!isFloat && val == '.'))
        {
            Read(val);
            if(val == '.'){
                isFloat = true;
            }
        }
        else if(val != "="){
            num1 = a;
            operator = val;
            b = a + val;
            isFloat = false;
            upDisplay.textContent = b;
            ClearLower();
        }
        else{
            num2 = a;
            a = Operate(num1,operator,num2);
            loDisplay.textContent = a;
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
    loDisplay.textContent = a;
    upDisplay.textContent = b;
}
function ClearLower(){
    a = '0';
    loDisplay.textContent = a;
}
function Add(a,b){
    return +a + +b;
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