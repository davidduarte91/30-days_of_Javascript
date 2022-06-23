## 30 Days of Javascript: Introduction
##### Console.log
Para nuestro primero código de js usamos la función console.log. Le pasamos un argumento, y la función muestra en pantalla la salida
```javascript
console.log("Hello, World!");
```
##### Console.log con múltiples argumentos
**console.log** puede tomar múltiples argumentos separados por comas. La sintaxis es similar a **`console.log(param1, param2, param3)`**
```javascript
console.log('Hello', 'World', '!');
console.log('HAPPY'. 'NEW', 'YEAR', 2020);
console.log('Welcome'. 'to', 30, 'Days', 'Of'. 'JavaScript');
```
##### Comentarios
**Ejemplo: Single line comment**
```javascript
// This is the first comment
// This is the second comment
// I am a single line comment
```
**Ejemplo: multiline comment**
```javascript
/* This is a multiline comment
    Multiline comments can take multiple lines
    Javascript is the languaje of the web */
```
Se pueden usar comillas simples, dobles o backtips
```javascript
console.log('Hello, World!')
console.log("Hello, World!")
console.log(`Hello, World!`)
```
#### Aritméticas
```js
console.log(2 + 3) // Addition
console.log(3 - 2) // Subtraction
console.log(2 * 3) // Multiplication
console.log(3 / 2) // Division
console.log(3 % 2) // Modulus - finding remainder
console.log(3 ** 2) // Exponentiation 3 ** 2 == 3 * 3
```
## Agregando Javascript a una página web
Puede ser agregado en tres maneras diferentes
- **_Inline script_**
- **_Internal script_**
- **_External script_**
- **_Multiple External scripts_**
### Inline Script
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>30DaysOfScript:Inline Script</title>
  </head>
  <body>
    <button onclick="alert('Welcome to 30DaysOfJavaScript!')">Click Me</button> <!-- Usando la función incorporada alert() -->
  </body>
</html>
```
### Internal Script
El internal script puede ser escrito en el `head` o en el `body`, pero es preferible colocarlo en el body del html. Primero muestra cómo se escribe en la parte del head
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>30DaysOfScript:Internal Script</title>
    <script>
      console.log('Welcome to 30DaysOfJavaScript')
    </script>
  </head>
  <body></body>
</html>
```
Ahora muestra cómo se escribe la mayoría de las veces y es la más preferida, en el body
### External Script
Similar al internal script, el external script puede ir en el head o en el body, pero es preferible colocarlo en el body. Primero creamos un archivo externo con la extensión .js. Todos los archivos con la terminación .js son archivos javascript. Creamos un archivo llamado introduction.js y escribimos el siguiente códido en ese archivo y luego enlazamos desde el html
```js
console.log("Welcome to 30DaysOfJavascript");
```
External scripts in the _head:_
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>30DaysOfJavaScript:External script</title>
    <script src="introduction.js"></script>
  </head>
  <body></body>
</html>
```
External scripts en el _body:_
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>30DaysOfJavaScript:External script</title>
  </head>
  <body>
    <!-- JavaScript external link could be in the header or in the body --> 
    <!-- Before the closing tag of the body is the recommended place to put the external JavaScript script -->
    <script src="introduction.js"></script>
  </body>
</html>
```
Y si miro en la consola del navegador, podré ver el output del `console.log`
### Multiple External Scripts
A una página web se le pueden añadir múltiples archivos javascript externos. Creo un archivo `helloworld.js` y escribo el siguiente código
```js
console.log("Hello World");
```
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Multiple External Scripts</title>
  </head>
  <body>
    <script src="./helloworld.js"></script>
    <script src="./introduction.js"></script>
  </body>
</html>
```
El archivo `.js` principal debe seguir estando abajo de todos los demás. No olvidar esto

## Introducción a tipo de datos
En todos los lenguajes hay diferentes tipos de datos. Los siguientes son tipos de datos primitivos: _String, Number, Boolean, undefined, Null and Symbol._
### Numbers
- Enteros: números enteros (negativos, cero y positivo). Ejemplo: -3, -2, -1, 0, 1, 2, 3 ...
- Números decimales (float-point numbers): -3.5, -2.25, -1.0, 0.0, 1.1, 2.2, 3.5 ...
### Strings
Una colección de uno o mas caracteres entre dos comillas simples, comillas dobles o backtips.
**Ejemplo**
```js
'a'
'David'
"David"
'Finlandia'
'Javascript is a beatiful programming language'
`Se puede además crear strings usando backtips`
```
### Booleans
Un booleano es True o False. Cualquie comparación devuelve un valor booleano, que es verdadero o falso
**Ejemplo**
```js
true // if the light is on, the value is true
false // if the light is off, the value is false
```
### Undefined
En Js si no asiganamos el valor a una variable, el valor es undefined. Además de eso, si una función no devuelve nada, este retorna undefined.
```js
let firstName;
console.log(firstName); // undefined, porque todavía no se le asignó nigún valor
```
### Null
Null en Javascript significa un valor vacío
```js
let emptyValue = null;
```

## Chequeando tipos de datos
Para comprobar el tipo de dato de una determinada variable, usamos el operados **typeof**. Vemos los siguientes ejemplos.
```js
console.log(typeof 'David'); // string
console.log(typeof 5); // number
console.log(typeof true); // boolean
console.log(typeof null); // object
console.log(typeof undefined); // undefined
```
## Variables
Las variables son contenedores de data. Son usados para almacenar datos en un lugar de la memoria. Para declarar variables usamos _var, let,_ o _const_ keywords.

Para una variable que cambia en un momento diferente, usamos _let_. Si el dato no cambia usamos _const_. Por ejemplo PI, nombre de un país, gravedad son valores que no cambian. No vamos a usar var y no lo recomiendo. Es una forma propensa a errores de declarar una variable que tiene muchas fugas. De eso se hablará más adelante con el tema del scope