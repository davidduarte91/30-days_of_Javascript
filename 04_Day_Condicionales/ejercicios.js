// Ejercicios: Nivel 1
// 1. Obtenga la entrada del usuario usando el aviso ("Ingrese su edad:"). Si el usuario tiene 18 años o más, brinde comentarios: 'Tiene la edad suficiente para conducir', pero si no tiene 18 años, brinde otro comentario que indique que debe esperar la cantidad de años que necesita para cumplir 18.
/*
let edad = parseInt(prompt('Ingrese su edad'));
edad >= 18
    ? console.log('Tenés la edad suficiente para conducir')
    : console.log(`Debés esperar ${18 - edad} años para conducir`)
*/

// 2. Compara los valores de myAge y yourAge usando if... else. Según la comparación, registre el resultado en la consola indicando quién es mayor (tú o yo). Use prompt(“Ingrese su edad:”) para obtener la edad como entrada.
/*
let myAge = 30;
let yourAge = parseInt(prompt('Ingresá tu edad'));
console.log(yourAge)
if (isNaN(yourAge)) {
    console.log('Debe ingresar un número')
} else if (myAge > yourAge) {
    console.log('Yo soy mayor que vos')
} else if (myAge < yourAge) {
    console.log('Vos sos mayor que yo')
} else {
    console.log('Tenemos la misma edad')
}
*/

// 3. Si a es mayor que b, devuelve 'a es mayor que b'; de lo contrario, 'a es menor que b'. Trate de implementarlo de maneras.
// Usando if else
// operador ternario
/*
let a = 3;
let b = 4;
if (a > b) console.log('a es mayor que b'); else console.log('a es menor que b');

a > b ? console.log('a es mayor que b') : console.log('a es menor que b')
*/

// 4. Los números pares son divisibles por 2 y el resto es cero. ¿Cómo verifica si un número es par o no usando JavaScript?
/*
let number = parseInt(prompt('Ingrese un número para saber si es par o impar'));
let resto = number % 2;
if (resto == 0) {
    console.log(`${number} es par`)
} else {
    console.log(`${number} es impar`)
}
*/

// Ejercicios: Nivel 2

//Escriba un código que pueda otorgar calificaciones a los estudiantes de acuerdo con sus puntajes:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
/*
let score = parseInt(prompt('Ingrese el puntaje para ver la calificación'));
switch (true) {
    case score >= 90 && score <= 100:
        console.log(`Su puntaje es de ${score} y su calificación es \'A\'`);
        break;
    case score >= 70 && score <= 89:
        console.log(`Su puntaje es de ${score} y su calificación es \'B\'`)
        break;
    case score >= 60 && score <= 69:
        console.log(`Su puntaje es de ${score} y su calificación es \'C\'`)
        break;
    case score >= 50 && score <= 59:
        console.log(`Su puntaje es de ${score} y su calificación es \'D\'`)
        break;
    case score >= 0 && score <= 49:
        console.log(`Su puntaje es de ${score} y su calificación es \'F\'`)
        break;
    default:
        console.table('Ingrese un puntaje entre cero y cien')
        console.log(score >= 90 && score <= 100)                 
}
*/

// Verifica si la temporada es Otoño, Invierno, Primavera o Verano. Si la entrada del usuario es:
// Septiembre, Octubre o Noviembre, la estación esPrimavera.
// Diciembre, Enero o Febrero, la estación es Verano.
// Marzo, Abril o Mayo, la estación es Otoño.
// Junio, Julio o Agosto, la estación es Invierno 
/*
let mes = prompt('Ingrese un mes del año para saber a qué estación del año corresponde');
estacion = mes.toLowerCase();
switch (estacion) {
    case 'septiembre':
    case 'octubre':
    case 'noviembre':
        console.log('la estación es Primavera')
        break;
    case 'diciembre':
    case 'enero':
    case 'febrero':
        console.log('la estación es Verano')
        break;
    case 'marzo':
    case 'abril':
    case 'mayo':
        console.log('la estación es Otoño')
        break;
    case 'junio':
    case 'julio':
    case 'agosto':
        console.log('la estación es invierno')
        break;
    default:
        console.log('Ingrese una estación del año válida')
}
*/

// Verifica si el día es de fin de semana o día laboral. El script tomará el día como entrada
/*
let dayPure = prompt('Ingrese el día de la semana');
let day = dayPure.toLowerCase();
switch (day) {
    case 'lunes':
    case 'martes':
    case 'miércoles':
    case 'miercoles':
    case 'jueves':
    case 'viernes':
        console.log(`${day} es día laboral`)                
        break;
    case 'sábado':
    case 'sabado':
    case 'domingo':
        console.log(`${day} es fin de semana`)                
        break;
    default: console.log(`${day} no es un día válido`)
}
*/

