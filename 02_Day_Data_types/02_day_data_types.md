# 30 Days of Javascript: Data Types
# Día 2
## Tipos de datos
Los datos o valores tienen tipos de datos. Los tipos de datos describen las características de los datos. Data types pueden ser dividos en dos:
1. Tipos de datos primitivos
2. Tipos de datos no-primitivos(Referencias de Objetos)
### Tipos de datos primitivos
Los tipos de datos primitivos incluyen:
1. Números - Enteros, decimales
2. Strings - Cualquier dato en comillas o backtips
3. Booleanos - true o false
4. Null - valor vacío o sin valor
5. Undefined - una variable declarada sin valor
6. Symbol - Un único valor que puede ser generado por el constructor Symbol

Los tipos de datos no-primitivos en Javascript incluyen:
1. Objetos
2. Arrays

Ahora veremos qué exactamente significan estos tipos de datos. Los tipos de datos _Primitivos_ son inmutables(no modificables). Una vez que se crea un dato primitivo no lo podemos modificar

**Ejemplo**
```js
let word = 'Javascript'
```
Si queremos modificar el string guardado en la variable _word_, Javascript debería generar un error. Cualquier tipo de datos en comillas simples, dobles o backtips es un tipo de dato string.
```js
word[0] = 'Y'
```
Esta expresión no cambia el string almacenado en la variable _word_. Entonces los strings son inmutables, no modificables. Los tipos de datos primitivos se comparan con sus valores. Vamos a evaluar diferentes tipos de datos. Veamos el ejemplo de abajo:
```js
let numOne = 3;
let numTwo = 3;
console.log(numOne == numTwo)    //true

let js = 'Javascriipt';
let py = 'Python';
console.log(js == py) // false

let lightOn = true;
let lightOff = false;
console.log(lightOn == lightOff) //false
```
### Tipos de datos no-primitivos
Los tipos de datos no-primitivos son mutables o modificables. Podemos modificarlo después de haberlo creado. Vamos a verlo creando un array. Los arrays pueden contener el mismo o diferentes tips de datos. Los valores del array están referenciados por su índice. En Js los arrays comienzan con el índice cero, el segundo elemento es el índice uno, el tercer elemento es dos, etc.
```js
let nums = [1, 2, 3];
nums[0] = 10;
console.log(nums); // [10, 2, 3]
```
Como se puede ver, un array, que es un tipo de dato no-primitivo, es mutable. Los no-primitivos no pueden ser comparados por su valor. Aún si dos tipos de datos no-primitivos tienen las mismas propiedades y valores, ellos no son estrictamente iguales.
```js
let nums = [1, 2, 3];
let numbers = [1, 2, 3]
console.log(num == numbers); // false

let userOne = {
    name:'David',
    role: 'teaching',
    country:'Paraguay'
}

let userTwo = {
    name:'David',
    role:'teaching',
    country:'Paraguay'
}

console.log(userOne == userTwo) // false
```
Regla de oro, no comparamos tipos de datos no-primitivos. No compares arrays, funciones o objetos. Los valores no primitivos se denominan tipos de referencia, porque se comparan por referencia en lugar de valor. Dos objetos solo son estrictamente iguales si se refieren al mismo objeto subyacente.
```js
let nums = [1, 2, 3];
let numbers = nums;
console.log(nums == numbers) // true

let userOne = {
    name:'David',
    role:'teaching',
    country:'Paraguay'
}
let userTwo = userOne;
console.log(userOne == userTwo); //true
```
## Números
Los números son valores enteros y decimales los cuales pueden hacer todas las operaciones aritméticas. Veamos algunos ejemplos de números.
### Declaración de tipos de datos numéricos
```js
let age = 35
const gravity = 9.81  // we use const for non-changing values, gravitational constant in  m/s2
let mass = 72         // mass in Kilogram
const PI = 3.14       // pi a geometrical constant

// More Examples
const boilingPoint = 100 // temperature in oC, boiling point of water which is a constant
const bodyTemp = 37      // oC average human body temperature, which is a constant

console.log(age, gravity, mass, PI, boilingPoint, bodyTemp)
```
### Objeto Math
En Javascript el Objeto Math proporciona muchos métodos para trabajar con números.
