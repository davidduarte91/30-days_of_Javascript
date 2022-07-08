/*
const PI = 3.14;
let radius = 100    // longitud en metros

// Vamos a calcular el área de un círculo
const areaOfCircle = PI * radius * radius;
console.log(areaOfCircle)   // 314 m

const gravity = 9.81;
let mass = 72;

// Calculemos el peso de un objeto.
const weight = mass * gravity
console.log(weight)        // 706.32 N(Newton)

const puntoEbullicion = 100;    // temperatura en °C, punto de ebullición del agua
const bodyTemp = 37;    // temperatura corporal en °C

// Concatenación de cadenas con números mediante interpolación de cadenas
console.log(`El punto de ebullición del agua es ${puntoEbullicion} °C.\nLa temperatura del ser humano es ${bodyTemp} °C.\nLa gravedad de la tierra es ${gravity} m/s2`)
*/
//--------------------------------------------------------
/*
console.log(3 > 2)  // true
console.log(3 >= 2) // true
console.log(3 < 2)  // false
console.log(2 < 3)  // true
console.log(2 <= 3) //true
console.log(3 == 2) // false
console.log(3 != 2) //true
console.log(3 == '3')  //true, compara solo el valor
console.log(3 === '3')  //false, compara valor y tipo de dato
console.log(3 !== '3')  // true, compara valor y tipo de dato
console.log(3 != 3) // false, compara solo valor
console.log(3 !== 3)  // false, compara valor y tipo de dato
console.log(0 == false) //  true, son equivalentes
console.log(0 === false) // false, no son exactamente iguales
console.log(0 == '')    // true, equivalentes
console.log(0 == ' ')   // true, equivalentes
console.log(0 === '')   // false, no son exactamente iguales
console.log(1 == true)  // true, son equivalentes
console.log(1 === true) // false, no son exactamente iguales
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN) // false, no son iguales
console.log(NaN === NaN) // false
console.log(typeof NaN)  // number (número)

console.log('mango'.length == 'avocado'.length) // false
console.log('mango'.length != 'avocado'.length) // true
console.log('mango'.length < 'avocado'.length)  // true
console.log('milk'.length == 'meat'.length) // true
console.log('milk'.length != 'meat'.length) // false
console.log('tomato'.length == 'potato'.length) // true
console.log('python'.length > 'dragon'.length)  // false
*/
// ------------------------------------------------
/*
let count = 0
console.log(++count)    // 1
console.log(count)      // 1

let count1 = 0;
console.log(count1++);
console.log(count1)
*/

// ---------------------------------------------------
/*
let isRaining = true;
isRaining   // condición
    ? console.log('Necesitás un impermeable.')  // if
    : console.log('No necesitas un impermeable.')   // else

isRaining = false
    ? console.log('Necesitás un impermeable.')
    : console.log('No necesitás un impermeable')


let number = 5;
number > 0 ? console.log(`${number} es un número positivo`) : console.log(`${number} es un número negativo`)

number = -5
number > 0 ? console.log(`${number} es un número positivo`) : console.log(`${number} es un número negativo`)
*/

// -----------------------------------

// alert('Bienvenidos al curso de Javascript')
/*
let number = prompt('Ingresar número', 'el número va aquí')
console.log(number)
*/

/*
const agree = confirm('¿Estás seguro de querer borrarlo?')
console.log(agree)
*/

const now = new Date();
console.log(now)

console.log(now.getFullYear())

console.log(now.getMonth())

console.log(now.getDate())

console.log(now.getDay())

console.log(now.getHours())

console.log(now.getMinutes())

console.log(now.getSeconds())