// Escribe un programa que diga el número de días en un mes.
/*
let monthNoEdit = prompt('Ingrese el mes para saber cuántos días tiene');
let month = monthNoEdit.toLowerCase();
switch (month) {
    case 'enero':
    case 'marzo':
    case 'mayo':
    case 'julio':
    case 'agosto':
    case 'octubre':
    case 'diciembre':
        console.log(`${month} tiene 31 días`)
        break;
    case 'febrero':
        console.log(`${month} tiene 28 días`)
        break;
    case 'abril':
    case 'junio':
    case 'septiembre':
    case 'noviembre':
        console.log(`${month} tiene 30 días`)
        break;
    default:
        console.log(`${month} no es un mes`)
}
*/

// Escribe un programa que diga el número de días en un mes, ahora considera un año bisiesto.
/* (modo muy largo)
let año = parseInt(prompt('Ingrese el año'));
let monthNoEdit = prompt('Ingrese el mes para saber cuántos días tiene');
let month = monthNoEdit.toLowerCase();
if ((año % 4) == 0) {
    if ((año % 100) == 0) {
        if ((año % 400) == 0) {
            switch (month) {
                case 'enero':
                case 'marzo':
                case 'mayo':
                case 'julio':
                case 'agosto':
                case 'octubre':
                case 'diciembre':
                    console.log(`${month} tiene 31 días`)
                    break;
                case 'febrero':
                    console.log(`${month} tiene 29 días`)
                    break;
                case 'abril':
                case 'junio':
                case 'septiembre':
                case 'noviembre':
                    console.log(`${month} tiene 30 días`)
                    break;
                default:
                    console.log(`${month} no es un mes`)
            }
        }
        else {
            switch (month) {
                case 'enero':
                case 'marzo':
                case 'mayo':
                case 'julio':
                case 'agosto':
                case 'octubre':
                case 'diciembre':
                    console.log(`${month} tiene 31 días`)
                    break;
                case 'febrero':
                    console.log(`${month} tiene 28 días`)
                    break;
                case 'abril':
                case 'junio':
                case 'septiembre':
                case 'noviembre':
                    console.log(`${month} tiene 30 días`)
                    break;
                default:
                    console.log(`${month} no es un mes`)
            }
        }
    } else {
        switch (month) {
            case 'enero':
            case 'marzo':
            case 'mayo':
            case 'julio':
            case 'agosto':
            case 'octubre':
            case 'diciembre':
                console.log(`${month} tiene 31 días`)
                break;
            case 'febrero':
                console.log(`${month} tiene 29 días`)
                break;
            case 'abril':
            case 'junio':
            case 'septiembre':
            case 'noviembre':
                console.log(`${month} tiene 30 días`)
                break;
            default:
                console.log(`${month} no es un mes`)
        }
    }
} else {
    switch (month) {
        case 'enero':
        case 'marzo':
        case 'mayo':
        case 'julio':
        case 'agosto':
        case 'octubre':
        case 'diciembre':
            console.log(`${month} tiene 31 días`)
            break;
        case 'febrero':
            console.log(`${month} tiene 28 días`)
            break;
        case 'abril':
        case 'junio':
        case 'septiembre':
        case 'noviembre':
            console.log(`${month} tiene 30 días`)
            break;
        default:
            console.log(`${month} no es un mes`)
    }
}
*/

// mejor método, más corto
let año = parseInt(prompt('Ingrese el año'));
let monthNoEdit = prompt('Ingrese el mes para saber cuántos días tiene');
let month = monthNoEdit.toLowerCase();
if ((año % 4 == 0 && año % 100 != 0) || año % 400 == 0) {
    switch (month) {
        case 'enero':
        case 'marzo':
        case 'mayo':
        case 'julio':
        case 'agosto':
        case 'octubre':
        case 'diciembre':
            console.log(`${month} tiene 31 días`)
            break;
        case 'febrero':
            console.log(`${month} tiene 29 días`)
            break;
        case 'abril':
        case 'junio':
        case 'septiembre':
        case 'noviembre':
            console.log(`${month} tiene 30 días`)
            break;
        default:
            console.log(`${month} no es un mes`)
    }
} else {
    switch (month) {
        case 'enero':
        case 'marzo':
        case 'mayo':
        case 'julio':
        case 'agosto':
        case 'octubre':
        case 'diciembre':
            console.log(`${month} tiene 31 días`)
            break;
        case 'febrero':
            console.log(`${month} tiene 28 días`)
            break;
        case 'abril':
        case 'junio':
        case 'septiembre':
        case 'noviembre':
            console.log(`${month} tiene 30 días`)
            break;
        default:
            console.log(`${month} no es un mes`)
    }
}
