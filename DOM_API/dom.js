// Para todos los ejercicios, si no se especifica que se espera que haga un listener, asuman que debe imprimir algo
window.onload = () => {
  // Agrega contenido a div1 (ejemplo: 'I am a div!')
  const ej1 = document.querySelector('#div1');
  ej1.innerHTML = 'I am a div';

  // Agrega contenido al span de div2 (ejemplo: 'I am a span!')
  const ej2 = document.querySelector('#div2 .a-span');
  ej2.innerText = 'I am a span!';

  // Agrega un listener de click al boton de div3, el listener debe imprimir algo (ejemplo: 'I was clicked')
  const ej3 = document.getElementById('div3');
  ej3.addEventListener('click', () => console.log('I was clicked'));
  // Agrega un listener de click al boton de div4, no dejes que haga el submit e imprime 'Default prevented'
  const ej4 = document.querySelector('#div4 .a-button');
  ej4.addEventListener('click', (event) => { event.preventDefault(); console.log('Default prevented'); });
  // Agrega un listener de click a div5, imprime el target del evento
  const ej5 = document.querySelector('#div5');
  ej5.addEventListener('click', (event) => { console.log(event.target); });
  // Agrega un listener de click al span de div6 y a la div6, imprime el target del evento en ambos y si es el listener de div o de span
  const ej6 = document.querySelector('#div6');
  ej6.addEventListener('click', (event) => { console.log(`div ${event.target}`); });
  const ej7 = document.querySelector('#div6 .a-span');
  ej7.addEventListener('click', (event) => { console.log(`span ${event.target}`); });
  // Agrega un listener de click al span de div7 y a la div7, imprime el target del evento en ambos y si es el listener de div o de span, evita que el click del span se propague
  const ej8 = document.querySelector('#div7');
  ej8.addEventListener('click', (event) => { console.log(`div ${event.target}`); });
  const ej9 = document.querySelector('#div7 .a-span');
  ej9.addEventListener('click', (event) => { event.stopPropagation(); console.log(`span ${event.target}`); });
  // Selecciona los spans de div8, agrega el numero que son como contenido a cada una (1-6)
  const ej10 = document.querySelectorAll('#div8 .a-span');
  ej10.forEach((valor, i) => {
    valor.innerText = i + 1;
  });

  // Agrega un listener de click al primer y ultimo span de div9
  const ej11 = document.querySelector('#div9 .a-span');
  const ej12 = document.querySelector('#div9 .a-span:last-of-type');
  ej11.addEventListener('click', () => console.log('Soy el primero'));
  ej12.addEventListener('click', () => console.log('Soy el iltimo'));;

  // Agrega un listener de click a los spans impares de div10 (1, 3, 5)
  const ej13 = document.querySelectorAll('#div10 .a-span:nth-of-type(odd)');
  ej13.forEach((valor) => {
    valor.addEventListener('click', () => console.log('soy impar'));
  });
  // Agrega otro span a div11, con 'not-a-span' como clase y 'Not a span!' como contenido
  const ej14 = document.createElement('span');
  ej14.innerHTML = 'Not a span';
  ej14.className = 'not-a-span';
  document.querySelector('#div11').appendChild(ej14);
  // Cambia el src de la imagen de div12 a dogge.jpg (adjunto)
  const ej15 = document.querySelector('#div12 img');
  ej15.src = 'dogge.jpg';


  // Pon 'THE-span' como id del span de div13
  const ej16 = document.querySelector('#div13 span');
  ej16.id = 'THE-span';

  /**
   * Agrega listeners a los 3 inputs de div14.
   * change para changeInput
   * blur para blurInput
   * ambos para bothInput
   *
   * Los listeners deben imprimir el nombre del target del evento
   */

  const ej17 = document.querySelectorAll('#div14 input');
  ej17[0].addEventListener('change', (event) => console.log(event.target.name));
  ej17[1].addEventListener('blur', (event) => console.log(event.target.name));
  ej17[2].addEventListener('change', (event) => console.log(event.target.name));
  ej17[2].addEventListener('blur', (event) => console.log(event.target.name));


  /**
   * Agrega un listener al span de div15 que, cuando el mouse pase por encima,
   * cambie el texto a 'I am being hovered'.
   * Debe volver al texto original cuando el mouse deje de estar encima.
   */


  const ej18 = document.querySelector('#div15 span');
  ej18.addEventListener('mouseover', () => ej18.innerHTML = 'I am being hovered');
  ej18.addEventListener('mouseout', () => ej18.innerHTML = 'I am not being hovered');

  /**
 * Agrega un listener de scroll a la div16.
 * Debe imprimir algo ('I was scrolled') cada vez que se hace scroll de ella.
 * Se recomienda NO usar alert para este ejercicio.
 */

  const ej19 = document.querySelector('#div16');
  ej19.addEventListener('scroll', () => console.log('I was scrolled'));
  
};
