/*
const arr = Array();
console.log(arr)
*/

/*
let arr = new Array();
console.log(arr)
*/

/*
const arr = []
console.log(arr)
*/

/*
const numeros = [0, 3.14, 9.81, 37, 98.6, 100] // array de números
const frutas = ['banana', 'naranja', 'mango', 'limón'] // array de strings, frutas
const vegetales = ['Tomate', 'Papa', 'Repollo', 'Cebolla', 'Zanahoria'] // array de strings, vegetales
const productosAnimal = ['leche', 'carne', 'manteca', 'yogurt'] // array de strings, productos
const tecnosWeb = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array de tecnologías web
const paises = ['Finlandia', 'Dinamarca', 'Suiza', 'Noruega', 'Islandia'] // array de strins, países

// imprime el array y su longitud

console.log('Números:', numeros);
console.log('Número de numeros:', numeros.length)

console.log('Frutas:', frutas);
console.log('Número de frutas:', frutas.length)

console.log('Vegetales:', vegetales);
console.log('Número de vegetales:', vegetales.length)

console.log('Productos de animales:', productosAnimal);
console.log('Número de productos animal:', productosAnimal.length)

console.log('Tecnologías web:', tecnosWeb);
console.log('Número de tecnologías web:', tecnosWeb.length)

console.log('Países:', paises);
console.log('Número de países:', paises.length)
*/

/*
const arr = [
    'David',
    250,
    true,
    { pais: 'Finlandia', ciudad: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
] // array que contiene diferentes tipos de datos
console.log(arr)
*/

/*
let js = 'JavaScript';
const charsInJavaScript = js.split('')
console.log(charsInJavaScript)
*/

/*
let stringCompañias = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
const compañias = stringCompañias.split(',')

console.log(compañias) // (7) ['Facebook', ' Google', ' Microsoft', ' Apple', ' IBM', ' Oracle', ' Amazon']

let txt = 'Yo amo cantarle a Dios. Sé tocar el teclado, guitarra y batería';
const words = txt.split(' ')
console.log(words) // (12) ['Yo', 'amo', 'cantarle', 'a', 'Dios.', 'Sé', 'tocar', 'el', 'teclado,', 'guitarra', 'y', 'batería']
*/

/*
const frutas = ['banana', 'naranja', 'mango', 'limón'];
let primeraFruta = frutas[0] // accedemos al primer item utilizando su índice
console.log(primeraFruta) // banana

segundaFruta = frutas[1]; // no puso let ni const y funcionó igual
console.log(segundaFruta) // naranja

let ultimaFruta = frutas[3];
console.log(ultimaFruta) // limón

// el último índice se puede calcular de la siguiente manera
let ultimoIndice = frutas.length - 1;
ultimaFruta = frutas[ultimoIndice];
console.log(ultimaFruta)
*/

/*
const numeros = [0, 3.14, 9.81, 37, 98.6, 100] // conjunto de números

console.log(numeros.length) // para saber el tamaño del array, el cual es 6
console.log(numeros) // (6) [0, 3.14, 9.81, 37, 98.6, 100]
console.log(numeros[0]) // 0
console.log(numeros[5]) // 100

let ultimoIndice = numeros.length - 1;
console.log(numeros[ultimoIndice]) // 100
*/

/*
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
] // Lista de tecnologías web

console.log(webTechs) // todos los elementos del array
console.log(webTechs.length) // 7
console.log(webTechs[0]) // HTML
console.log(webTechs[6]) // MongoDB

let ultimoIndice = webTechs.length - 1;
console.log(webTechs[ultimoIndice]) // MongoDB
*/

/*
const numeros = [1, 2, 3, 4, 5];
numeros[0] = 10;
numeros[1] = 20;
console.log(numeros) // [10, 20, 3, 4, 5]

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

countries[0] = 'Afganistan'; // reemplazando Albania por Afaganistan
let ultimoIndice = countries.length - 1;
countries[ultimoIndice] = 'Korea'; // reemplazando Kenya por Korea

console.log(countries)
*/

/*
const arr = Array();
console.log(arr);

const ochoValoresVacios = Array(8) // crea ocho valores vacíos
console.log(ochoValoresVacios) // [empty x 8]
*/

/*
const arr = Array() // crea un array vacío
console.log(arr)

const eightXValues = Array(8).fill('X') // crea ocho valores de elementos rellenados con 'X';
console.log(eightXValues) // (8) ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']

const eigth0values = Array(8).fill(0) // crea ocho elementos rellenados con 0
console.log(eigth0values) // [0, 0, 0, 0, 0, 0, 0, 0]

const four4values = Array(4).fill(4);
console.log(four4values) // [4, 4, 4, 4]
*/

