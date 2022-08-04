# Día 5
## Arrays
En contraste con las variables, un array puede contener múltiples variables. Cada valor en un array tiene un _índice_, y cada índice tiene _tiene una referencia en una dirección de memoria_. Se puede acceder a cada valor utilizando sus _índices_. El índice en un array comienza desde _cero_, y el índice del último elemento es menor por uno de la longitud del array.

Un array es una colección de diferentes tipos de datos que están ordenados y son cambiables (modificables). Una matriz permite almacenar elementos duplicados y diferentes tipos de datos. Un array puede estar vacío o puede tener diferentes valores de tipos de datos.

### Cómo crear un array vacío

En Javascript, podemos crear un array de diferentes maneras. Vamos a ver diferentes maneras de crear un array. Es muy común utilizar _const_ en lugar de _let_ para declarar una variable de array. Si usas const, significa que no volverás a utilizar ese nombre de variable.

- Usando el constructor de arrays

```js
// sintaxis
const arr = Array()
// o
// let arr = new Array()
console.log(arr) // []
```

- Usando corchetes([])

```js
// sintaxis
// Esta es la manera más recomendada de crear una lista vacía
const arr = []
console.log(arr)
```

### Cómo crear un array con valores

Array con valores iniciales. Usamos la propiedad _length_ para hallar el largo de un array.

```js
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
```
```sh
Números: (6) [0, 3.14, 9.81, 37, 98.6, 100]
Número de numeros: 6
Frutas: (4) ['banana', 'naranja', 'mango', 'limón']
Número de frutas: 4
Vegetales: (5) ['Tomate', 'Papa', 'Repollo', 'Cebolla', 'Zanahoria']
Número de vegetales: 5
Productos de animales: (4) ['leche', 'carne', 'manteca', 'yogurt']
Número de productos animal: 4
Tecnologías web: (7) ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB']
Número de tecnologías web: 7
Países: (5) ['Finlandia', 'Dinamarca', 'Suiza', 'Noruega', 'Islandia']
Número de países: 5
```
- Un array puede tener items de diferentes tipos de datos

```js
const arr = [
    'David',
    250,
    true.
    { pais: 'Finlandia', ciudad: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
] // array que contiene diferentes tipos de datos
console.log(arr)
```

### Creando un array utilizando split

Como vimos en la sección anterior, podemos dividir una cadena en diferentes posiciones, y podemos transformarlo a un array. Veamos los ejemplos de abajo

```js
let js = 'JavaScript';
const charsInJavaScript = js.split('')

console.log(charsInJavaScript) // (10) ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't'] 

let stringCompañias = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
const compañias = stringCompañias.split(',')

console.log(compañias) // (7) ['Facebook', ' Google', ' Microsoft', ' Apple', ' IBM', ' Oracle', ' Amazon']

let txt = 'Yo amo cantarle a Dios. Sé tocar el teclado, guitarra y batería';
const words = txt.split(' ')
console.log(words) // (12) ['Yo', 'amo', 'cantarle', 'a', 'Dios.', 'Sé', 'tocar', 'el', 'teclado,', 'guitarra', 'y', 'batería']
```

### Acceder a los elementos de la matriz usando el índice

Podemos acceder a cada elemento del array usando sus índices. El índice de un array comienza por cero. 

![arr index](../images/array_index.png)

```js
const frutas = ['banana', 'naranja', 'mango', 'limón'];
let primeraFruta = frutas[0] // accedemos al primer item utilizando su índice
console.log(primeraFruta)

segundaFruta = frutas[1]; // no puso let ni const y funcionó igual
console.log(segundaFruta) // naranja

let ultimaFruta = frutas[3];
console.log(ultimaFruta) // limón

// el último índice se puede calcular de la siguiente manera
let ultimoIndice = frutas.length - 1;
ultimaFruta = frutas[ultimoIndice];
console.log(ultimaFruta) // limón
```

```js
const numeros = [0, 3.14, 9.81, 37, 98.6, 100] // conjunto de números

console.log(numeros.length) // para saber el tamaño del array, el cual es 6
console.log(numeros) // (6) [0, 3.14, 9.81, 37, 98.6, 100]
console.log(numeros[0]) // 0
console.log(numeros[5]) // 100

let ultimoIndice = numeros.length - 1;
console.log(numeros[ultimoIndice]) // 100
```

```js
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
```

```js
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
] // List of countries

console.log(countries)      // -> all countries in array
console.log(countries[0])   //  -> Albania
console.log(countries[10])  //  -> Kenya

let lastIndex = countries.length - 1;
console.log(countries[lastIndex]) //  -> Kenya
```

