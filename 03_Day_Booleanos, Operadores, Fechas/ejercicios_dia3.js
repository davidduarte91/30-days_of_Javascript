// 1. Declare las variables firstName, lastName, country, city, age, isMarried, year. Asígnele un valor y use el operador typeof para verificar diferentes tipos de datos.
/*
let firstName = 'David';
let lastName = 'Duarte';
let country = 'Paraguay';
let city = 'Asunción';
let age = 30;
let isMarried = true;
let year = 2022;
*/

// console.log(`${typeof firstName}, ${typeof lastName}, ${typeof country}, ${typeof city}, ${typeof age}, ${typeof isMarried}, ${typeof year}`)

// 2. Comprueba si el tipo de '10' es igual a 10
// console.log(typeof '10' === typeof 10)

// 3. Comprueba si parseInt('9.8') es igual a 10
// console.log(parseInt('9.8') == 10)

// 4. El valor booleano es verdadero o falso.
    // i. Escriba tres declaraciones de JavaScript que proporcionen un valor verdadero.
    // ii. Escriba tres declaraciones de JavaScript que proporcionen un valor falso.
/*
    let isOn = true;
let num = 58;
let compara = 4 > 3

let cero = 0;
let empty = null;
let str = "";
*/

// 5. Calcule primero el resultado de la siguiente expresión de comparación sin usar console.log(). Después de decidir el resultado, confírmelo usando console.log()
/*
console.log(4 > 3)  // true
console.log(4 >= 3) // true
console.log(4 < 3) // false
console.log(4 <= 3) // false
console.log(4 == 4) // true
console.log(4 === 4) // true
console.log(4 != 4) // false
console.log(4 !== 4) // false
console.log(4 != '4') // false
console.log(4 == '4') // true
console.log(4 === '4') // false
console.log('python'.length != 'jargon'.length)
*/

// 6. Calcule primero el resultado de las siguientes expresiones sin usar console.log(). Después de decidir el resultado, confírmelo usando console.log()
/*
console.log(4 > 3 && 10 < 12) // true
console.log(4 > 3 && 10 > 12) // false
console.log(4 > 3 || 10 < 12) // true
console.log(4 > 3 || 10 > 12) // true
console.log(!(4 > 3)) // false
console.log(!(4 < 3)) // true
console.log(!(false)) // true
console.log(!(4 > 3 && 10 < 12)) // false
console.log(!(4 > 3 && 10 > 12)) // true
console.log(!(4 === '4')) // true
let python = 'on'; dragon = 'on'
console.log(`${!python} and ${!dragon}`)
*/

// 7. Usa el objeto Date para hacer las siguientes actividades
/*
const now = new Date();
// ¿En qué año estamos?
let yearNow = now.getFullYear();
console.log(yearNow)
// ¿Cuál es el número del mes hoy?
let month = now.getMonth() + 1;
console.log(month)
// ¿Cual es la fecha de hoy?
let date = now.getDate();
console.log(date)
// ¿Qué día es hoy como número?
let day = now.getDay();
console.log(day)
// ¿Qué hora es ahora?
let hour = now.getHours();
console.log(hour)
// ¿Cuáles son los minutos ahora?
let minutes = now.getMinutes();
console.log(minutes)
// Averigüe el número de segundos transcurridos desde el 1 de enero de 1970 hasta ahora.
let time = now.getTime()
console.log(time)
*/

// EJERCICIOS - NIVEL 2
// 1. Escriba un script que solicite al usuario que ingrese la base y la altura del triángulo y calcule el área de un triángulo (área = 0,5 x b x h).
/*
let base, altura, area;
base = parseFloat(prompt('Ingrese la base'));
altura = parseFloat(prompt('Ingrese la altura'));
area = 0.5 * base * altura;
alert(`el área del triángulo es ${area}`);
console.log(`el área del triángulo es ${area}`)
*/

// 2. Escriba un script que solicite al usuario que ingrese el lado a, el lado b y el lado c del triángulo y calcule el perímetro del triángulo (perímetro = a + b + c)
/*
let ladoA, ladoB, ladoC, perimetro, titulo;
titulo = 'Perímetro de un triángulo\n\n'
ladoA = parseFloat(prompt('Ingrese el lado a'));
ladoB = parseFloat(prompt('Ingrese el lado b'));
ladoC = parseFloat(prompt('Ingrese el lado c'));
perimetro = ladoA + ladoB + ladoC;
alert(`${titulo} El área del triángulo es: ${perimetro}`)
*/

// Obtenga el largo y el ancho usando el prompt y calcule el área del rectángulo (área = largo x ancho) y el perímetro del rectángulo (perímetro = 2 x (largo + ancho))
/*
let largo, ancho, area, perimetro;
largo = parseFloat(prompt('Ingrese el largo del rectángulo'));
ancho = parseFloat(prompt('Ingrese el ancho del rectángulo'));
perimetro = 2 * (largo + ancho);
area = largo * ancho;
alert(`El périmetro es ${perimetro} y el área es ${area}`)
*/

// Obtenga el radio usando el prompt y calcule el área de un círculo (área = pi x r x r) y la circunferencia de un círculo (c = 2 x pi x r) donde pi = 3.14.
/*
let radio, area, circunferencia;
const PI = 3.14;
radio = parseFloat(prompt('Ingrese el radio del círculo'));
area = PI * radio * radio;
circunferencia = 2 * PI * radio;
alert(`El área es ${area} y la circunferencia es ${circunferencia}`)
*/

