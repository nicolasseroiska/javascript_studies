const person = {
    name: 'Ana',
    age: 5,
    address: {
        place: 'ABC Street',
        number: 1000
    }
}

const {name, age} = person //destructuring operator

console.log(name, age);

const {name: n, age: a} = person //destructuring operator alterating the variable names

console.log(n, a);

const {last_name: l, goodHumor = true} = person //is possible to set default values, such as true for 'goodHumor' variable

console.log("3rd console.log(): " + l + ", " + goodHumor);
console.log(person);

const { address: ad, address: {place, number} } = person
console.log("\n--------------------------------");
console.log("\nad - Place: " + ad.place + "\nNumber: " + ad.number)
console.log("\nPlace: " + place + "\nNumber: " + number)