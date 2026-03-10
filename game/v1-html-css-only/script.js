(function(){
    'use strict';
    console.log('reading js');

    const homepage = document.querySelector('#homepage');
    const playscreen = document.querySelector('#playscreen');
    const start = document.querySelector('#start');
    const player1score = document.querySelector('#score1 p');
    const flip1 = document.querySelector('#flip1');
    const overlay = document.querySelector('#overlaymsg p')

    const gameData = {
        deck: [
            {img: "card1.png", value: 1},
            {img: "card2.png", value: 2},
            {img: "card3.png", value: 3},
            {img: "card4.png", value: 4},
            {img: "card5.png", value: 5},
            {img: "card6.png", value: 6},
        ],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        shuffle1: 0,
        shuffle2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29

    };

    start.addEventListener('click', function() {
        homepage.className = 'hidden';
        playscreen.className = 'showing';

        
    });

    // function setUpTurn(){
    //     overlay.innerHTML = `<p>Player ${gameData.players[gameData.index]}'s turn! </p>`
    //     setTimeout(setUpTurn, 2000);
    // }

    flip1.addEventListener('click', function(){
        

        player1score.innerHTML = `<p>Player 1:<br> ${gameData.players[gameData.index]}</p>`;
        playscreen.innerHTML += `<img src="images/${gameData.deck[gameData.shuffle1-1]}"> <img src="images/${gameData.deck[gameData.shuffle2-1]}">`;
        throwDice();
    });

    function throwDice(){
        gameData.rollSum = gameData.shuffle1 + gameData.shuffle2;
    }

    
})();