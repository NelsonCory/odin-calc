//calculator

var displayValue = []

function drawDisplay(){



    document.getElementById("numberDisplay").innerHTML = parseDisplay();
}

function parseDisplay(){
    var numToPrint = "0";
    if(displayValue.length == 0){
        numToPrint = "0";
    }
    else{

        //convert arr into string, to use as value

        //Number.parseFloat()

    }

    return x;
}

function add(x,y){
    return x + y;
}

function subtract(x,y){
    return x - y;
}

function multiply(x,y){
    return x * y;
}

function divide(x,y){ //edge case: dividing by zero
    return x/y; 
}

function square(x){
    return x * x;
}

function clear(){
    console.log("DEBUG: CLEAR PRESSED");
    //reset all values, set calculator's display to zero
}

function percent(x){
    console.log("DEBUG: PERCENT PRESSED");
}

function toggleNeg(){
    //set first char in displayValue to - or remove front if front is -
}

function pushChar(x){
    displayValue.push(x);
}

function deleteChar(x){

}
