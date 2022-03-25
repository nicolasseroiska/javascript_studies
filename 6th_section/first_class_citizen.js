//Functions in JS is also called "First-Class Object (Citizens)"
//High-order function --> meaning that function can also be treated as an Object, a data.

//Literal functions
function fun_1(){}

// Storing in a variable
const fun_2 = function () { }

//Storing in an array
const array = [function(a, b){return a + b}, fun_1, fun_2]
console.log(array[0](2,3))

//Storing in an object attribute
const obj = {}
obj.speak = function(){ return "Hi There!"}
console.log(obj.speak())

//Using a function as a parameter
function run(function_example){
    function_example()
}
run(function (){console.log("In execution...")})

//Returning a function
function sum(a, b){
    return function (c){
        console.log(a + b + c)
    }
}
console.log("\nFirst-way:")
sum(10,10)(3) //to sum the 3 values
//or
console.log("\nSecond-way:")
const first_function = sum(7,10)
first_function(3)
//to also sum the 3 values