//Convierte todos los ejercicios de la parte 1 a usar Promises
let indx1 = () => Promise.resolve(arr.forEach(v => console.log(v)));
let a = Promise.race([indx1]).then(() => console.log('Done'));
setTimeout(() => console.log(a), 1000);

//Crea una Cadena de Promesas en la cual una lanza un error (no hagas Catch)

//Agrega un catch al ejercicio anterior
//Agrega un finally al ejercicio anterior
//Crea una función con 3 promesas, que acaben a tiempos diferentes y regresa en cuanto la primera termina
//Crea una función con 4 promesas, que acaben a tiempos diferentes y regresa cuando todas acaben
//Crea una Cadena de Promesas en la cual una se rechaza, asegurate de agregar un catch
//Crea una Cadena de Promesas en la cual una se rechaza, agrega varios catch
