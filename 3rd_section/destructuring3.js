function rand([min = 0, max = 1000]){

    if(min > max)
        [min, max] = [max, min]//destructuring

    let rand_var = Math.random();
    console.log("Random number: " + rand_var);

    const value = rand_var * (max - min) + min
    return "Random number within the range: " + Math.floor(value);
}

function test_rand([min = 0, max = 1000]){

    if(min > max)
        [min, max] = max, min//destructuring

    let rand_var = Math.random();
    console.log("Random number: " + rand_var);

    const value = rand_var * (max - min) + min
    return "Random number within the range: " + Math.floor(value);
}

console.log("\nPassing a minimium number bigger than the maximium number: " + rand([50, 40]))

console.log("\nPassing just 1 number: " + rand([992])) //the compiler will put it's value in the 1st parameter variable (on the function)

console.log("\nPassing one empty slot: " + rand([, 10])); //it'll consider the default value

console.log("\nAn empty array: " + rand([]));

console.log("\nAn empty argument: " + rand()); //will result in error because it's not passing an array.

//console.log("\nPassing a minimium number bigger than the maximium number (test_rand): " + test_rand([50, 40])) - printed an error



