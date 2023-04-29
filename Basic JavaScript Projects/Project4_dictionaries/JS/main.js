function my_Dictionary(){ //names the function 
    var Mammal = {
        Species:'Cow',
        Color: 'White',
        Age: 6,
        Sounds: 'Moo!'
    };
    delete Mammal.Age//delete statement that gets rid of value Age
    document.getElementById('Dictionary').innerHTML = Mammal.Age;//prints the reuslt which should be undefined
}