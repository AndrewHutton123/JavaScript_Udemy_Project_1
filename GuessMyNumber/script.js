'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number';

document.querySelector('.score').textContent = '34';

*/

const secretNumber = Math.trunc(Math.random()*20) + 1;

let score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener
('click',function(){
    const guess = Number(document.querySelector(
    '.guess').value);

    console.log(guess);
    //When there is no input
    if(!guess){
        document.querySelector('.message').textContent = 
        'No Number';
    //When Player Wins
    } else if (guess === secretNumber){
        document.querySelector('.message').textContent = 
        'Correct Number';
        document.querySelector('body').style.backgroundColor = 
        '#60b347';
        document.querySelector('.number').style.width = '30rem';
    //When Guess is too High
    } else if (guess > secretNumber){
        if (score > 1  ){
            document.querySelector('.message').textContent = 
            'Too High'
            score --;
            document.querySelector('.score').textContent = 
            score;
        } else{
            document.querySelector('.message').textContent = 
            `You've Lost The Game`
            document.querySelector('.score').textContent = 
            0;
        }
    //When Guess is too Low
    }else if (guess < secretNumber){
        if (score > 1){
            document.querySelector('.message').textContent = 
        'Too Low' 
        score --;
        document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = 
            `You've Lost The Game`
            document.querySelector('.score').textContent = 
            0;
        }
        
    }
});