'use strict';
let kohde = document.querySelector('#kohde');

let name = prompt('Type your name: ');
kohde.innerHTML = 'Hello, ' + name + '!';