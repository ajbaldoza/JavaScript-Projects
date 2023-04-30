//while loop
function printNumbersUpTo() {
    var Digit = "";
    var x=1;
    while(x<11) {
        Digit += "<br>" + x;
        x++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}


//for loop
var Qualifications = [
    "Height",
    "Weight",
    "Experience",
    "Position",
];
var content = "";
var y;
function for_Loop() {
    for (y=0; y<Qualifications.length; y++){
        content += Qualifications[y] + "<br>";
    }
    document.getElementById("Qualifications").innerHTML = content;
}


//array
function color_array(){
    var Colors = [];
    Colors[1] = "Red";
    Colors[2] = "Orange";
    Colors[3] = "Pink";
    Colors[4] = "Purple";
    document.getElementById("Array").innerHTML = "My favourite color is" +  Colors[2] + ".";
}

function bike() {
    let bike = {
        make: 'Specialized',
        year: '2023',
        color: 'White',
    };

    document.getElementById('bike').innerHTML = 
    "I have a " + bike.year + " " + bike.color + " " + bike.make + ".";

}
