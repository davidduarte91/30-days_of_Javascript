# Día 4
## Condicionales
Las declaraciones condicionales se utilizan para tomar decisiones basadas en diferentes condiciones. De forma predeterminada, las declaraciones en el script de JavaScript se ejecutan secuencialmente de arriba a abajo. Si la lógica de procesamiento lo requiere, el flujo secuencial de ejecución se puede alterar de dos formas:
- Ejecución condicional: un bloque de una o más sentencias se ejecutará si cierta expresión es verdadera
- Ejecución repetetitiva: un bloque de una o más declaraciones se ejecutará repetitivamente siempre que cierta expresión sea verdadera. En esta sección, cubriremos las declaraciones if, else y else if. Los operadores lógicos y de comparación que aprendimos en las secciones anteriores serán útiles aquí.
Las condiciones se pueden implementar de las siguientes maneras:
- if
- if else
- if else if else
- switch
- operador ternario

### If
En JavaScript y otros lenguajes de programación, la palabra clave _if_ se usa para verificar si una condición es verdadera y ejecutar el código de bloque. Para crear una condición if, necesitamos la palabra clave if, la condición dentro de un paréntesis y un bloque de código dentro de una llave ({}).
```js
// sintaxis
if (condition) {
    // esta parte del código se ejecuta para la condición de verdad
}
```
**Ejemplo**
```js
let num = 3;
if (num > 0) {
    console.log(`${num} es un número positivo`)
}
// 3 es un número positivo
```
Como puede ver en el ejemplo de condición anterior, 3 es mayor que 0, por lo que es un número positivo. La condición era verdadera y se ejecutó el bloque de código. Sin embargo, si la condición es falsa, no veremos ningún resultado.
```js
let isRaining = true;
if (isRaining0) {
    console.log('Recordá tomar tu abrigo')
}
```
Lo mismo ocurre con la segunda condición, si isRaining es falso, el bloque if no se ejecutará y no veremos ninguna salida. Para ver el resultado de una condición falsa, debemos tener otro bloque, que va a ser _else_.

### If Else
Si la condición es verdadera, el primer bloque se ejecutará, sino se ejecutará la otra condición.
```js
// sintaxis
if (condition) {
    // esta parte del código correrá para la condición verdadera
} else {
    // esta parte correrá para la condición falsa
}
```
```js
let num = 3;
if (num > 0) {
    console.log(`${num} es un número positivo`)
} else {
    console.log(`${num} es un número negativo`)
}
// 3 es un número positivo

num = -3;
if (num > 0) {
    console.log(`${num} es un número positivo`)
} else {
    console.log(`${num} es un número negativo`)
}
// -3 es un número negativo
```
```js
let isRaining = true;
if (isRaining) {
    console.log('Necesitás un impermeable')
} else {
    console.log('No necesitás un impermeable')
}
// Necesitás un impermeable

isRaining = false;
if (isRaining) {
    console.log('Necesitás un impermeable')
} else {
    console.log('No necesitás un impermeable')
}
// No necesitás un impermeable
```
La última condición es falsa, por lo que se ejecutó el bloque else. ¿Qué pasa si tenemos más de dos condiciones? En ese caso, usaríamos condiciones else if.

### If Else if Else
En nuestra vida diaria, tomamos decisiones a diario. Tomamos decisiones no comprobando una o dos condiciones, sino que tomamos decisiones basadas en múltiples condiciones. Al igual que nuestra vida diaria, la programación también está llena de condiciones. Usamos else if cuando tenemos múltiples condiciones.
```js
if (condition) {
    // code
} else if (condition) {
    //code
} else {
    // code

}
```
**Ejemplo**
```js
let a = 0;
if (a > 0) {
    console.log(`${a} es un número positivo`)
} else if (a < 0) {
    console.log(`${a} es un número negativo`)
} else if (a == 0) {
    console.log(`${a} es cero`)
} else {
    console.log(`${a} no es un número`)
}
```
```js
// if else if else
let weather = 'sunny';
if (weather === 'rainy') {
    console.log('Necesitás un impermeable')
} else if (weather === 'cloudy') {
    console.log('Puede que haga frío, necesitás un abrigo')
} else if (weather === 'sunny') {
    console.log('Andate libremente')
} else {
    console.log('No necesitas impermeable')
}
```

### Switch
Switch es una alternativa para if else **if else else**. La declaración de cambio comienza con una palabra clave de switch seguida de un paréntesis y un bloque de código. Dentro del bloque de código tendremos diferentes casos. El bloque de casos se ejecuta si el valor en el paréntesis de la declaración de cambio coincide con el valor del caso. La declaración de interrupción es para terminar la ejecución para que la ejecución del código no se detenga después de que se cumpla la condición. El bloque predeterminado se ejecuta si todos los casos no cumplen la condición.
```js
switch(caseValue){
    case 1:
        // code
        break;
    case 2:
        // code
        break;
    case 3:
        // code
        break;
    default:
        // code
}
```
```js
let weather = 'cloudy';
switch (weather) {
    case 'rainy':
        console.log('Necesitás un impermeable')
        break;
    case 'cloudy':
        console.log('Puede que haga frío, necesitás un abrigo')
        break;
    case 'sunny':
        console.log('Salí libremente')
        break;
    default:
        console.log('No necesitás un impermeable')
}

// Más ejemplos de Switch
let dayUserInput = prompt('What day is today?');
let day = dayUserInput.toLowerCase();

switch (day) {
    case 'monday':
        console.log('Today is Monday')
        break;
    case 'tuesday':
        console.log('Today is Tuesday')
        break;
    case 'wednesday':
        console.log('Today is Wednesday')
        break;
    case 'thurday':
        console.log('Today is Thursday')
        break;
    case 'friday':
        console.log('Today is Friday')
        break;
    case 'saturday':
        console.log('Today is Saturday')
        break;
    case 'sunday':
        console.log('Today is Sunday')
        break;
    default:
        console.log('No es un día de la semana')
}
```
// Ejemplos usando condiciones en los casos. En los casos donde hay comparaciones, se debe usar el true como caso a evaluar.
```js
let num = prompt('Ingresa un número');
switch (true) {
    case num > 0:
        console.log('El número es positivo');
        break;
    case num == 0:
        console.log('El número es cero');
        break;
    case num < 0:
        console.log('El número es negativo');
        break;
    default:
        console.log('El valor ingresado no es un número');
}
```
### Operadores ternarios
Otra forma de escribir condicionales es usando operadores ternarios. Hemos cubierto esto en otras secciones, pero también deberíamos mencionarlo aquí.
```js
let isRaining = true;
isRaining
    ? console.log('Necesitas un impermeable')
    : console.log('No necesitas un impermeable')
```
**Para comprobar si lo ingresado es un número**
```js
console.log(isNaN('195')) // false, porque sí es un número
console.log(isNaN('boo'))   // true
console.log(isNaN('100px')) // true
```
**Otra manera de escribir if else**
```js
if (a > b) console.log('a es mayor que b'); else console.log('a es menor que b');
```