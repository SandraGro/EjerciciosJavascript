// Imprime la fecha actual
var fecha = new Date();
dia = fecha.getDate();
mes = fecha.getMonth() + 1;
anio = fecha.getFullYear();
document.getElementById("fecha").innerHTML = `${dia}/${mes}/${anio}`;


// Obten el área de un triángulo. 
//Pidele los 3 lados al usuario
// var lado1 = prompt("Para sacar area triangulo, Dame medida lado 1: ");
// var lado2 = prompt("Dame medida lado 2: ");
// var lado3 = prompt("Dame medida lado 3: ");
function areaTriangulo() {
  var lado1 = parseFloat(document.getElementById("lado1").value);
  var lado2 = parseFloat(document.getElementById("lado2").value);
  var lado3 = parseFloat(document.getElementById("lado3").value);
  var s = (lado1 + lado2 + lado3) / 2;
  var area = Math.sqrt(s * (s - lado1) * (s - lado2) * (s - lado3));
  //document.writeln('El area del triangulo es: ' + area);
  console.log('El área del triángulo es: ' + area);
  document.getElementById("resultado").innerHTML = area;
}

// Voltea una string dada por el usuario
function reverse() {
  var string = document.getElementById("texto").value;
  var result = string.split('').reverse().join('');
  document.getElementById("resultado2").innerHTML = result;
}


// Voltea una string dada por el usuario sin usar el método de reverse

function reverse2(str) {
  var str = document.getElementById("texto2").value;
  var rev = '';
  var arr = str.split('');
  for (let i = arr.length - 1; i >= 0; i--) {
    rev += arr[i];
  }
  document.getElementById("resultado3").innerHTML = rev;

}

// Convierte una temperatura dada en C o F a F o C, respectivamente
function convertirCaF(numero) {
  var gradosCaF = (numero * 9 / 5) + 32;
  return gradosCaF;
}
function convertirFaC(numero) {
  var gradosFaC = (numero - 32) * 5 / 9;
  return gradosFaC;
}

function convertirGrados() {
  var numero = parseInt(document.getElementById("numero").value);
  var unidad = document.getElementById("unidad").value;
  if (numero.length == 0) {
    //alert ("Ingresa un numero") ;
    return 0;
  }

  switch (unidad) {
    case "F":
      document.getElementById("resultado4").innerHTML = convertirFaC(numero);
      break;

    case "C":
      document.getElementById("resultado4").innerHTML = convertirCaF(numero);
      break;
  }
};

// Crea un objeto que tenga una propiedad cuyo nombre es definido por el usuario. Su valor debe ser verdadero
function objeto() {
  var nombreDePropiedad = document.getElementById("propiedad").value;
  var miObjeto = {}
  miObjeto[nombreDePropiedad] = true
  document.getElementById("resultadoObjeto").innerHTML = JSON.stringify(miObjeto);
}

// Realiza la suma de los valores que de el usuario hasta recibir un valor negativo
function sumaValores() {
  var numero = 0;
  var total = 0;

  while (numero >= 0) {
    total += parseFloat(numero);
    numero = prompt("Dame numero a sumar: ");
  }
  document.getElementById("resultadoSumaValores").innerHTML = total;
}

// Convierte a mayúscula la primer letra de cada palabra en una cadena dada por el usuario
function primeraMayus() {
  var string2 = document.getElementById("texto3").value;
  var texto = string2.split(" ")
  for (var i = 0; i < texto.length; i++) {
    texto[i] = texto[i][0].toUpperCase() + texto[i].slice(1)
  }
  var resultMayusc = texto.join(" ")
  document.getElementById("resultado5").innerHTML = resultMayusc;
}
// Revisa si un número dado es múltiplo de 3 o de 7
function multiplo() {
  var numMultiplo = document.getElementById("numeroMultiplo").value;
  if (!(numMultiplo % 3) && !(numMultiplo % 7)) {
    var respuesta = 'Es múltiplo de 3 y 7';
  } else if (numMultiplo % 3 === 0) {
    respuesta = 'Es múltiplo de 3';
  } else if (numMultiplo % 7 === 0) {
    respuesta = 'Es múltiplo de 7';
  } else {
    respuesta = 'No es múltiplo';
  }
  document.getElementById("resultadoMultiplo").innerHTML = respuesta;
}

