document.write('ten' + 10)
document.write(typeof 3)

function myfunction(){
    document.getElementById('test').innerHTML = 0/0;

}

document.write(10E400)
document.write(-10E400)

document.write(22>23)

console.log(2>2)

document.write(2==1+1)

//triple equals
X = 10
Y = 5+5
document.write(X===Y)

J = 5
K = "ten" 
document.write(J===K)

m = 'five'
n = 5
document.write(m===n)

u = 'five'
i = 'ten'
document.write(u===i)

document.write(10>5 || 5>1)
document.write(10>20 || 5>11)

function not_Function() {
    document.getElementById('Not').innerHTML = !(20>10);
}