```js
const shoppingCart = [
    'Leche',
    'Mango',
    'Tomate',
    'Papa',
    'Palta',
    'Carne',
    'Huevos',
    'Azúcar'
] // list de alimentos

console.log(shoopingCart) // todo el carrito de compras en un array
console.log(shoppingCart[0]) // Leche
console.log(shoppingCart[7]) // Azúcar

let ultimoIndice = shoppingCart.length - 1;
console.log(shoppingCart[ultmoIndice]) // Azúcar
```

### Modificar elemento de un array

Un array es mutable(modificable). Una vez que se crea una matriz, podemos modificar el contenido de los elementos de la matriz.

```js
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

console.log(countries) // ['Afganistan', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Korea']
```

### Métodos para manipular arrays

Hay diferentes métodos para manipular un array. Estos son algunos de los métodos disponibles para tratar con arreglos: _Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift_

#### Constructor de Array
Array: Para crear un arreglo

```js
const arr = Array();
console.log(arr);

const ochoValoresVacios = Array(8) // crea ocho valores vacíos
console.log(ochoValoresVacios) // [empty x 8]
```
#### Crando valores estáticos con fill

fill: Rellene todos los elementos de la matriz con un valor estático

```js
const arr = Array() // crea un array vacío
console.log(arr)

const eightXValues = Array(8).fill('X') // crea ocho valores de elementos rellenados con 'X';
console.log(eightXValues) // (8) ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']

const eigth0values = Array(8).fill(0) // crea ocho elementos rellenados con 0
console.log(eigth0values) // [0, 0, 0, 0, 0, 0, 0, 0]

const four4values = Array(4).fill(4);
console.log(four4values) // [4, 4, 4, 4]
```

#### Concatenación de arrays usando concat
concat: Para concatenar dos arrays

```js
const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = firstList.concat(secondList);

console.log(thirdList) // [1, 2, 3, 4, 5, 6]
```

```js
const frutas = ['banana', 'naranja', 'mango', 'limón'];
const vegetales = ['Tomate', 'Papa', 'Repollo', 'Cebolla', 'Zanahoria']
const frutasYvegetales = frutas.concat(vegetales);

console.log(frutasYvegetales) // ['banana', 'naranja', 'mango', 'limón', 'Tomate', 'Papa', 'Repollo', 'Cebolla', 'Zanahoria']
```


#### Obtener la longitud del array
Length: Para saber el tamaño de la matriz

```js
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.length) // 5 es la cantidad de elementos
```

#### Obtener el índice de un elemento del array
indexOf: Para verificar si un elemento existe en una matriz. Si existe, devuelve el índice, de lo contrario, devuelve -1.

```js
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.indexOf(5)) // 4 (5 existe y está en la posición 4)
console.log(numbers.indexOf(0)) // -1 (no está el cero)
console.log(numbers.indexOf(1)) // 0
console.log(numbers.indexOf(6)) // -1
```

Verifica si un elemento existe en el array

- Comprobar elementos en una lista

```js
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
```

#### Obtener el último índice de un elemento en la matriz

lastIndexOf: Da la posición del último elemento en la matriz. Si existe, devuelve el índice, de lo contrario, devuelve -1.

```js
const numbers = [1, 2, 3, 4, 5, 3, 1, 2]

console.log(numbers.lastIndexOf(2)) // 7 (el último 2 está en la posición 7)
console.log(numbers.lastIndexOf(0)) // -1, no existe 0
console.log(numbers.lastIndexOf(1)) // 6
console.log(numbers.lastIndexOf(4)) // 3
console.log(numbers.lastIndexOf(6)) // -1
```

includes: Para verificar si un elemento existe en una matriz. Si existe, devuelve verdadero, de lo contrario, devuelve falso.

```js
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
```

#### Comprobando el array
Array.isArray: Para verificar si el tipo de datos es una matriz

```js
const numbers = [1, 2, 3, 4, 5]
console.log(Array.isArray(numbers)) // true

const number = 100;
console.log(Array.isArray(number)) // false
```

#### Convertir un array a string
toString: Convierte matriz en cadena

```js
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.toString()) // 1,2,3,4,5

const names = ['David', 'Isabel', 'Aruna', 'Linda']
console.log(names.toString()) // David,Isabel,Aruna,Linda
```

#### Unión de elementos de array
join: Se usa para unir los elementos de la matriz, el argumento que pasamos en el método de unión se unirá en la matriz y se devolverá como una cadena. De forma predeterminada, se une con una coma, pero podemos pasar diferentes parámetros de cadena que se pueden unir entre los elementos.

