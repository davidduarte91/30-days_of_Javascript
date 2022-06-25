/*let num = [1, 2, 3];
let numbers = [1, 2, 3];
console.log(num == numbers)*/

//-------------------------

/*let userOne = {
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
console.log(userOne, userTwo) */

//------------------------

/*let nums = [1, 2, 3];
let numbers = nums;
console.log(nums == numbers) // true
*/
// -----------------------------
/*
let userOne = {
    name:'David',
    role:'teaching',
    country:'Paraguay'
}

let userTwo = userOne;

console.log(userOne == userTwo); //true
*/

// --------------------------
/*
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
*/

// --------------------------------
/*
let randomNum = Math.random(); // genera desde el 0 al 0.999...
let numBtnZeroAndTen = randomNum * 11

console.log(numBtnZeroAndTen); // esto da como mínimo 0 y máximo 10.9999

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen);
console.log(randomNumRoundToFloor);
*/
// --------------------------------
/*
let space = ' '           // an empty space string
let firstName = 'David'
let lastName = 'Duarte'
let fullName = firstName + space + lastName;
console.log(fullName);
*/
// --------------------------------
/*
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
*/
// ------------------------------
/*
const paragraph = "Mi nombre es David Duarte. Vivo en Buenos Aires, Argentina. \
Soy un profesor y me encanta enseñar. Enseño HTML, CSS, Javascript, React, Redux, \
Node.js, Python, Data Analysis and D3.js para todos los que están interesados en aprender. \
En el final del 2019, he pensado en extender mi enseñanza y para alcanzar \
a una audiencia global comencé un desafío de Python desde Noviembre 2019 a Diciembre del 2019. \
Eso fue una de las más gratificantes e inspiradoras experiencias.\
Ahora, estamos en el 2020. Estoy disfrutando preparando los 30DaysOfJavascript challenge y \
espero que lo estés disfrutando también."

console.log(paragraph);
*/

// -------------------------------
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