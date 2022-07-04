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
```js
const PI = Math.PI;
console.log(PI);

// Redondeo al número más cercano
// si es superior a 0,5 hacia arriba, si es inferior a 0,5 redondeo hacia abajo

console.log(Math.round(PI)) // 3 redondea valores al número más cercano

console.log(Math.round(9.81));

console.log(Math.floor(PI)); // 3 (Redondea hacia abajo)

console.log(Math.ceil(PI)); //4 (redondea hacia arriba)

console.log(Math.min(-5, 3, 20, 4, 5, 10)); // -5 (retorna el valor mínimo)

console.log(Math.max(-5, 3, 20, 4, 5, 10)); // 20 (retorna el valor máximo)

const randNum = Math.random(); // crea números aleatorios del 0 al 1
console.log(randNum);

// Vamos a crear números aleatorios del 0 al 10
const num = Math.floor(Math.random() * 11); // crea números aleatorios del 0 al 10. Multiplica por 11 porque de esa manera el máximo número aleatorio que podría generar es 10.9999 y lo redondea hacia abajo en 10
console.log(num);

// Valor absoluto
console.log(Math.abs(-10)); // 10

// Raíz cuadrada
console.log(Math.sqrt(100)); // 10
console.log(Math.sqrt(2)); // 1.4142135623730951

// Potencia
console.log(Math.pow(3, 2)); // 9 (3 elevado al cuadrado)

console.log(Math.E); // 2.718281828459045 (constante de Euler. Número irracional)

// Logaritmos
// Retorna el logaritmo natural con base E de x, Math.log(x)
console.log(Math.log(2)) // 0.6931471805599453
console.log(Math.log(10)); // 2.302585092994046

// Retorna el logaritmo natural de 2 y 10 respectivamente
console.log(Math.LN2); // 0.6931471805599453
console.log(Math.LN10); // 2.302585092994046

// Trigonometría
console.log(Math.sin(0)); // 0
console.log(Math.sin(60)); // -0.3048106211022167

console.log(Math.cos(0)); // 1
console.log(Math.cos(60)); // -0.9524129804151563
```
#### Generador de números aleatorios
El objeto Math de Javscript tiene un método random() que genera números aleatorios del 0 al 0.9999999...
```js
let randomNum = Math.random() // genera del 0 al 0.9999..
```
Ahora veamos cómo podemos generar un número aleatorio entre el 0 y el 10:
```js
let randomNum = Math.random(); // genera desde el 0 al 0.999...
let numBtnZeroAndTen = randomNum * 11

console.log(numBtnZeroAndTen); // esto da como mínimo 0 y máximo 10.9999

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen);
console.log(randomNumRoundToFloor);
```
## Strings
Los strings son textos que están dentro de comillas **simples**, **dobles** o **backtips**. Para declarar strings necesitamos un nombre de variables, operador de asignación, un valor dentro de comillas. Algunos ejemplos:
```js
let space = ' '           // an empty space string
let firstName = 'David'
let lastName = 'Duarte'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let quote = "The saying,'Seeing is Believing' is not correct in 2020."
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`
```
### Concatenación de strings
Conectar dos o más caracteres juntos se llama concatenación. Usando los strings declarados arriba:
```js
let fullName = firstName + space + lasName; // concatenación, fusionando dos cadenas juntas
console.log(fullName); // David Duarte
```
Podemos concatenar cadenas de diferentes maneras.
#### Concatenando usando el operador de suma
Contatenar con el operador de suma es una forma antigua. Esta forma de concatenar es tediosa y propensa a errores. Es bueno saber cómo concatenar de esta manera, pero recomiendo enfáticamente usar las cadenas de plantilla ES6 (explicadas más adelante).
```js
// Declarando variables de diferentes tipos de datos
let space = ' ';
let firstName = 'David';
let lastName = 'Duarte';
let country = 'Paraguay';
let city = 'Asunción';
let language = 'Javascript';
let job = 'teacher';
let age = 30;

let fullName = firstName + space + lastName;
let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country; // ES5 string addition

