'use strict';

const house = document.querySelector('#kohde')
let student = prompt("Type in your name: ")
const choice = Math.floor(Math.random() * 4);

if (choice === 1)
    house.innerHTML = student + ', you are a Slytherin!'
else if (choice === 2)
    house.innerHTML = student + ', you are a Gryffindor!'
else if (choice === 3)
    house.innerHTML = student + ', you are a Ravenclaw!'
else
{
    house.innerHTML = student + ', you are a Hufflepuff!'
}