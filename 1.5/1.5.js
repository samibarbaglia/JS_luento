'use strict';

let v = parseInt(prompt('Input year: '));

if ((v % 4 === 0 && v % 100 !== 0) || (v % 400 === 0))
{
   document.querySelector('#kohde').innerHTML = 'Leap year';
}
else
{
    document.querySelector('#kohde').innerHTML = 'Not a leap year';
}