// Revisa cuantas veces se repite un caracter dado en una cadena dada
function caracterRepetido(letra, texto) {
  var texto = document.getElementById("textoInicial").value;
  var letra = document.getElementById("caracterBuscar").value;
  var letraMinus = letra.toLowerCase();
  var textoMinus = texto.toLowerCase();
  var index = textoMinus.indexOf(letraMinus);
  var total = 0;
  while (index >= 0) {
    total++;
    index = textoMinus.indexOf(letraMinus, index + 1)
  }
  var veces = total;
  document.getElementById("resultadoRepetido").innerHTML = total;
}

//Revisa cuantas veces se repite un valor dado en un arreglo
function valorRepetido() {
  var valor = document.getElementById("valorBuscar").value;
  var valores = 0;
  var arr = [];

  while (valores >= 0) {
    arr.push(valores);
    valores = prompt('Dame un valor numérico: ');
  }
  var count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == valor) {
      count++;
    }
  }
  document.getElementById("resValorRepetido").innerHTML = count;
}
// Divide un número de 3 dígitos en sus centenas, decenas y unidades 103 -> 1 centena, 0 decenas, 3 unidades
function numCentenas() {
  var cantidad = document.getElementById("cantidad").value;
  var num = cantidad.toString();
  var result = num[0] + ' centenas' + ', ' + num[1] + ' decenas' + ', ' + num[2] + ' unidades';
  document.getElementById("centenasDecenasUnidades").innerHTML = result;
}

// Regresa todos los caracteres que no sean letras de una cadena
function noLetras() {
  var string = document.getElementById("cadenaTexto").value;
  var arr = [];
  for (let i = 0; i < string.length; i++) {
    if (!string[i].match(/[A-Za-z]/)) {
      arr.push(string[i]);
    }
  } var resultadoSinLetras = (arr.join(''));
  document.getElementById("sinLetras").innerHTML = resultadoSinLetras;
}

// Haz una función que lanza un error con el mensaje dado por el usuario
function usuarioError() {
  var textoError = document.getElementById("textoError").value;
  throw new Error(textoError);
}

// Extiende la función anterior para atrapar el error e imprimir su mensaje y stack

function atrapaError() {
  try {
    usuarioError()
  } catch (err) {
    document.getElementById('error').innerHTML = err;
    document.getElementById('errorStack').innerHTML = err.stack;
    console.log(err.stack);
  }
}

// Suma los contenidos de un arreglo de números
function sumaArreglo() {
  var elementos = 0;
  var arr = [];
  while (elementos >= 0) {
    arr.push(elementos);
    elementos = prompt('Dame un valor numérico: ');
  }
  var total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += parseFloat(arr[i]);
  }
  document.getElementById("totalSuma").innerHTML = total;
}

// Regresa un arreglo nuevo con el cuadrado de cada valor del arreglo original
function arrCuadrados() {
  var elementos = null;
  var arr = [];
  while (elementos >= 0) {
    if (elementos != null) {
      arr.push(elementos);
    }
    elementos = prompt('Dame un valor numérico: ');
  }
  var arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    arr2.push(arr[i] * arr[i]);
  }
  document.getElementById("arrCuadrados").innerHTML = JSON.stringify(arr2);
}

// Regresa que tipo de ángulo es el dado
/*
  Agudo: 0 a 90 grados
  Recto: 90 grados
  Obtuso: 90 a 180 grados
  Llano: 180 grados
*/
function tipoAngulo() {
  var grado = document.getElementById("grado").value;
  if (grado >= 0 && grado < 90) {
    var angulo = 'Agudo';
  } else if (grado == 90) {
    angulo = 'Recto';
  } else if (grado > 90 && angulo < 180) {
    angulo = 'Obtuso';
  } else if (grado == 180) {
    angulo = 'Llano';
  } else {
    angulo = 'Ingresa una medida correcta';
  }
  document.getElementById("angulo").innerHTML = angulo;
}

