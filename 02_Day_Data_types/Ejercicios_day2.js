// Declare una variable llamada desafío y asígnele un valor inicial '30 días de JavaScript'.
let desafio = '30 días de JavaScript';

// Imprime la cadena en la consola del navegador usando console.log()
console.log(desafio);

// Imprima la longitud de la cadena en la consola del navegador usando console.log()
console.log(desafio.length)

// Cambie todos los caracteres de cadena a letras mayúsculas usando el método toUpperCase()
console.log(desafio.toUpperCase())

// Cambie todos los caracteres de la cadena a letras minúsculas usando el método toLowerCase()
console.log(desafio.toLowerCase());

// Corta (segmenta) la primera palabra de la cadena usando el método substr() o substring()
console.log(desafio.substring(3))

// Corta la frase Days Of JavaScript de 30 Days Of JavaScript.
console.log(desafio.substring(0, 2))

// Verifique si la cadena contiene una palabra Script usando el método includes()
console.log(desafio.includes('Script'))

// Divide la cadena en un array usando el método split()
console.log(desafio.split())

// Divida la cadena 30 días de JavaScript con espacios usando el método split ()
console.log(desafio.split(' '))

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' divide la cadena en la coma y cámbiala a una matriz.
let startUps = 'Facebook, Google, Microsoft, Apple, IMB, Oracle, Amazon';
console.log(startUps.split(', ')) 

// Cambie 30 días de JavaScript a 30 días de Python usando el método replace().
console.log(desafio.replace('JavaScript', 'Python'));

// ¿Qué es el carácter en el índice 15 en la cadena '30 días de JavaScript'? Utilice el método charAt().
console.log(desafio.charAt(15));

// ¿Cuál es el código de carácter de J en la cadena '30 días de JavaScript' usando charCodeAt()
console.log(desafio.charCodeAt(11));

// Use indexOf para determinar la posición de la primera aparición de a en 30 días de JavaScript
console.log(desafio.indexOf('a'));

// Utilice lastIndexOf para determinar la posición de la última aparición de a en 30 días de JavaScript.
console.log(desafio.lastIndexOf('a'))

// Usa indexOf para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
let oracion = 'No puedes terminar una oración con porque porque porque es una conjunción';
console.log(oracion.indexOf('porque'))

// Usa lastIndexOf para encontrar la posición de la última aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
console.log(oracion.lastIndexOf('porque'))

// Usa search para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
console.log(oracion.search('porque'));

// Use trim() para eliminar cualquier espacio en blanco final al principio y al final de una cadena. Por ejemplo, '30 días de JavaScript'.
let desafio2 = '  30 días de JavaScript ';
console.log(desafio2.trim())

// Use el método startsWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero
console.log(desafio.startsWith('30 días'));

// Use el método endsWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero
console.log(desafio.endsWith('Script'));

// Usa el método match() para encontrar todos los a en 30 días de JavaScript
console.log(desafio.match(/a/gi))

// Use concat() y fusione '30 días de' y 'JavaScript' en una sola cadena, '30 días de JavaScript'
console.log('30 días de '.concat('JavaScript'))

// Use el método repeat() para imprimir 30 días de JavaScript 2 veces
console.log(desafio.repeat(2))

// --------------------------------------------------------------

// Ejercicio: Nivel 2
// Usando console.log() imprima la siguiente declaración: The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')

// Usando console.log() imprima la siguiente cita de la Madre Teresa: "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log('\"Love is not patronizing and charity isn\'t about pity, it is about love.\n Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"')

// Compruebe si typeof '10' es exactamente igual a 10. Si no, hágalo exactamente igual.
console.log(typeof '10' == typeof 10);
let num = parseInt('10');
console.log(num);
console.log(num == 10);
console.log(typeof num == typeof 10)

// Compruebe si parseFloat('9.8') es igual a 10, si no, hágalo exactamente igual a 10.
let num2 = '9.8';
let num2Int = Math.ceil(Number(num2));
console.log(num2Int)

// Verifique si 'on' se encuentra tanto en Python como en la jerga
let language = 'Python';
console.log(language.includes('on'))

// Espero que este curso no esté lleno de jerga. Compruebe si jerga está en la oración.
let oracion1 = 'Espero que este curso no esté lleno de jerga';
console.log(oracion1.includes('jerga'))

// Genere un número aleatorio entre 0 y 100 inclusive
let randomNum = Math.random();
console.log(randomNum)
console.log(Math.floor(randomNum * 101)) 

// Genere un número aleatorio entre 50 y 100 inclusive.
let numCincAlCien = Math.floor(randomNum * 101);
if (numCincAlCien < 50) {
    numCincAlCien = numCincAlCien + 50;
}
console.log(numCincAlCien)

// Genere un número aleatorio entre 0 y 255 inclusive.
let num_0_255 = Math.floor(randomNum * 256);
console.log(num_0_255)

// Acceda a los caracteres de la cadena 'JavaScript' utilizando un número aleatorio.
let word = 'JavaScript';
let caracteres = word[Math.floor(randomNum * 10)];
console.log(caracteres)

// Use console.log() y caracteres de escape para imprimir el siguiente patrón.
console.log(`1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125\n`)

//Usa substr para separar la frase porque porque porque de la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
console.log(oracion.substr(35, 20))

// Ejercicios: Nivel 3
// 'El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor. Cuente el número de palabras amor en esta oración.
let frase = 'El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor.';
let cantAmor = frase.match(/amor/gi);
console.log(`Hay ${cantAmor.length} palabras \'amor\' en la frase`)

// Usa match() para contar el número de todos los porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
let cantPorque = oracion.match(/porque/gi);
console.log(`Hay ${cantPorque.length} palabras \'porque\' en la oración`)

// Limpia el siguiente texto y encuentra la palabra más frecuente (pista, usa replace y expresiones regulares). ***No lo pude hacer***
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

let pattern = /\W/gi;
let newSentence = sentence.replace(pattern, "");
console.log(newSentence)

// Calcula el ingreso anual total de la persona extrayendo los números del siguiente texto. 'Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en línea de 15000 euros por mes.'
let pattern1 = /\d+/g;
let text = 'Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en línea de 15000 euros por mes.'
let ingresos = text.match(pattern1);
console.log(ingresos);
let suma = 0;
for (let i = 0; i < ingresos.length; i++) {
    ingresos[i] = parseFloat(ingresos[i]);
    console.log(ingresos[i])
    suma = suma + ingresos[i];
};
console.log(suma)