console.log(personInfoOne);
```
```js
David Duarte. I am 30. I live in Paraguay
```
#### Strings literales largas
Una cadena puede ser un solo carácter, un párrafo o una página. Si la longitud de la cadena es demasiado grande, no cabe en una línea. Podemos usar el carácter de barra invertida (\) al final de cada línea para indicar que la cadena continuará en la línea siguiente. Ejemplo:
```js
const paragraph = "Mi nombre es David Duarte. Vivo en Buenos Aires, Argentina. \
Soy un profesor y me encanta enseñar. Enseño HTML, CSS, Javascript, React, Redux, \
Node.js, Python, Data Analysis and D3.js para todos los que están interesados en aprender. \
En el final del 2019, he pensado en extender mi enseñanza y para alcanzar \
a una audiencia global comencé un desafío de Python desde Noviembre 2019 a Diciembre del 2019. \
Eso fue una de las más gratificantes e inspiradoras experiencias.\
Ahora, estamos en el 2020. Estoy disfrutando preparando los 30DaysOfJavascript challenge y \
espero que lo estés disfrutando también."

console.log(paragraph);
```
#### Secuencia de escapes en Strings
En JavaScript y otros lenguajes de programación \ seguido de algunos caracteres es una secuencia de escape. Veamos los caracteres de escape más comunes:
- \n: nueva linea
- \t: Tab, significa 8 espacios
- \\\\: Barra invertida
- \\': comilla simple (')
- \": comilla doble (")
```js
console.log('Espero que todo estés disfrutando de este curso.\n¿Vos lo estás disfrutando?');
console.log('Days\tTopics\tExercises');
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // para escribir barras invertidas
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')
```
Salida en consola:
```sh
Espero que todos estén disfrutando de este curso.
¿Vos los estás disfrutando?
Days  Topics  Exercises
Day 1 3 5
Day 2 3 5
Day 3 3 5
Day 4 3 5
This is a backslash  symbol (\)
In every programming language it starts with "Hello, World!"
In every programming language it starts with 'Hello, World!'
The saying 'Seeing is Believing' isn't correct in 2020
```

#### Literales de plantilla (Template Strings)
Para crear template strings usamos dos back-ticks. Podemos inyectar datos como expresiones dentro de un template strings. Para inyectar datos, encerramos la expresion con un corchete ({}) precedido por el signo $. Veamos la sintaxis debajo
```js
// Sintaxis
`String de texto literal`
`String de texto literal ${expresión}`
```
**Ejemplo 1**
```js
console.log(`La suma de 2 y 3 es 5`) // escribiendo estáticamente los datos
let a = 2;
let b = 3;
console.log(`La suma de ${a} y ${b} es ${a + b}`)
```
**Ejemplo 2**
```js
let firstName = 'David';
let lastName = 'Duarte';
let country = 'Paraguay';
let city = 'Asunción';
let language = 'Javascript';
let job = 'teacher';
let age = 250;
let fullName = firstName + space + lastName;

