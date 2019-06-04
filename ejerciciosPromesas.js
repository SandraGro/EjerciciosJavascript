//Convierte todos los ejercicios de la parte 1 a usar Promises
let indx1 = () => Promise.resolve(arr.forEach(v => console.log(v)));
let a = Promise.race([indx1]).then(() => console.log('Done'));
setTimeout(() => console.log(a), 1000);

// -------------
setTimeout(() => Promise.resolve(1).then(console.log), 3000)
setTimeout(() => Promise.resolve(2).then(console.log), 1000)
setTimeout(() => Promise.resolve(3).then(console.log), 4000)

//--- opc 1
function visitarPag(url) {
    console.log('Visitando pagina');
    let promesa = new Promise((resolve, reject) => {
        let contenido = 'contenido de la pagina';
        if (url.includes("falla")) {
            reject("No pudimos visitar la pagina web " + url)
        } else {
            resolve(contenido)
        }
    });
    return promesa;
}

function extraerPalabrasClave(contenido) {
    console.log('extrayendo palabras clave');
    let promesa = new Promise((resolve, reject) => {
        let palabrasClave = 'palabras';
        if (palabrasClave) {
            resolve(palabrasClave);
        } else {
            reject("No hay palabras");
        }
    });
    return promesa;
}

function guardarPalabrasClave(palabras) {
    console.log('guardando palabras clave');
}

visitarPag("https://sandraalejandra.com")
    .then(extraerPalabrasClave)
    .then(guardarPalabrasClave)
    .catch((e) => console.log(e));

//------ opc2
function wrapper(url) {
    let miPromesa = new Promise((resolve, reject) => {
        visitarPag(url, contenido => {
            if (url.includes('fallo')) {
                reject('No se puedo ingresar xxx');
            } else {
                resolve(contenido);
            }
        })
    })
    return miPromesa;
}
function wrapper2(contenido) {
    let miPromesa = new Promise((resolve, reject) => {
        extraerPalabrasClave(contenido, palabrasClave => {
            if (palabrasClave) {
                resolve(palabrasClave);
            } else {
                reject('No hay palabras');
            }
        })
    })
    return miPromesa;
}

function visitarPag(url, callback) {
    console.log('Visitando pagina')
    let contenido = 'contenido de la pagina';
    callback(contenido)
}
wrapper('fallo').catch(console.log); // (e)=>console.log(e)

function extraerPalabrasClave(contenido, callback) {
    console.log('extrayendo palabras clave');
    let palabrasClave = 'palabras';

    callback(palabrasClave);
}
wrapper2('contenido de la pagina').then((datos) => console.log(datos));

function guardarPalabrasClave(palabras) {
    console.log('guardando palabras clave');
}

//Crea una Cadena de Promesas en la cual una lanza un error (no hagas Catch)
visitarPag("https://sandraalejandra.com/fallo")
    .then(extraerPalabrasClave)
    .then(guardarPalabrasClave)
// wrapper('fallo').then(datos =>(console.log(datos))); 

//Agrega un catch al ejercicio anterior
visitarPag("https://sandraalejandra.com/fallo")
    .then(extraerPalabrasClave)
    .then(guardarPalabrasClave)
    .catch((error) => console.log("Error cachado: " + error))

//Agrega un finally al ejercicio anterior
visitarPag("https://sandraalejandra.com/fallo")
    .then(extraerPalabrasClave)
    .then(guardarPalabrasClave)
    .catch((error) => console.log("Error cachado: " + error))
    .finally(() => console.log("Terminé"));

//Crea una función con 3 promesas, que acaben a tiempos diferentes y regresa en cuanto la primera termina
let miPromesa = () => {
    let prom1 = new Promise((resolve, reject) => setTimeout(resolve, 1000, 'Hola'));
    let prom2 = new Promise((resolve, reject) => setTimeout(resolve, 1500, 'Holaaa'));
    let prom3 = new Promise((resolve, reject) => setTimeout(resolve, 4000, 'Halaaaaaa'));
    return Promise.race([prom3, prom2, prom1])
}
miPromesa().then((v) => console.log(v));

//Crea una función con 4 promesas, que acaben a tiempos diferentes y regresa cuando todas acaben
let miPromesa = () => {
    let prom1 = new Promise((resolve, reject) => setTimeout(resolve, 1000, 'Hola'));
    let prom2 = new Promise((resolve, reject) => setTimeout(resolve, 1500, 'Holaaa'));
    let prom3 = new Promise((resolve, reject) => setTimeout(resolve, 4000, 'Halaaaaaa'));
    return Promise.all([prom3, prom2, prom1])
}
miPromesa().then((v) => console.log(v));

//Crea una Cadena de Promesas en la cual una se rechaza, asegurate de agregar un catch
visitarPag("https://sandraalejandra.com/fallo")
    .then(extraerPalabrasClave)
    .then(guardarPalabrasClave)
    .catch((error) => console.log("Error cachado: " + error))

//Crea una Cadena de Promesas en la cual una se rechaza, agrega varios catch

visitarPag("https://sandraalejandra.com/fallo")
    .then(extraerPalabrasClave)
    .catch((error) => console.log("Error cachado: " + error))
    .then(guardarPalabrasClave)
    .catch((mensaje) => console.log(mensaje))
    .finally(() => console.log("terminó"));