'use strict';
let kohde = document.querySelector('#kohde')

let num1 = parseInt(prompt('Type 1. number: '));
let num2 = parseInt(prompt('Type 2. number: '));
let num3 = parseInt(prompt('Type 3. number: '));

let sum = num1 + num2 + num3
let product = num1 * num2 * num3
let average = sum / 3

kohde.innerHTML =
    'sum = ' + sum +
    ', product = ' + product +
    ', average = ' + average;
