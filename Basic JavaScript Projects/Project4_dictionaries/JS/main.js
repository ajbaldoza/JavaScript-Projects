function my_Dictionary(){
    var Mammal = {
        Species:'Cow',
        Color: 'White',
        Age: 6,
        Sounds: 'Moo!'
    };
    delete Mammal.Age
    document.getElementById('Dictionary').innerHTML = Mammal.Age;
}