// Calcule la pendiente, la intersección x y la intersección y de y = 2x -2
/*
let pendiente, x1, x2, y1, y2, deltaX, deltaY;
x1 = parseFloat(prompt('Ingrese el x1'));
y1 = 2*x1 - 2;
x2 = parseFloat(prompt('Ingrese el x2'));
y2 = 2*x2 - 2;
deltaY = y2 - y1;
deltaX = x2 - x1;
pendiente = (y2 - y1) / (x2-x1)
console.log(`(${x1},${y1}), (${x2},${y2}), La pendiente es: ${pendiente}, ${deltaY}/${deltaX}`)
*/

// La pendiente es m = (y2-y1)/(x2-x1). Encuentra la pendiente entre el punto (2, 2) y el punto (6,10)
/*
let m = (10 - 2) / (6 - 2);
console.log(m)
*/

// Calcula el valor de y (y = x2 + 6x + 9). Trate de usar diferentes valores de x y averigüe en qué valor de x, y es 0.
/*
let x, y;
while (y != 0) {
    x = parseInt(prompt('Ingrese un número entero'))
    y = x * x + 6 * x + 9
}
console.log(`El valor de x que hace que y = 0 es ${x}`)
*/

// Escriba un script que solicite al usuario que ingrese las horas y la tarifa por hora. ¿Calcular el salario de la persona?
/*
let hours, rate, pay;
hours = parseFloat(prompt('Ingrese la cantidad de horas'));
rate = parseFloat(prompt('Ingrese la tarifa por hora'));
pay = hours * rate;
console.log(`Horas: ${hours}, tarifa x hora: ${rate}. El pago es de: ${pay}`)
*/

// Si la longitud de su nombre es mayor que 7, diga que su nombre es largo; de lo contrario, diga que su nombre es corto.
/*
let nombre, largo;
nombre = prompt('Ingrese su nombre');
largo = nombre.length;
if (largo < 7) {
    console.log(`Su nombre tiene ${largo} letras y es corto`)
} else {
    console.log(`Su nombre tiene ${largo} letras y es largo`)
}
*/

// Compare la longitud de su nombre y la longitud de su apellido y debería obtener este resultado.
/*let nombre, apellido, largo;
nombre = prompt('Ingrese su nombre');
apellido = prompt('Ingrese su apellido');
if (nombre.length > apellido.length) {
    console.log(`Tu primer nombre, ${nombre} es más largo que tu apellido, ${apellido}`)
} else {
    console.log(`Tu primer nombre, ${nombre} es más corto que tu apellido, ${apellido}`)
}
*/

// 12. Declare dos variables miEdad y suEdad y asígneles valores iniciales y miEdad y suEdad.
/*
let miEdad = 24; let suEdad = 65;
let diferencia = miEdad - suEdad;
if(diferencia > 0) {console.log(`Yo soy ${diferencia} años más grande que vos`)}
else {console.log(`Vos sos ${suEdad - miEdad} años más grande que yo`)}
*/

// Con el prompt, obtenga el año en que nació el usuario y, si el usuario tiene 18 años o más, permita que el usuario conduzca, si no dígale que espere una cierta cantidad de años.
/*
let edad, espere, añoActual, añoNac;
const now = new Date();
añoActual = now.getFullYear();
añoNac = parseInt(prompt('Ingrese el año de su nacimiento'));
edad = añoActual - añoNac;
if (edad >= 18) {
    console.log('Puede conducir')
} else {
    espere = 18 - edad;
    console.log(`Espere ${espere} años para conducir`)
}
*/

// Escriba un script que solicite al usuario que ingrese el número de años. Calcular el número de segundos que puede vivir una persona.
/*
let years, result;
years = parseInt(prompt('Ingrese los años de vida'));
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;
result = year * years;
console.log(result)
*/

// Ejercicio Youtube: Mostrar la fecha y hora en el siguiente formato Día HH AM/PM : MM : SS
/*
let hoy = new Date();
let días = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

let numeroDiaSemana = hoy.getDay();
console.log(`Hoy es: ${días[numeroDiaSemana]}\n`)

let horas = hoy.getHours();
let minutos = hoy.getMinutes();
let segundos = hoy.getSeconds();

let jornada = horas >= 12 ? 'PM' : 'AM'; // se pueden definir variables con condicionales dentro

minutos = ('o' + minutos).slice(-2) // a esta cadena de texto se le hace un rebanado de derecha a izquierda. Para que muestre los dos últimos caracteres
segundos = ('o' + segundos).slice(-2)

console.log(`${horas % 12} ${jornada} : ${minutos} : ${segundos}`) // el módulo por 12 sirve para el formato de 12 hs
*/

// Cree un formato de hora legible por humanos usando el objeto de fecha y hora

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const day = now.getDate();
const hour = now.getHours();
let minute = now.getMinutes();
let seconds = now.getSeconds();

minute = ('0' + minute).slice(-2);
seconds = ('0' + seconds).slice(-2);

console.log(`${year}-${month}-${day} ${hour % 12}:${minute}:${seconds}`)
console.log(`${day}-${month}-${year} ${hour % 12}:${minute}:${seconds}`)
console.log(`${day}/${month}/${year} ${hour % 12}:${minute}:${seconds}`)
