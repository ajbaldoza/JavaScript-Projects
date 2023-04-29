function addition_function(){
    var addition = 2+2;
    document.getElementById('math').innerHTML = "2+2=" + addition;
}

function subtraction_function(){
    var subtraction = 2-2;
    document.getElementById('math').innerHTML = "2-2=" + subtraction;
}

function multiplication(){
    var simple_Math = 2*2;
    document.getElementById('math').innerHTML = "2*2=" + simple_Math;
}

function more_Math(){
    var simple_Math = (2+2) * 10/2-5;
    document.getElementById('math').innerHTML = "2 plus 2, multiplied by 10,divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator(){
    var simple_Math = 25 % 6;
    document.getElementById('math').innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_operator() {
    var x = 10;
    document.getElementById('math').innerHTML = -x;
}

var X = 5;
X++;
document.write(X);

var X = 5;
X--;
document.write(X);

window.alert(Math.random() * 1000)