// Regresa un arreglo nuevo sin los valores repetidos de un arreglo original
function sinRepetidos() {
  var elementos = null;
  var arreglo = [];
  while (elementos >= 0) {
    if (elementos != null) {
      arreglo.push(elementos);
    }
    elementos = prompt('Dame un valor numérico: ');
  }
  elSet = new Set(arreglo);
  var resultadoSinRepetir = JSON.stringify(Array.from(elSet));
  document.getElementById("resultadoSinRepetir").innerHTML = resultadoSinRepetir;
}

// Quita los valores repetidos de un arreglo (sin usar otro arreglo)
function sinRepetidos2() {
  var elementos = null;
  var arreglo = [];
  while (elementos >= 0) {
    if (elementos != null) {
      arreglo.push(elementos);
    }
    elementos = prompt('Dame un valor numérico: ');

    for (var i in arreglo) {
      for (var j in arreglo) {
        if (arreglo[i] == arreglo[j] && i != j) {
          j++;
          arreglo.splice(i, 1);
        }
      }
    }
  }
  document.getElementById("resultadoSinRepetir2").innerHTML = arreglo;
}

// Convierte un número binario dado por el usuario a decimal
function binario_a_decimal() {
  var num = document.getElementById("numeroBinario").value;
  document.getElementById("binarioDecimal").innerHTML = parseInt(num, 2);
}

// Convierte un número decimal dado por el usuario a binario, octal y hexadecimal (bases 2, 8 y 16)
function decimal_a_binario(num) {
  return num.toString(2);
}

function decimal_a_hex(num) {
  return num.toString(16);
}

function decimal_a_octal(num) {
  return num.toString(8);
}


function procesaFunciones() {
  let numeroDecimal = parseInt(document.getElementById("numeroDecimal").value);
  let unidades = document.getElementById("unidades").value;
  if (numeroDecimal.length == 0) {
    //alert ("Ingresa un numero") ;
    return 0;
  }

  switch (unidades) {
    case "binario":
      document.getElementById("resultadoConversion").innerHTML = decimal_a_binario(numeroDecimal);
      break;

    case "octal":
      document.getElementById("resultadoConversion").innerHTML = decimal_a_octal(numeroDecimal);
      break;

    case "hexa":
      document.getElementById("resultadoConversion").innerHTML = decimal_a_hex(numeroDecimal);
      break;
  }
};

// Regresa la cantidad de valores que comparten dos arreglos diferentes

function compartidos() {
  var valores = null;
  var arr1 = [];
  var arr2 = [];

  while (valores >= 0) {
    if (valores != null)
      arr1.push(valores);
    valores = prompt('Dame un valor numérico del arreglo 1: ');
  }

  valores = null;
  while (valores >= 0) {
    console.log(valores);
    if (valores != null)
      arr2.push(valores);
    valores = prompt('Dame un valor numérico del arreglo 2: ');
  }

  var respuesta = arr1.filter(function (valor) {
    return arr2.includes(valor);
  });
  document.getElementById("valoresRepetidos").innerHTML = JSON.stringify(respuesta);
}

// Valida que una cadena dada no tenga espacios en blanco
function tieneEspacios() {
  let texto = document.getElementById("textoConEspacios").value; document.getElementById("textoConEspacios").value;
  if (texto.split(" ").length > 1) {
    document.getElementById("espaciosVacios").innerHTML = 'Tiene espacios vacios';
  } else {
    document.getElementById("espaciosVacios").innerHTML = 'No tiene espacios vacios';
  }
}

