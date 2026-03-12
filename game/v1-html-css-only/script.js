(function(){
    'use strict';
    console.log('reading js');

    const homepage = document.querySelector('#homepage');
    const playscreen = document.querySelector('#playscreen');
    const start = document.querySelector('#start');
    const player1score = document.querySelector('#score1 p');
    const flip1 = document.querySelector('#flip1');
    const overlay = document.querySelector('#overlaymsg p')
    const firstcard = document.querySelector('#firstcard');
    const secondcard = document.querySelector('#secondcard');
    const thirdcard = document.querySelector('#thirdcard');
    const fourthcard = document.querySelector('#fourthcard');
    const card1 = document.querySelector('#card1');
    const card2 = document.querySelector('#card2');

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
        

        gameData.index = Math.round(Math.random());
        console.log(gameData.index);
        setUpTurn();
        // displayPopUp(message)
    });

    // function displayPopUp(message){
    //     document.querySelector('#overlaymsg').innerHTML=`<p>${}</p>`
    // }


    function setUpTurn(){
        overlay.innerHTML = `${gameData.players[gameData.index]}'s turn!`;
        document.querySelector('#message').classList = 'showing';
        setTimeout(setUpTurn, 2000);

        setTimeout(function(){
            document.querySelector('#message').classList = 'hidden';
        },2000);

        shuffleCard();
    }

    // flip1.addEventListener('click', function(){
    //     player1score.innerHTML = `<p>Player 1:<br> ${gameData.score[gameData.index]}</p>`;
    //     playscreen.innerHTML += `<img src="images/${gameData.deck[gameData.shuffle1-1]}"> <img src="images/${gameData.deck[gameData.shuffle2-1]}">`;
    // });

    function shuffleCard(){
        document.querySelector('#flip1').addEventListener('click', function(){
            gameData.shuffle1 = Math.floor(Math.random()* 6) + 1;
            gameData.shuffle2 = Math.floor(Math.random()* 6) + 1;

            firstcard.innerHTML = `<img src="images/${gameData.deck[gameData.shuffle1-1]}">`;
            secondcard.innerHTML = `<img src="images/${gameData.deck[gameData.shuffle2-1]}">`;
            gameData.sum = gameData.shuffle1 + gameData.shuffle2;
        });
        
        // console.log(gameData.roll1, gameData.roll2);
        // gameData.roll1 = 1;
        // gameData.roll2 = 1;
    }



    // function throwDice(){
    //     gameData.rollSum = gameData.shuffle1 + gameData.shuffle2;
    // }

    function throwDice(){
        gameData.rollSum = gameData.shuffle1 + gameData.shuffle2;
    }

    
})();