//Recorre un arreglo usando un callback, imprime cada elemento
let arr = [2, 3, 5, 6];
arr.forEach(v => console.log(v))

/*Haz varios callbacks de forma que se imprima:
1 después de 3 segundos
2 después de 1 segundo
3 después de 4 segundos
En consola debería verse 2 1 3
*/

function myFunction() {
  setTimeout(function() { console.log(1); }, 3000);
  setTimeout(function() { console.log(2); }, 1000);
  setTimeout(function() { console.log(3); }, 4000);
}
myFunction();

//Escribe un callback que recibe un argumento y lo imprime

function saludar(nombre) {
  console.log(`Hola ${nombre}`);
}

saludar('Sandra');

//Crea una función que recibe el callback anterior y lo ejecuta

function procesaFuncion(myfun) {
  var nombre = 'Sandra';
  myfun(nombre);
}
procesaFuncion(saludar);

//Crea una función que llama a un callback y usa el valor que regresa para llamar a otro. Después debe llamar a un tercer callback con el valor que regresa el segundo

function funcion2(callback1) {

}
