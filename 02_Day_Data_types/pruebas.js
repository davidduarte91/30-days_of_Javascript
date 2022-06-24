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
const PI = Math.PI;
console.log(PI);

// Redondeo al número más cercano
// si es superior a 0,5 hacia arriba, si es inferior a 0,5 redondeo hacia abajo

console.log(Math.round(PI)) // 3 redondea valores al número más cercano
console.log(Math.round(9.81));
console.log(Math.floor(PI)); // 3 (Redondea hacia abajo)
console.log(Math.ceil(PI)); //4 (redondea hacia arriba)
console.log(Math.min(-5, 3, 20, 4, 5, 10)); // -5 (retorna el valor mínimo)
console.log(Math.max(-5, 3, 20, 4, 5, 10)); // 20 (retorna)