// for(let i = 0; i <= 5; i++) {
//     console.log(i)
// }

// for (let i = 5; i >= 0; i--) {
//     console.log(i)
// }

// for (let i = 0; i <= 5; i++) {
//     console.log(`${i} * ${i} = ${i * i}`)
// }

const paises = ['Paraguay', 'Brasil', 'Argentina', 'Colombia'];
const newArr = [];
for (let i = 0; i < paises.length; i++) {
    newArr.push(paises[i].toUpperCase())
}
console.log(newArr)