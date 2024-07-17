// Functions Without Parameters //

function greet(){
    console.log("Hello, World!")
}
greet();
// output //
// Hello, World!

// Functions With Parameters //

function addNumbers(a,b){
    sum = a+b
    console.log(sum)
}
addNumbers(18,47)
// ourput //
// 65


function addNumbers(d,s){
    sum = d+s
    console.log(sum)
}
addNumbers(5,20)
// ourput //
// 25

// Functions With Return Statements //

function multiply(x,y){
    return(x*y)
}
let result=multiply(4,5)
console.log(result)
// output //
// 20

// Combining Functions //

function calculateRectangleArea(length,width){
    return(length*width)
}
let result1=calculateRectangleArea(10,6)
console.log(result1)
// output //
// 60

// Default Parameters //

function greetUser(name="Guest"){
    console.log(`Hello ${name}`)
}
greetUser()

// output //
// Hello Guest

