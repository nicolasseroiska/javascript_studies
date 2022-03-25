//there is mainly two ways to create a variable:
//var and let;
//let is the most correct way to create one, because it is block-scoped
//wich means that it respects loop blocks, working exactly like java

let nome = "Pencil";
let quantidade = 10;
let preco = 6.4;
let imposto = 1.5;
let precoFinal = preco + imposto;

console.log(nome);
console.log(quantidade);
console.log(preco);
console.log(imposto);
console.log(precoFinal);

//
console.log("________________________");
nome = "Faber Castell's pencil"
console.log(nome);

//i'm letting the variable's names in portuguese 
//'cause it is conflicting with lib variables
console.log("________________________");
nome = "This is actually a \n Faber Castell`s pencil"
console.log(nome);
//JavaScript will let you change a variable's type however you want
console.log("________________________");
nome = 5*3;
console.log(nome);