/*
const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = firstList.concat(secondList);

console.log(thirdList) // [1, 2, 3, 4, 5, 6]
*/
/*
const frutas = ['banana', 'naranja', 'mango', 'limón'];
const vegetales = ['Tomate', 'Papa', 'Repollo', 'Cebolla', 'Zanahoria']
const frutasYvegetales = frutas.concat(vegetales);

console.log(frutasYvegetales) // ['banana', 'naranja', 'mango', 'limón', 'Tomate', 'Papa', 'Repollo', 'Cebolla', 'Zanahoria']
*/
/*
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.length)
*/
/*
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.indexOf(5)) // 4 (5 existe y está en la posición 4)
console.log(numbers.indexOf(0)) // -1 (no está el cero)
console.log(numbers.indexOf(1)) // 0
console.log(numbers.indexOf(6)) // -1
*/
/*
// vamos a verificar si banana existe en el array

const frutas = ['banana', 'naranja', 'mango', 'limón'];
let index = frutas.indexOf('banana') // 0

if(index === -1) {
    console.log('Esta fruta no existe en el array')
} else {
    console.log('Esta fruta existe en el array')
}
// Esta fruta existe en el array

// podemos usar también el ternarioa aquí
index === -1 ? console.log('Esta fruta no existe en el array') : console.log('Esta fruta existe en el array')

// vamos a comprobar si palta existe en el array
let indexOfPalta = frutas.indexOf('Palta') // -1
if(indexOfPalta === -1) {
    console.log('Esta fruta no existe en el array')
} else {
    console.log('Esta fruta existe en el array')
}
// Esta fruta no existe en el array
*/
/*
const numbers = [1, 2, 3, 4, 5, 3, 1, 2]

console.log(numbers.lastIndexOf(2)) // 7 (el último 2 está en la posición 7)
console.log(numbers.lastIndexOf(0)) // -1, no existe 0
console.log(numbers.lastIndexOf(1)) // 6
console.log(numbers.lastIndexOf(4)) // 3
console.log(numbers.lastIndexOf(6)) // -1
*/
/*
const numbers = [1, 2, 3, 4, 5]

console.log(numbers.includes(5)) // true
console.log(numbers.includes(0)) // false
console.log(numbers.includes(1)) // true
console.log(numbers.includes(6)) // false

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
] // Lista de tecnologías web

console.log(webTechs.includes('Node')) // true
console.log(webTechs.includes('C'))
*/
/*
const numbers = [1, 2, 3, 4, 5]
console.log(Array.isArray(numbers)) // true

const number = 100;
console.log(Array.isArray(number)) // false
*/
/*
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.toString()) // 1,2,3,4,5

const names = ['David', 'Isabel', 'Aruna', 'Linda']
console.log(names.toString()) // David,Isabel,Aruna,Linda
*/
/*
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.join()) // 1,2,3,4,5

const nombres = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];

console.log(nombres.join()) // Asabeneh,Mathias,Elias,Brook
console.log(nombres.join('')) // AsabenehMathiasEliasBrook
console.log(nombres.join(' ')) // Asabeneh Mathias Elias Brook
console.log(nombres.join(', ')) // Asabeneh, Mathias, Elias, Brook
console.log(nombres.join(' # ')) // Asabeneh # Mathias # Elias # Brook

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ] // List of web technologies

  console.log(webTechs.join()) // HTML,CSS,JavaScript,React,Redux,Node,MongoDB
  console.log(webTechs.join(' # ')) // HTML # CSS # JavaScript # React # Redux # Node # MongoDB
*/

/*
const numbers = [1,2,3,4,5]

console.log(numbers.slice()) // esto copia todos los elementos -> [1, 2, 3, 4, 5]
console.log(numbers.slice(0)) // copia todos los elementos -> [1, 2, 3, 4, 5]
console.log(numbers.slice(0, numbers.length)) // copia todos los elementos -> [1, 2, 3, 4, 5]
console.log(numbers.slice(1,4)) // -> [2, 3, 4] // no incluye la posición final
*/

// const numbers = [1, 2, 3, 4, 5]
// numbers.splice()
// console.log(numbers.splice())  // [] -> remueve todos los elementos

// const numbers = [1, 2, 3, 4, 5]
// numbers.splice(0, 1)
// console.log(numbers) // [2, 3, 4, 5] -> remueve el primer elemento y devuelve este array
/*
const numbers = [1, 2, 3, 4, 5];
numbers.splice(3, 3, 7, 8, 9) // inicia desde el índice 3, remueve 3 elementos, agrega los valores 7, 8, 9 y devuelve los valores no eliminados con los agregados
console.log(numbers) // [1, 2, 3, 7, 8, 9] -> 
*/

/*
// sintaxis
const arr = ['item1', 'item2', 'item3']
arr.push('new item')
console.log(arr) // ['item1', 'item2', 'item3', 'new item']

const numbers = [1, 2, 3, 4, 5]
numbers.push(6)
console.log(numbers) // [1, 2, 3, 4, 5, 6]

numbers.pop() // -> remueve un elemento del final
console.log(numbers) // [1, 2, 3, 4, 5]

let frutas = ['banana', 'naranja', 'mango', 'limón']
frutas.push('manzana')
console.log(frutas) // ['banana', 'naranja', 'mango', 'limón', 'manzana']

frutas.push('limón')
console.log(frutas) // ['banana', 'naranja', 'mango', 'limón', 'manzana', 'limón']
*/

const numbers = [1, 2, 3, 4, 5]
numbers.shift()
console.log(numbers)