const selAll = document.querySelector("#container");

const selScreen = selAll.querySelector("#screen");

const prevTxt = selScreen.querySelector("#previous");
const ansTxt = selScreen.querySelector("#output");

const selOper = selAll.querySelector("#operation");

const dotBtn = selOper.querySelector("#dot");
const numBtn = selOper.querySelectorAll(".number");
const clearBtn = selOper.querySelector("#clear");
const allOperateBtn = selOper.querySelectorAll(".operator");
const equalBtn = selOper.querySelector("#equal")
const backBtn = selOper.querySelector("#backspace")

const add = (a, b) => {return a + b}
const sub = (a, b) => {return a - b}
const multi = (a, b) => {return a * b}

function divide(a, b){
    return a / b;
}

function doCalc(operator, numA, numB){
    
    if(operator == "add"){
        return add(numA, numB);
    }else if(operator == "subtract"){
        return sub(numA, numB);
    }else if(operator == "multiply"){
        return multi(numA, numB);
    }else if(operator == "divide"){
        return divide(numA, numB);
    }
}


let prevOperate = ""

numBtn.forEach(e => e.addEventListener("mouseup", showValue));
function showValue(e){
    const numValue = e.target.getAttribute("value");
    if(ansTxt.textContent == "0"){ansTxt.textContent = numValue;}
    else{ansTxt.textContent = ansTxt.textContent + numValue;}
}

allOperateBtn.forEach(e => e.addEventListener("mouseup", calculate));
function calculate(e){
    let ans = "error"
    const operator = e.target.id
    if (prevOperate != ""){ // past operation
        if (ansTxt.textContent == ""){
            ans = prevTxt.textContent.slice(0 ,-2)
        }else{
        ans = doCalc(prevOperate, Number(prevTxt.textContent.slice(0 ,-2)), Number(ansTxt.textContent));
        }
    }else{ //no operation
        ans = ansTxt.textContent;
    }
    const sign = e.target.getAttribute("value");
    prevTxt.textContent = ans + " " + sign;
    ansTxt.textContent = "";
    prevOperate = operator;
}

clearBtn.addEventListener("mouseup", function(){
    prevTxt.textContent = ""
    ansTxt.textContent = "0"
    prevOperate = ""
});

dotBtn.addEventListener("mouseup", function(){
    if(ansTxt.textContent.includes(".")){
    }else{
    ansTxt.textContent = ansTxt.textContent + ".";
    }
})

equalBtn.addEventListener("mouseup", function(){
    if(prevOperate != "" || ansTxt.textContent != "Error"){
    const ans = doCalc(prevOperate, Number(prevTxt.textContent.slice(0 ,-2)), Number(ansTxt.textContent));
    ansTxt.textContent = ans;
    prevTxt.textContent = "";
    }else{
        ansTxt.textContent = "Error";
    }
})

backBtn.addEventListener("mouseup", function(){
    ansTxt.textContent = ansTxt.textContent.slice(0, -1)
})
