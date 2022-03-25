function rand({min = 0, max = 1000}){//setting min = 0 and max = 1000 as default
    let rand_var = Math.random();
    console.log("Random number: " + rand_var);
    const value = rand_var * (max - min) + min
    return "Random number within the range: " + Math.floor(value);
} 
const object = {max: 50, min: 40}
console.log(rand(object))
console.log("\n_____________________")
console.log(rand({min: 608}))
console.log("\n_____________________")
console.log(rand({}))
console.log("\n_____________________")
console.log(rand())//error because it's not passing an object through the argument