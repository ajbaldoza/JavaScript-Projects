function Car_Function(){
    var Car_Output;
    var Cars = document.getElementById('Car_Input').value;
    var Car_String = " is an amazing car!";
    switch(Cars) {
        case "Aventador":
            Car_Output = "Aventador" + Car_String;
        break;
        case "G-wagon":
            Car_Output = "G-wagon" + Car_String;
        break;
        case "911":
            Car_Output = "911" + Car_String;
        break;
        case "GTR":
            Car_Output = "GTR" + Car_String;
        break;
        default:
            Car_Output = 'Please enter a car exactly as written on the above list.';
    }
    document.getElementById('Output').innerHTML = Car_Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}


//drawing a cricle
var c = document.getElementById("border");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();


//putting a gradient
var c = document.getElementById("border");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);