// Dada una cadena, determina su valor de scrabble
/*
  1: E, A, I, O, N, R, T, L, S, U
  2: D, G
  3: B, C, M, P
  4: F, H, V, W, Y
  5: K
  8: J, X
  10: Q, Z
*/
function valorPalabra() {
  let str = document.getElementById("palabraScrabble").value;
  let letrasAbc = { A: 1, B: 3, C: 3, D: 2, E: 1, F: 4, G: 2, H: 4, I: 1, J: 8, K: 5, L: 1, M: 3, N: 1, O: 1, P: 3, Q: 10, R: 1, S: 1, T: 1, U: 1, V: 4, W: 4, X: 8, Y: 4, Z: 10 }
  var puntos = 0;
  let palabra = str.toUpperCase();
  console.log(palabra);
  for (i in palabra) {
    let letra = palabra[i];
    puntos += letrasAbc[letra];
  }
  document.getElementById("puntos").innerHTML = puntos;

}

// Determina si una cadena dada por el usuario es un palindromo
function palindromo(palabra) {
  var str = palabra.split("")
    .reverse().join("")
    .toUpperCase()
    .replace(/ /g, "");

  if (str === palabra.toUpperCase().replace(/ /g, "")) {
    console.log("Es un palindromo");
  }
  else {
    console.log("No es un palindromo");
  }
}

// Implementa una lista ligada
class LinkedList {
  constructor() {
    this.head = null
    this.current = null
  }

  add(valor) {
    let nuevoNodo = new LinkedListNode(valor);
    if (this.head == null) {
      this.head = nuevoNodo
      this.current = this.head
    } else {
      let nodoActual = this.head;
      while (nodoActual.siguiente != null) {
        nodoActual = nodoActual.siguiente;
      }
      nodoActual.siguiente = nuevoNodo;
    }
  }

  next() {
    if (this.current == null) {
      return null;
    }

    this.current = this.current.siguiente;
    if (this.current == null) {
      return null;
    }

    return this.current.valor
  }
}

class LinkedListNode {
  constructor(valor) {
    this.valor = valor
    this.siguiente = null
  }
}

let linkedList = new LinkedList()
linkedList.add(10)
linkedList.add(20)
linkedList.add(30)

console.log(linkedList.next()) // 20
console.log(linkedList.next()) // 30
console.log(linkedList.next()) // null
console.log(linkedList.next()) // null
// Implementa una lista doblemente ligada
class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.current = null;
  }

  add(valor) {
    let nodoNuevo = new DoubleLinkedListNode(valor);
    if (this.head == null) {
      this.head = nodoNuevo;
      this.tail = nodoNuevo;
      this.current = nodoNuevo;
    } else {
      nodoNuevo.anterior = this.tail;
      this.tail.siguiente = nodoNuevo;
      this.tail = nodoNuevo
    }
  }

  next() {
    if (this.current == null) {
      return null;
    }

    this.current = this.current.siguiente;
    if (this.current == null) {
      return null;
    }

    return this.current.valor
  }

  prev() {
    if (this.current == null) {
      return null;
    }

    this.current = this.current.anterior;
    if (this.current == null) {
      return null;
    }

    return this.current.valor
  }
}

class DoubleLinkedListNode {
  constructor(valor) {
    this.valor = valor
    this.siguiente = null
    this.anterior = null
  }
}


let doubleLinkedList = new DoubleLinkedList()
doubleLinkedList.add(10)
doubleLinkedList.add(20)
doubleLinkedList.add(30)

console.log(doubleLinkedList.next()) // 20
console.log(doubleLinkedList.next()) // 30
console.log(doubleLinkedList.prev()) // 20
console.log(doubleLinkedList.prev()) // 10
// Obten el Máximo común divisor de dos números dados
function mcd() {
  let num1 = parseInt(document.getElementById("num1mcd").value);
  let num2 = parseInt(document.getElementById("num2mcd").value);
  if (num2) {
    document.getElementById("mcd").innerHTML = (num2, num1 % num2);
  } else {
    document.getElementById("mcd").innerHTML = Math.abs(num1);
  }
}


