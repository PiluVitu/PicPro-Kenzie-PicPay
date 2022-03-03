let minhaGarrafa = {
cor: 'Preta',
quantidade: 1.5,
marca: 'Overclock'
}

let itemMenu0 = {
  id:0,
  nome:'BurgPylo',
  preço:'20,00',
  ingredientes:['Pão De Batata', 'Alface Americana', 'Tomates cereja', 'Bacon premium defumado', 'Blend especial da casa', 'Cebola tostada', 'Molho especial do chef'],
  disponivel: true,
}

//Como imprimir um item especifico do objeto
console.log(itemMenu0.disponivel)

//Como imprimir o array do objeto
console.log(itemMenu0.ingredientes[3])

//Como imprimir todo o objeto 
console.log(itemMenu0)

//Como alterar alguma propriedade do objeto
itemMenu0.disponivel = false;

console.log(itemMenu0.disponivel)

//Adicionando novas propriedades ao objeto
itemMenu0.peso = '1kg'

console.log(itemMenu0)

//Usando esse obejto em frases 
console.log(`Hoje o ${itemMenu0.nome} está pela bagatela de ${itemMenu0.preço} .Por esse preço vc leva ${itemMenu0.ingredientes} em um montante de ${itemMenu0.peso}, vai perder esse lanchão ?`)

