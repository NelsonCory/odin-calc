//calculator

var previousValue = 0;
var displayValue = []
var currValue = 0;
var currOperator = "+";

function drawDisplay(){
    document.getElementById("numberDisplay").innerHTML = parseDisplay();
}

function parseDisplay(){
    var numToPrint = "0";
    if(displayValue.length == 0){
        numToPrint = "0";
    }
    else{

        numToPrint = ""
        //convert arr into string, to use as value
        for(var i = 0; i < displayValue.length; i++){
            numToPrint += displayValue[i];
        }
    }

    return Number.parseFloat(numToPrint);
}


function setDisplayValue(x){
    console.log("Set Display Value" + x);
    x = x.toString();
    console.log(x);
    displayValue = x.split("");
    console.log(x + displayValue);
}


function add(x,y){
    currOperator = "+";
    previousValue += parseDisplay();
    displayValue = []

    previousValue =  x + y;

}

function subtract(x,y){
    currOperator = "-";
    previousValue -= parseDisplay();
    displayValue = []
    previousValue = x - y;
}

function multiply(x,y){
    currOperator = "*";
    previousValue *= parseDisplay();
    displayValue = []
    previousValue = x * y;
}

function divide(x,y){ //edge case: dividing by zero
    currOperator = "/";
    previousValue /= parseDisplay();
    displayValue = []
    previousValue = x/y; 
}

function square(x){
    return x * x;
}

function clear(){
    console.log("DEBUG: CLEAR PRESSED");
    //reset all values, set calculator's display to zero
    previousValue = 0;
    displayValue = []
    currValue = 0;
    drawDisplay();
}

function equals(){
    if(currOperator == "+"){
        add(previousValue,parseDisplay());
    }
    if (currOperator == "-"){
        subtract(previousValue,parseDisplay());
    }
    if (currOperator == "*"){
        multiply(previousValue,parseDisplay());
    }
    if (currOperator == "/"){
        divide(previousValue,parseDisplay());
    }
    setDisplayValue(previousValue);
    console.log(displayValue);
    drawDisplay();
    //currOperator = "";

}

function toggleNeg(){
    //set first char in displayValue to - or remove front if front is -
}

function pushChar(x){
    displayValue.push(x);
    drawDisplay();
}

function deleteChar(){
    if(displayValue.length > 0){
        displayValue.pop();
        drawDisplay();
    }
}


//event listeners

document.getElementById("additionOperator").addEventListener("click", () => add(previousValue, parseDisplay()));
document.getElementById("subtractionOperator").addEventListener("click", () => subtract(previousValue, parseDisplay()));
document.getElementById("multiplicationOperator").addEventListener("click", () => multiply(previousValue, parseDisplay()));
document.getElementById("divisionOperator").addEventListener("click", () => divide(previousValue, parseDisplay()));

document.getElementById("numOne").addEventListener("click", () => pushChar("1"));
document.getElementById("numTwo").addEventListener("click",() => pushChar("2"));
document.getElementById("numThree").addEventListener("click",() => pushChar("3"));
document.getElementById("numFour").addEventListener("click",() => pushChar("4"));
document.getElementById("numFive").addEventListener("click", () => pushChar("5"));
document.getElementById("numSix").addEventListener("click", () => pushChar("6"));
document.getElementById("numSeven").addEventListener("click",() => pushChar("7"));
document.getElementById("numEight").addEventListener("click", () => pushChar("8"));
document.getElementById("numNine").addEventListener("click",() => pushChar("9"));
document.getElementById("numZero").addEventListener("click",() => pushChar("0"));

document.getElementById("clearBtn").addEventListener("click",() => clear());
document.getElementById("delBtn").addEventListener("click",() => deleteChar());

document.getElementById("equalsBtn").addEventListener("click",() => equals());
