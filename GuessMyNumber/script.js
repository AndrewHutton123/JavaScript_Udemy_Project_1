'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number';

document.querySelector('.score').textContent = '34';

*/

const secretNumber = Math.trunc(Math.random()*20)+1;
document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener
('click',function(){
    const guess = Number(document.querySelector(
    '.guess').value);

    console.log(guess);

    if(!guess){
        document.querySelector('.message').textContent = 'No Number';
    } else if (guess === secretNumber){
        document.querySelector('.message').textContent = 'Correct Number';
    } else if (guess > secretNumber){
        document.querySelector('.message').textContent = 'Too High' 
    }else if (guess < secretNumber){
        document.querySelector('.message').textContent = 'Too Low' 
    }
});