```js
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
  ```

  #### Cortar elementos del array
  slice: Para cortar varios elementos en el rango. Toma dos parámetros: posición inicial y final. No incluye la posición final.

  ```js
  const numbers = [1,2,3,4,5]

console.log(numbers.slice()) // esto copia todos los elementos -> [1, 2, 3, 4, 5]
console.log(numbers.slice(0)) // copia todos los elementos -> [1, 2, 3, 4, 5]
console.log(numbers.slice(0, numbers.length)) // copia todos los elementos -> [1, 2, 3, 4, 5]
console.log(numbers.slice(1,4)) // -> [2, 3, 4] // no incluye la posición final
```

#### Método de empalme en array
Splice: Toma tres parámetros: Posición inicial, cantidad de veces que se eliminará y cantidad de elementos que se agregarán.

```js
const numbers = [1, 2, 3, 4, 5]
numbers.splice()
console.log(numbers.splice())  // [] -> remueve todos los elementos
```

```js
const numbers = [1, 2, 3, 4, 5]
numbers.splice(0, 1)
console.log(numbers) // [2, 3, 4, 5] -> remueve el primer elemento y devuelve este array
```

```js
const numbers = [1, 2, 3, 4, 5];
numbers.splice(3, 3, 7, 8, 9) // inicia desde el índice 3, remueve 3 elementos, agrega los valores 7, 8, 9 y devuelve los valores no eliminados con los agregados
console.log(numbers) // [1, 2, 3, 7, 8, 9]
```

#### Agregar elementos a un array usando push

Push: agregando el artículo al final. Para agregar un elemento al final de una matriz existente, usamos el método push.
```js
// sintaxis
const arr = ['item1', 'item2', 'item3']
arr.push('new item')
console.log(arr) // ['item1', 'item2', 'item3', 'new item']
```

```js
const numbers = [1, 2, 3, 4, 5]
numbers.push(6)
console.log(numbers) // [1, 2, 3, 4, 5, 6]

numbers.pop() // -> remueve un elemento del final
console.log(numbers) // [1, 2, 3, 4, 5]
```

```js
let frutas = ['banana', 'naranja', 'mango', 'limón']
frutas.push('manzana')
console.log(frutas) // ['banana', 'naranja', 'mango', 'limón', 'manzana']

frutas.push('limón')
console.log(frutas) // ['banana', 'naranja', 'mango', 'limón', 'manzana', 'limón']
```

#### Quitar el elemento final usando pop

pop: elminando el elemento del final

```js
const numbers = [1, 2, 3, 4, 5]
numbers.pop() // -> elimina un elemento del final
console.log(numbers) // -> [1, 2, 3, 4]
```

#### Quitar un elemento del inicio

shift: eliminar un elemento del array en el inicio del array

```js
const numbers = [1, 2, 3, 4, 5]
numbers.shift()
console.log(numbers) // -> [2, 3, 4, 5]
```

#### Agregar un elemento al inicio

unshift: Agregar elemento de array al comienzo del array.

```js
const numbers = [1, 2, 3, 4, 5]
numbers.unshift(0);
console.log(numbers) // [0, 1, 2, 3, 4, 5]
```

#### Inversión del orden del array

reverse: invierte el orden de un array

```js
const numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers) // [5, 4, 3, 2, 1]

numbers.reverse(); // -> vuelve a invertir
console.log(numbers) // [1, 2, 3, 4, 5]
```

#### Ordenar elementos en array

sort: organiza los elementos de la matriz en orden ascendente. Sort toma una función de devolución de llamada, veremos cómo usamos ordenar con una función de devolución de llamada en las próximas secciones.

```js
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

webTechs.sort()
console.log(webTechs)  // ['CSS', 'HTML', 'JavaScript', 'MongoDB', 'Node', 'React', 'Redux']

webTechs.reverse() // después de ordenar podemos invertirlo
console.log(webTechs) // ['Redux', 'React', 'Node', 'MongoDB', 'JavaScript', 'HTML', 'CSS']
```

### Array de arrays

Un array puede almacenar diferentes tipos de datos incluyendo un array en sí. Creemos un array de arrays

```js
const firstNums = [1, 2, 3];
const secondNums = [7, 8, 9];

const arrayOfArray = [[1, 2, 3], [1, 2, 3]]
console.log(arrayOfArray[0]) // [1, 2, 3]

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = [frontEnd, backEnd]
console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
console.log(fullStack.length)  // 2
console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]
```