let personInfoTwo = `Yo soy ${fullName}. Tengo ${age} años. Vivo en el país de ${country}.`; // ES6 - Método de interpolación de strings
let personInfoThree = `Yo soy ${fullName}. Vivo en ${city}, ${country}. Soy ${job}. Yo enseño ${language}`;
console.log(personInfoTwo);
console.log(personInfoThree);
```
```sh
Yo soy David Duarte. Tengo 250 años. Vivo en el país de Paraguay.
Yo soy David Duarte. Vivo en Asunción, Paraguay. Soy teacher. Yo enseño Javascript.
```
Usando template string o el método de interpolación de string, podemos añadir interpolaciones, que puede ser un valor o alguna operación (comparación, operaciones aritméticas, operaciones ternarias)
```js
let a = 2;
let b = 3;
console.log(`${a} es mayor que ${b}: ${a > b});
```
```sh
2 es mayor que 3: false
```
### Métodos de Strings
Todo en Javascript es un objeto. Un string es un tipo de dato primitivo que significa que no se puede modificar una vez que es creado. El objeto string tiene muchos métodos de string. Hay diferentes métodos de string que nos puede ayudar a trabajar con strings:
1. _length_: El método _length_ retorna el número de caracteres en un string incluido el espacio vacío.
**Ejemplo**
```js
let js = 'Javascript';
console.log(js.length)  // 10

let firstName = 'David';
console.log(firstName.length);  // 5
```
2. Acceder a los caracteres de un string: Podemos acceder a cada carácter de una cadena utilizando su índice. En programación, el conteo comienza desde 0. El primer índice de la cadena es cero y el último índice es la longitud de la cadena menos uno.

Accedamos a diferentes caracteres en la cadena 'JavaScript'.
```js
let string = 'Javascript';
let firstLetter = string[0];

console.log(firstLetter)    // J

let seccondLetter = string[1];  // a
let thirdLetter = string[2];
let lastLetter = string[9];

console.log(lastLetter) // t

let lastIndex = string.length - 1;

console.log(lastIndex)  // 9
console.log(string[lastIndex])  // t
```
3. _toUpperCase()_: Este método cambia el string a letras mayúsculas.
```js
let string = 'Javascript';
console.log(string.toUpperCase());  // JAVASCRIPT

let firstName = 'David';
console.log(firstName.toUpperCase())    // DAVID

let country = 'Paraguay';
console.log(country.toUpperCase());     // PARAGUAY
```
4. _toLowerCase()_: este método cambia el string a letras minúsculas.
```js
let string = 'Javascript';
console.log(string.toLowerCase());  // javascript

let firstName = 'David';
console.log(firstName.toLowerCase());   // david

let country = 'Paraguay';
console.log(country.toLowerCase());     // paraguay
```
5. _substr()_: Se necesitan dos argumentos, el índice inicial y el número de caracteres para dividir. Es decir, desde qué letra arranca y la cantidad de letras a mostrar (se muestra como deprecado)
```js
let string = 'JavaScript';
console.log(string.substr(4, 6))    // Script

let country = 'Paraguay';
console.log(country.substr(4, 4))   // guay
```
6. _susbstring()_: Toma dos argumentos, el índice inicial y el índice final, pero no incluye el caracter en el índice final. El segundo argumento se cuenta desde la primera letra, y no desde donde arranca el primer argumento
```js
let string = 'JavaScript';

console.log(string.substring(0, 4));    //Java
console.log(string.substring(4, 10));   // Script
console.log(string.substring(4));       // Script

let country = 'Paraguay';
console.log(country.substring(0, 4));   // Para
console.log(country.substring(4, 8));   // guay
console.log(country.substring(4));      // guay
```
7. _split()_: El método split divide una cadena en un lugar específico.
```js
let string = '30 Days Of JavaScript';

console.log(string.split()) // lo transforma en un array -> ["30 Days Of JavaScript"]
console.log(string.split(' ')) // lo transforma en un array con 4 items -> ['30', 'Days', 'Of', 'JavaScript']

let firstName = 'David';

console.log(firstName.split()) // Lo convierte en un array -> ['David']
console.log(firstName.split('')) // divide cada letra y lo convierte en un array -> ['D'. 'a', 'v', 'i', 'd']

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland';

console.log(countries.split(',')) // divide con coma y lo convierte en array. En este caso hay un espacio antes de cada palabra dentro de las comillas -> ['Finland', ' Sweden', ' Norway', ' Denmark', ' and Iceland']
console.log(countries.split(', '))  // El separador es la coma y el espacio -> ['Finland', 'Sweden', 'Norway', 'Denmark', 'and Iceland']
```
8. _trim()_: Remueve los espacios en el principio o en el final de un string.
```js
let string = '   30 días de Javascript   ';
console.log(string);
console.log(string.trim())

let firstName = '  David ';
console.log(firstName);
console.log(firstName.trim())
```
```sh
   30 días de Javascript   
30 días de Javascript
   David 
David
```
9. _includes()_: Toma un argumento de subcadena y verifica si existe un argumento de subcadena en la cadena. include() devuelve un valor booleano. Si existe una subcadena en una cadena, devuelve verdadero; de lo contrario, devuelve falso.
```js
let string = '30 Days Of JavaScript';

console.log(string.includes('Days'));   // true
console.log(string.includes('days'));   // false - es sensible a mayúsculas y minúsculas
console.log(string.includes('Script'));  // true
console.log(string.includes('script'));  // false
console.log(string.includes('java'));   //false
console.log(string.includes('Java'));   // true

let country = 'Finland';

console.log(country.includes('fin'));   // false
console.log(country.includes('Fin'));   // true
console.log(country.includes('land'));  // true
console.log(country.includes('Land'));    // false
```
10. _replace()_: Toma como parámetro la subcadena antigua y una nueva subcadena.
```js
string.replace(oldsubstring, newsubstring)
```
```js
let string = '30 Days Of JavaScript';
console.log(string.replace('JavaScript', 'Python')) // 30 Days Of Python

let country = 'Finland';
console.log(country.replace('Fin', 'Noman'))    // Nomanland
```
11. _charAt()_: Toma un índice y devuelve el valor en ese índice
```js
string.charAt(index)
```
```js
let string = '30 Days Of JavaScript';
console.log(string.charAt(0));  // 3

let lastIndex = string.length - 1;
console.log(string.charAt(lastIndex));  // t
```
12. _charCodeAt()_: Toma el índice y devuelve el código char (número ASCII) del valor en ese índice.
```js
string.charCodeAt(index)
```
```js
let string = '30 Days Of JavaScript'
console.log(string.charCodeAt(3));  // Número D ASCII es 68

let lastIndex = string.length - 1;
console.log(string.charCodeAt(lastIndex))   // t ASCII es 116
```
13. _indexOf()_: Toma una subcadena y si la subcadena existe en una cadena, devuelve la primera posición de la subcadena (en número); si no existe, devuelve -1
```js
string.indexOf(substring)
```
```js
let string = '30 Days Of JavaScript';

console.log(string.indexOf('D'));   // 3
console.log(string.indexOf('Days'));    // 3
console.log(string.indexOf('days'));    // -1
console.log(string.indexOf('a'));   // 4
console.log(string.indexOf('JavaScript'));  // 11
console.log(string.indexOf('Script'));  // 15
console.log(string.indexOf('script'));  // -1
```
14. _lastIndexOf()_: Toma una subcadena y si la subcadena existe en una cadena, devuelve la última posición de la subcadena (mostrando el índice de la primer letra de la subcadena); si no existe, devuelve -1
```js
string.lastIndexOf(substring)
```
```js
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.';

console.log(string.lastIndexOf('love'));    //67
console.log(string.lastIndexOf('you'));     //63
console.log(string.lastIndexOf('JavaScript'));  // 38 - la J del último 'JavaScript' está en la posición 38
```
15. _concat()_: toma muchas subcadenas y las une
```js
string.concat(substring, substring, substring)
```
```js
let string = '30';
console.log(string.concat("Days", "Of", "JavaScript"))  //30DaysOfJavaScript

let country = 'Para';
console.log(country.concat('guay')) // Paraguay
```
16. _startsWith_: toma una subcadena como argumento y verifica si la cadena comienza con esa subcadena especificada. Devuelve un valor booleano (verdadero o falso).
```js
string.startsWith(substring)
```
```js
let string = 'Love is the best to in this world';

console.log(string.startsWith('Love')); // true
console.log(string.startsWith('love')); // false
console.log(string.startsWith('world'));    // false

let country = 'Finland';

console.log(country.startsWith('Fin'))  // true
console.log(country.startsWith('fin'))  // false
console.log(country.startsWith('land')) // false  
```
17. _endsWith_: toma una subcadena como argumento y verifica si la cadena termina con esa subcadena especificada. Devuelve un valor booleano (verdadero o falso).
```js
string.endsWith(substring)
```
```js
let string = 'Love is the most powerful feeling in the world'

console.log(string.endsWith('world'))   // true
console.log(string.endsWith('love'))    // false
console.log(string.endsWith('in the world'))  // true

let country = 'Finland';

console.log(country.endsWith('land'))   // true
console.log(country.endsWith('fin'))    // false
console.log(country.endsWith('Find'))   // false
```
18. _search_: toma una subcadena como argumento y devuelve el índice de la primera coincidencia. El valor de búsqueda puede ser una cadena o un patrón de expresión regular. No es case sensitive
```js
string.search(substring)
```
```js
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.';
console.log(string.search('love')) // 2 - La letra l del primer love está en la posición 2
console.log(string.search(/javascript/gi))  // 7 - g-significa buscar en todo el texto, i - no distingue entre mayúsculas y minúsculas
```
19. *match*: toma una subcadena o un patrón de expresión regular como argumento y devuelve una matriz si hay una coincidencia; de lo contrario, devuelve un valor nulo. Veamos cómo se ve un patrón de expresión regular. Comienza con el signo / y termina con el signo /
```js
let string = 'love';
let patterOne = /love/  // sin ninguna bandera
let patterTwo = /love/gi    // g-significa buscar en todo el texto, i - no distingue entre mayúsculas y minúsculas
```
Sintaxis de Match
```js
// syntax
string.match(substring)
```
```js
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.';
console.log(string.match('love'))
```
```sh
["love", index: 2, input: "I love JavaScript. If you do not love JavaScript what else can you love.", groups: undefined]
```
```js
let pattern = /love/gi
console.log(string.match(pattern))  // ['love', 'love', 'love']
```
Extraigamos números del texto usando una expresión regular. Esta no es la sección de expresiones regulares, ¡no se asustes! Cubriremos las expresiones regulares más adelante. Ver más sobre expresiones regulares (acá)[https://www.w3schools.com/jsref/jsref_obj_regexp.asp]
```js
let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge';
let regEx = /\d/g;
// d con carácter de escape significa que d no es una d normal sino que actúa como un dígito
// + significa uno o más dígitos,
// si hay una g después de eso, significa global, busque en todas partes.

console.log(txt.match(regEx)); // ['2', '0', '1', '9', '3', '0', '2', '0', '2', '0']
console.log(txt.match(/\d+/g)) // ['2019', '30', '2020']
```
20. *repeat()*: toma un número como argumento y devuelve la versión repetida de la cadena.
```js
string.repeat(n)
```
```js
let string = 'love';
console.log(string.repeat(10)); // lovelovelovelovelovelovelovelovelovelove
```
## Comprobación de tipos de datos y conversión
### Comprobación de tipos de datos
Para verificar el tipo de datos de una determinada variable, usamos el método typeof.
**Ejemplo:**
```js
let firstName = 'Asabeneh'      // string
let lastName = 'Yetayeh'        // string
let country = 'Finland'         // string
let city = 'Helsinki'           // string
let age = 250                   // number, it is not my real age, do not worry about it
let job                         // undefined, because a value was not assigned

console.log(typeof 'Asabeneh')  // string
console.log(typeof firstName)   // string
console.log(typeof 10)          // number
console.log(typeof 3.14)        // number
console.log(typeof true)        // boolean
console.log(typeof false)       // boolean
console.log(typeof NaN)         // number
console.log(typeof job)         // undefined
console.log(typeof undefined)   // undefined
console.log(typeof null)        // object
```
### Cambio del tipo de datos (Casting)
- Casting: Conversión de un tipo de datos a otro tipo de datos. Usamos parseInt(), parseFloat(), Number(), signo +, str() Cuando hacemos operaciones aritméticas, los números de cadena deben convertirse primero en enteros o flotantes; de lo contrario, devuelve un error.
#### String a entero
Podemos convertir el número de cadena en un número. Cualquier número dentro de una comilla es un número de cadena. Un ejemplo de un número de cadena: '10', '5', etc. Podemos convertir una cadena en un número usando los siguientes métodos:
- parseInt()
- Number()
- Plus sign(+)
```js
let num = '10';
let numInt = parseInt(num);
console.log(numInt)   // 10
```
```js
let num = '10';
let numInt = Number(num);
console.log(numInt)   // 10
```
```js
let num = '10';
let numInt = +num;
console.log(numInt)   // 10
```
#### String a decimal
Podemos convertir un número flotante de cadena en un número flotante. Cualquier número flotante dentro de una comilla es un número flotante de cadena. Un ejemplo de un número flotante de cadena: '9.81', '3.14', '1.44', etc. Podemos convertir flotante de cadena a número usando los siguientes métodos:
- parseFloat()
- Number()
- Signo más(+)
```js
let num = '9.81';
let numFloat = parseFloat(num);
console.log(numFloat)      //   9.81
```
```js
let num = '9.81';
let numFloat = Number(num);
console.log(numFloat)      //   9.81
```
```js
let num = '9.81';
let numFloat = +num;
console.log(numFloat)      //   9.81
```
#### Decimal a entero
Podemos convertir números decimales a enteros. Usamos el siguiente método para convertir de decimal a entero:
- parseInt
```js
let num = 9.81
let numInt = parseInt(num)
console.log(numInt)     // 9
```