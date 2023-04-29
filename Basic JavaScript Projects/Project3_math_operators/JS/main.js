function addition(){//defining the function
    var add = 2+2;
    document.getElementById('add').innerHTML = "2+2= " + add;//show result
}

function subtraction(){
    var sub = 2-2;
    document.getElementById('sub').innerHTML = "2-2=" + sub;
}

function multiplication(){
    var mult= 2*2;
    document.getElementById('mult').innerHTML = "2*2=" + mult;
}

function division(){
    var divide = 10/2;
    document.getElementById('div').innerHTML = "10/2=" + divide;
}

function modulus_operator(){
    var modulus = 25 % 6;
    document.getElementById('mod').innerHTML = "When you divide 25 by 6 you have a remainder of: " + modulus;
}

function Increment(){
    var X = document.getElementById('increment').innerHTML;
    X++;
    document.getElementById('increment').innerHTML = "";
}

function Decrement(){
    var value = document.getElementById('decrement').innerHTML;
    value--;
    document.getElementById('decrement').innerHTML = "";
}

function random(){
    document.getElementById('ran').innerHTML = Math.random()*99;
}

