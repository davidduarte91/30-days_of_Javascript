## Día 3
### Booleanos
Un tipo de dato booleano representa uno de los dos valores: _true_ o _false_. El valor booleano es true o false. El uso de estos tipos de datos quedará claro cuando inicie el operador de comparación. Cualquier comparación devuelve un valor booleano que es verdadero o falso.
**Ejemplo: Valores booleanos**
```js
let lightIsOn = true;
let isRaining = false;
let isHungry = false;
let isMarried = true;
let truValue = 4 > 3;  // true
let falseValue = 4 < 3;  // false
```
#### Valores verdaderos
- Todos los números (positivos y negativos) son verdaderos excepto cero.
- Todas las cadenas son verdaderas excepto una cadena vacía ('')
- El booleano verdadero
#### Valores falsos
- 0
- 0n
- null
- undefined
- NaN
- El booleano false
- '', "", ``, cadena vacía
Es bueno recordar esos valores verdaderos y esos valores falsos. En una sección posterior, los usaremos con condiciones para tomar decisiones.
### Undefined
Si declaramos una variable y no le asignamos un valor, el valor será undefined. Además de esto, si una función no devuelve el valor, no estará definida.
```js
let firstName;
console.log(firstName)  // no definido, porque no se le asignó ningún valor todavía
```
### Null
```js
let empty = null;
console.log(empty)  // -> , significa sin valor
```
### Operadores
#### Operadores de asignación
Un signo igual en JavaScript es un operador de asignación. Se utiliza para asignar una variable.
```js
let firstName = 'David'
let country = 'Paraguay'
```
Operadores de asignación
![Operadores de asignación](../images/assignment_operators.png)

#### Operadores aritméticos
Los operadores aritméticos son operadores matemáticos.
- Adición(+): a + b
- Sustracción(-): a - b
- Multiplicación(*): a * b
- División(/): a / b
- Módulo(%): a % b
- Exponencial: a ** b
```js
let numOne = 4;
let numberTwo = 3;
let sum = numOne + numTwo;
let diff = numOne - numTwo;
let mult = numOne * numTwo
let div = numOne / numTwo
let resto = numOne % numTwo
let potencia = numOne ** numTwo

console.log(sum, diff, mult, div, resto, potencia) // 7,1,12,1.33,1, 64
```
```js
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
```
#### Operadores de comparación
En programación comparamos valores, usamos operadores de comparación para comparar dos valores. Comprobamos si un valor es mayor o menor o igual a otro valor.
![Comparision Operators](../images/comparison_operators.png)
```js
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
```
Trate de entender las comparaciones anteriores con algo de lógica. Recordar sin ninguna lógica puede ser difícil. JavaScript es de alguna manera un tipo de lenguaje de programación cableado. El código JavaScript se ejecuta y le da un resultado, pero a menos que sea bueno en él, puede que no sea el resultado deseado.

