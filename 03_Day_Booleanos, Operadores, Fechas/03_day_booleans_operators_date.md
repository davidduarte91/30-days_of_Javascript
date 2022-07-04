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