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

function valorRepetido(valor, arr) {
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
// Divide un número de 3 dígitos en sus centenas, decenas y unidades
// 103 -> 1 centena, 0 decenas, 3 unidades
function numCentenas(cantidad) {
  var num = cantidad.toString();
  var result = num[0] + ' centenas' + ', ' + num[1] + ' decenas' + ', ' + num[2] + ' unidades';
  console.log(result);
}

// Regresa todos los caracteres que no sean letras de una cadena

