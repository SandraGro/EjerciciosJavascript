// Escribe una función llamada calculateDogAge que reciba un número (la edad humana del perro) y calcule su edad en años de perro (edad x 7)
function calculateDogAge(num) {
  return edadPerro = num * 7;
}
calculateDogAge(10);

// Escribe una función llamada getCandySupply que reciba dos números (edad, cantidad por día) y calcule cuantos dulces consumirías por el resto de tu vida.
// El resto de tu vida es definido por una edad constante (por ejemplo, 75 años)

function getCandySupply(edad, cantidad) {
  const limiteVida = 77;
  return (limiteVida - edad) * cantidad * 365;
}
getCandySupply(76, 1);

// Crea una función que permita encadenar llamadas
// a().a().a() ... etc

// Crea una función que recibe un tipo (formal/casual) y dos funciones, una para un saludo casual (hola!) y otra para un saludo formal (buenos dias)
// La función debe regresar el tipo de saludo que va a usarse
let formal = () => 'Buenos días';
let casual = () => 'Hola';
function saludo(tipo, formal, casual) {
  if (tipo == 'formal') {
    return formal();
  } else if (tipo == 'casual') {
    return casual();
  }
  return 'Dame un saludo válido';
}

saludo('formal', formal, casual);

// Conviertan cualquier ciclo for que use un arreglo de la parte 1 para que use forEach o map
let arreglo = [2, 2, 1];
console.log(arreglo.reduce((total, valor) => total + valor));//usando reduce
let total = 0;
arreglo.forEach((valor/*indice, this//siempre apunta al arreglo*/) => {//valor es igual a lo que tenga el arreglo[i]
  total += valor;
});
console.log(total);
// Explica cual es la salida de las siguientes funciones y porqué:
/*
var a = 12;
(function() {   //muestra un alert con el valor de 'a' (12)
  alert(a);
})(); //se manda llamar la función
*/

/*
var a = 5;
(function() { //IIFE
  var a = 12; //muestra un alert con el nuevo valor de 'a' (12)
  alert(a);
})(); // se manda llamar la función
*/

/*
var a = 10;
var x = (function() {
  var a = 12;
  return (function() {
    alert(a);
  });
})(); // asigna la funcion de return a x
x(); 
*/

/*
var a = 10;
var x = (function() {
  var y = function() {
    var a = 12;
  };
  return function() {
    alert(a);   //muestra un alert con el nuevo valor de 'a' (10)
  }
})();
x();
*/

/*
var a = 10;
var x = (function() {
  (function() {
    a = 12;
  })();
  return (function() {
    alert(a);   //muestra un alert  con el valor de 'a' (12)
  });
})();
x();
*/

/*
var a = 10;
(function() {
  var a = 15;
  window.x = function() {
    alert(a); //15
  }
})();
x();
*/

/*
function leFunction() {
  console.log(a);
  console.log(foo());

  var a = 1;
  function foo() {
     return 2;
  }
}
leFunction();
*/

/*
var a = 1;
function someFunction(number) {
  function otherFunction(input) {
    return a;
  }
  a = 5;
  return otherFunction;
}

var firstResult = someFunction(9);
var result = firstResult(2);
*/

/*
var fullname = 'A Name';
var obj = {
  fullname: 'Full Name',
  prop: {
    fullname: 'Le Name',
    getFullname: function() {
      return this.fullname;
    }
  }
};
console.log(obj.prop.getFullname());
var aCall = obj.prop.getFullname;
console.log(aCall());
console.log(obj.fullname);
*/

/*
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
*/

/*
  Crea una clase persona que recibe un nombre, apellido y edad
  Agrega métodos para cambiar y obtener cada una de las propiedades
  Agrega un método (describe) que regrese una cadena como esta:
  {Nombre} {Apellido}, {edad} años.
*/

class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }
  getNombre() {
    return this.nombre;
  }

  getApellido() {
    return this.apellido;
  }

  getEdad() {
    return this.edad;
  }

  setNombre(nuevoNombre) {
    this.nombre = nuevoNombre;
  }

  setApellido(nuevoApellido) {
    this.apellido = nuevoApellido;
  }
  setEdad(nuevaEdad) {
    this.edad = nuevaEdad;
  }

  describe() {
    return this.nombre + ' ' + this.apellido + ' ' + this.edad;
  }
}

const sandra = new Persona('Sandra Alejandra', 'Guerrero', 29);
sandra.setEdad(18);
sandra.setApellido('Guerrero Flores');
console.log(sandra.nombre, sandra.edad, sandra.apellido);
console.log(sandra.describe());

/*
  Crea una clase Product que recibe un nombre y un valor
  tiene un método (value) que regresa su valor con iva (x1.16)

  Crea otra clase Cart que recibe un arreglo de Product
  tiene un método (add) que recibe un Product y lo agrega a su lista
  tiene un método (total) que regresa el total de todos los Product(con iva)

  Crea otra clase Food que hereda de product
  su método value regresa el valor sin iva
  Esta clase debería poder usarse en Cart
*/


class Product {
  constructor(nombre, valor) {
    this.nombre = nombre;
    this.valor = valor;
  }

  value() {
    return this.valor * 1.16;
  }
}

class Cart {
  constructor() {
    this.lista = []
  }

  add(product) {
    if (!(product instanceof Product)) {
      throw new Error("El producto debe ser de tipo Product.");
    }
    this.lista.push(product);
  }

  total() {
    var total = 0;
    for (var i in this.lista) {
      total += this.lista[i].value();
    }
    return total;
  }
}

class Food extends Product {
  constructor(nombre, valor) {
    super(nombre, valor);
    this.nombre = nombre;
    this.valor = valor;
  }
  value() {
    return this.valor;
  }
}

let cart = new Cart();
let producto_1 = new Product("jabon", 10)
let producto_2 = new Product("shampoo", 38)
cart.add(producto_1);
cart.add(producto_2);
console.log(cart.total())
let producto_3 = new Food("Manzanas", 10)
cart.add(producto_3);
console.log(cart.total())