'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number';

document.querySelector('.score').textContent = '34';

*/

document.querySelector('.check').addEventListener
('click',function(){
    const guess = Number(document.querySelector(
    '.guess').value);

    console.log(guess);

    if(!guess){
        document.querySelector('.message').textContent = 'No Number';
    }
});