Como regla general, si un valor no es verdadero con ==, no será igual a ===. Usar === es más seguro que usar ==. El siguiente [enlace](https://dorey.github.io/JavaScript-Equality-Table/) tiene una lista exhaustiva de comparación de tipos de datos.

### Operadores lógicos
Los siguientes símbolos son los operadores lógicos comunes: &&(ampersand), ||(tubería) y !(negación). El operador && (y) se vuelve verdadero solo si los dos operandos son verdaderos. El operador || (o) se vuelve verdadero si cualquiera de los operandos es verdadero. Los operador ! niega verdadero a falso y falso a verdadero.
```js
// && ejemplo con operador ampersand

const check = 4 > 3 && 10 > 5   // true && true -> true
const check1 = 4 > 3 && 10 < 5  // true && false -> false
const check2 = 4 < 3 && 10 < 5  // false && false -> false

// || ejemplo 

const check = 4 > 3 || 10 > 5   // true || true -> true
const check = 4 > 3 || 10 < 5   // true || false -> true
const check = 4 < 3 || 10 < 5   // false || false -> false

// ! Ejemplo de negación

let check = 4 > 3   // true
let check = !(4 > 3)    // false
let isLightOn = true
let isLightOff = !isLightOn // false
let isMarried = !false  // true
```
### Operador de incremento
En JavaScript usamos el operador de incremento para aumentar un valor almacenado en una variable. El incremento podría ser antes o después del incremento. Veamos cada uno de ellos:
1. Pre-incremento
```js
let count = 0
console.log(++count)    // 1
console.log(count)      // 1
```
2. Post-incremento
```js
let count = 0
console.log(count++)    // 0
console.log(count)      // 1
```
Usamos la mayor parte del tiempo post-incremento. Al menos debe recordar cómo usar el operador de incremento posterior.

### Operador de decremento
En JavaScript usamos el operador de decremento para disminuir un valor almacenado en una variable. El decremento puede ser previo o posterior al decremento. Veamos cada uno de ellos:
1. Pre-decremento
```js
let count = 0
console.log(--count)    // -1
console.log(count)      // -1
```
2. Post-decremento
```js
let count = 0
console.log(count--)    // 0
console.log(count)      // -1
```
### Operadores ternarios
El operador ternario permite escribir una condición (es una manera de usar if else en una sola línea). Otra forma de escribir condicionales es usando operadores ternarios. Mira los siguientes ejemplos:
```js
let isRaining = true;
isRaining   // condición
    ? console.log('Necesitás un impermeable.')  // if
    : console.log('No necesitas un impermeable.')   // else

isRaining = false
    ? console.log('Necesitás un impermeable.')
    : console.log('No necesitás un impermeable')
```
```sh
Necesitás un impermeable
No necesitás un impermeable
```
```js
let number = 5;
number > 0 ? console.log(`${number} es un número positivo`) : console.log(`${number} es un número negativo`)

number = -5
number > 0 ? console.log(`${number} es un número positivo`) : console.log(`${number} es un número negativo`)
```
```sh
5 es un número positivo
-5 es un número negativo
```
### Precedencia de operadores
Me gustaría recomendarle que lea sobre la precedencia del operador desde este [enlace](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

## Métodos de Window
### Método alert() window
Como viste al principio, el método alert() muestra un cuadro de alerta con un mensaje específico y un botón Aceptar. Es un método incorporado y toma un argumento.
```js
alert(message)
```
```js
alert('Bienvenido a 30DaysOfJavaScript)
```
No uses demasiadas alertas porque es destructiva y molesta, úsala solo para tests.

### Método prompt() window
Los métodos de solicitud de ventana muestran un cuadro de solicitud con una entrada en su navegador para tomar valores de entrada y los datos de entrada se pueden almacenar en una variable. El método prompt() toma dos argumentos. El segundo argumento es opcional.
```js
prompt('required text', 'optional text')
```
```js
let number = prompt('Ingresar número', 'el número va aquí')
console.log(number)
```
### Método window confirm()
El método confirm() muestra un cuadro de diálogo con un mensaje específico, junto con un botón Aceptar y Cancelar. Un cuadro de confirmación se usa a menudo para pedir permiso a un usuario para ejecutar algo. Window confirm() toma una cadena como argumento. Al hacer clic en Aceptar se obtiene un valor verdadero, mientras que al hacer clic en el botón Cancelar se obtiene un valor falso.
```js
const agree = confirm('¿Estás seguro de querer borrarlo?')
console.log(agree)
```
Estos no son todos los métodos de ventana, tendremos una sección separada para profundizar en los métodos de ventana.

## Objeto Date (de fecha)
El tiempo es una cosa importante. Nos gusta saber la hora de una determinada actividad o evento. En JavaScript, la hora y la fecha actuales se crean utilizando el objeto Date de JavaScript. El objeto que creamos usando el objeto Date proporciona muchos métodos para trabajar con la fecha y la hora. Los métodos que usamos para obtener información de fecha y hora de los valores de un objeto de fecha comienzan con una palabra get (obtener) porque proporciona la información. getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes, getSeconds(), getMilliseconds(), getTime(), getDay().

![Date time Object](../images/date_time_object.png)

### Creación de un objeto de tiempo
Una vez que creamos el objeto de tiempo. El objeto de tiempo proporcionará información sobre el tiempo. Vamos a crear un objeto de tiempo
```js
const now = new Date();
console.log(now) // Thu Jul 07 2022 22:45:38 GMT-0300 (hora estándar de Argentina)
```
Hemos creado un objeto de tiempo y podemos acceder a cualquier información de fecha y hora del objeto utilizando los métodos de obtención que hemos mencionado en la tabla.

### Obteniendo el año completo
Extraigamos u obtengamos el año completo de un objeto de tiempo.
```js
const now = new Date()
console.log(now.getFullYear())  // 2022
```
### Obteniendo el mes
Extraigamos u obtengamos el mes de un objeto de tiempo.
```js
const now = new Date()
console.log(now.getMonth()) // 6, porque el mes es Julio, meses (0 - 11). El mes 0 es Enero
```
### Obteniendo fecha del día
Extraigamos u obtengamos la fecha del mes de un objeto de tiempo.
```js
const now = new Date()
console.log(now.getDate())  // 7, porque el día del mes es el séptimo, día(1-31)
```
### Obteniendo el día
Extraigamos u obtengamos el día de la semana de un objeto de tiempo.
```js
const now = new Date()
console.log(now.getDay()) // 4, porque el día el jueves
// Domingo es 0, Lunes es 1 y Sábado es 6
// Obteniendo el día de la semana como un número (0-6)
```
### Obteniendo las horas
Extraigamos u obtengamos las horas de un objeto de tiempo.
```js
const now = new Date()
console.log(now.getHours()) // 23, porque la hora es 23:37:00
```
### Obteniendo los minutos
Let's extract or get the minutes from a time object.
```js
const now = new Date()
console.log(now.getMinutes()) // 37, porque la hora es 23:37:00
```
### Obteniendo los segundos
Let's extract or get the seconds from a time object.
```js
const now = new Date()
console.log(now.getSeconds()) // 14, porque la hora es 23:42:14
```
