let w = '5'
let x = 5
let y = 3
let z = 5

// =(atribui valores)  ==(verifica igualdade de valores) ===(verifica valor e tipo) !==(verifica se o valor é diferente)

//É o mesmo valore tipo de variável.
console.log(x===z)

//Diferentes valores.
console.log(x === y)

//Pode ser o mesmo valor, mas não é o mesmo tipo de variavel um é numero e o outro é string.
console.log(x === y)


console.log('Maria e jão podem entar no bar ?')

let idadeDoJao = 20

let idadeDaMaria = 17

//Condicionais Complexos

if (idadeDoJao>=18){
  console.log('Jão pode entrar')
}else{
  console.log('Jão não pode entar')
}
if (idadeDaMaria>=18){
  console.log('Maria pode entrar')
}else{
  console.log('Maria não pode entar')
}



//FALSY
false;
undefined;
null;
("");
0;
NaN;

let stringVazia = ""

console.log(stringVazia == false)


