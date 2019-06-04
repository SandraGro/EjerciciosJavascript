//Convierte todos los ejercicios de la parte 1 a usar Promises
let indx1 = () => Promise.resolve(arr.forEach(v => console.log(v)));
let a = Promise.race([indx1]).then(() => console.log('Done'));
setTimeout(() => console.log(a), 1000);

// -------------
function myFunction() {
    setTimeout(function () { console.log(1); }, 3000);
    setTimeout(function () { console.log(2); }, 1000);
    setTimeout(function () { console.log(3); }, 4000);
}
myFunction();

//---

function wrapper(url) {
    let miPromesa = new Promise((resolve, reject) => {
        visitarPag(url, contenido => {
            if (url.includes('fallo')) {
                reject('No se puedo ingresar');
            } else {
                resolve(contenido);
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

function guardarPalabrasClave(palabras) {
    console.log('guardando palabras clave');
}


visitarPag("https://sandraalejandra.com", (content) => {
    extraerPalabrasClave(content, (keywords) => {
        guardarPalabrasClave(keywords);
    })
});

//Crea una Cadena de Promesas en la cual una lanza un error (no hagas Catch)


//Agrega un catch al ejercicio anterior

//Agrega un finally al ejercicio anterior

//Crea una función con 3 promesas, que acaben a tiempos diferentes y regresa en cuanto la primera termina
//Crea una función con 4 promesas, que acaben a tiempos diferentes y regresa cuando todas acaben
//Crea una Cadena de Promesas en la cual una se rechaza, asegurate de agregar un catch
//Crea una Cadena de Promesas en la cual una se rechaza, agrega varios catch
