# Día 6
## Bucles
La mayoría de las actividades que hacemos en la vida están llenas de repeticiones. Imagínese si le pido que imprima de 0 a 100 usando console.log(). Para implementar esta tarea simple, puede tomar de 2 a 5 minutos, este tipo de tarea tediosa y repetitiva se puede llevar a cabo usando loop. Si prefieres ver los videos, puedes consultar los [videotutoriales](https://www.youtube.com/channel/UCM4xOopkYiPwJqyKsSqL9mw)

En los lenguajes de programación para realizar tareas repetitivas utilizamos diferentes tipos de bucles. Los siguientes ejemplos son los bucles de uso común en JavaScript y otros lenguajes de programación.

### for loop

js```
// Estructura for loop
for(inicialización, condición, incremento/decremento) {
    // código va acá
}
```

js```
for(let i = 0; i <= 5; i++) {
    console.log(i)
}
```

js```
for (let i = 5; i >= 0; i--) {
    console.log(i)
}
```

js```
for (let i = 0; i <= 5; i++) {
    console.log(`${i} * ${i} = ${i * i}`)
}
```

sh```
0 * 0 = 0
1 * 1 = 1
2 * 2 = 4
3 * 3 = 9
4 * 4 = 16
5 * 5 = 25
```

js```
const paises = ['Paraguay', 'Brasil', 'Argentina', 'Colombia'];
const newArr = [];
for (let i = 0; i < paises.length; i++) {
    newArr.push(paises[i].toUpperCase()) // recorre el array, lo pasa a mayúsculas y lo pushea a newArr
}
console.log(newArr) // [ "PARAGUAY", "BRASIL", "ARGENTINA", "COLOMBIA" ]
```

