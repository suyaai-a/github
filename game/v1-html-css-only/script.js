(function(){
    'use strict';
    console.log('reading js');

    const homepage = document.querySelector('#homepage');
    const playscreen = document.querySelector('#playscreen');
    const start = document.querySelector('#start');
    const player1score = document.querySelector('#score1 p');
    const flip1 = document.querySelector('#flip1');

    start.addEventListener('click', function() {
        homepage.className = 'hidden';
        playscreen.className = 'showing';
    });

    flip1.addEventListener('click', function(){
        player1score.innerHTML = 'Good luck!!';
    });

    
})();