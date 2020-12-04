"use strict";

var button = document.querySelector('#verde');
var body = document.querySelector('body');
button.addEventListener('click', function (e) {
  body.style.backgroundColor = 'green';
});
var retocarButton = document.querySelector('#retocar');
var ultimoParrafo = document.querySelector('section p:last-of-type');
retocarButton.addEventListener('click', function (e) {
  ultimoParrafo.classList.add('retocar');
});
var fruitElem = document.querySelectorAll('ul li');
var filtro = document.querySelector('#filtro');
var salida = document.querySelector('#salida');
filtro.addEventListener('keyup', function (e) {
  var salidaValues = '';
  fruitElem.forEach(function (fruit) {
    if (fruit.textContent.includes(e.target.value)) salidaValues += fruit.textContent + ' | ';
  });
  console.log(salidaValues);
  salida.textContent = salidaValues;
});
var footer = document.createElement('footer');
footer.textContent = 'Copyright 2020';
body.appendChild(footer);
var padre = document.querySelector('#padre');
var main = document.querySelector('main');
padre.addEventListener('click', function () {
  var button = document.createElement('button');
  button.textContent = 'Hijo';
  button.addEventListener('click', function (e) {
    return padre.remove();
  });
  main.appendChild(button);
});

//# sourceMappingURL=index.js.map