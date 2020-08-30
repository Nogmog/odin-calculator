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

function doCalc(operator, numA, numB){
    if(operator = "add"){
        return add(numA, numB);
    }else if(operator = "subtract"){
        return sub(numA, numB);
    }else if(operator = "multiply"){
        return multi(numA, numB);
    }else if(operator = "divide"){
        return divide(numA, numB);
    }
    else{console.log("Error")}
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
    if (prevOperate != ""){ // past operation
        console.log("2nd number");
        const operator = e.target.id;
        ans = doCalc(operator, Number(prevTxt.textContent.slice(0 ,-2)), Number(ansTxt.textContent));
    }else{ //no operation
        ans = ansTxt.textContent;
    }
    console.log(ans)
    const sign = e.target.getAttribute("value");
    prevTxt.textContent = ans + " " + sign;
    ansTxt.textContent = "0";
    prevOperate = e.target.id;
}

clearBtn.addEventListener("mouseup", function(){
    prevTxt.textContent = ""
    ansTxt.textContent = "0"
    prevOperate = ""
});