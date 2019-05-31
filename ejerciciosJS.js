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
// Extiende la función anterior para atrapar el error e imprimir su mensaje y stack

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
    if (elementos != null){
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
    if (elementos != null){
      arreglo.push(elementos);
    }
    elementos = prompt('Dame un valor numérico: ');
  }
  elSet = new Set(arreglo);
  var resultadoSinRepetir = JSON.stringify( Array.from(elSet));
  document.getElementById("resultadoSinRepetir").innerHTML = resultadoSinRepetir;
}
