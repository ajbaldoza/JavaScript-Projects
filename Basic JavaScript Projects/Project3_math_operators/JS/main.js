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