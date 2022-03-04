function somaNumeros(a,b) {
  let resultadoSoma = a + b;
  return resultadoSoma;
}

function subtraiNumeros(a,b) {
  let subtraiNumeros = a - b;
  return subtraiNumeros;
}

let resultado = somaNumeros(5,8);
let resultado2 = somaNumeros(2,10)

console.log(`As somas 5,8 e 2,10 deram : ${resultado} e ${resultado2} respectivamente`)

console.log(`As subtrações 5,8 e 2,10 deram : ${subtraiNumeros
(8,5)} e ${subtraiNumeros(10,2)} respectivamente`)

function digaOla() {
  alert('Olá')
}

digaOla()