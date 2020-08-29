const selAll = document.querySelector("#container");

const selScreen = selAll.querySelector("#screen");

const prevTxt = selScreen.querySelector("#previous");
const ansTxt = selScreen.querySelector("#output");

const selOper = selAll.querySelector("#operation");

const dotBtn = selOper.querySelector("#dot");
const numBtn = selOper.querySelectorAll(".number");
const clearBtn = selOper.querySelector("#clear");
const allOperateBtn = selOper.querySelectorAll(".operator");

const add = (a, b) => {return a + b}
const sub = (a, b) => {return a - b}
const multi = (a, b) => {return a * b}

function divide(a, b){
    return a / b;
}

numBtn.forEach(e => e.addEventListener("mouseup", showValue));
function showValue(e){
    const numValue = e.target.getAttribute("value");
    if(ansTxt.textContent == "0"){ansTxt.textContent = numValue;}
    else{ansTxt.textContent = ansTxt.textContent + numValue;}
}

allOperateBtn.forEach(e => e.addEventListener("mouseup", calculate));
function calculate(e){
    if (ansTxt.textContent != 0){
        const operator = e.target.id;
        console.log(operator)
    }else{}
    console.log(e)
}

clearBtn.addEventListener("mouseup", function(){
    prevTxt.textContent = ""
    ansTxt.textContent = "0"
});