(function(){
    'use strict';
    console.log('reading js');

    const homepage = document.querySelector('#homepage');
    const playscreen = document.querySelector('#playscreen');
    const start = document.querySelector('#start');
    const flip1 = document.querySelector('#flip1');
    const flip2 = document.querySelector('#flip2');
    const overlay = document.querySelector('#overlaymsg p')
    const card1 = document.querySelector('#card1');
    const card2 = document.querySelector('#card2');
    const score1 = document.querySelector('#score1');
    const score2 = document.querySelector('#score2');
    const score = document.querySelector('#score1, #score2');

    const actions1 = document.querySelector('#actions1');
    const actions2 = document.querySelector('#actions2');

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
        sum: 0,
        index: 0, 
        // index: which player turn it is
        gameEnd: 29

    };

    start.addEventListener('click', function() {
        homepage.className = 'hidden';
        playscreen.className = 'showing';
        
        gameData.index = Math.round(Math.random());
        setUpTurn();

    });

    flip1.addEventListener('click', function(){
        shuffleCard();
    });

    flip2.addEventListener('click', function(){
        shuffleCard();
    });

    function setUpTurn(){

        overlay.innerHTML = `${gameData.players[gameData.index]}'s turn!`;

        if(gameData.index === 0){
            actions1.classList = "showing";
            actions2.classList = "hidden";
        } else if (gameData.index === 1){
            actions2.classList = "showing";
            actions1.classList = "hidden";
        }

        document.querySelector('#message').classList = 'showing';

        setTimeout(function(){
            document.querySelector('#message').classList = 'hidden';
        },2000);

    }

    // flip1.addEventListener('click', function(){
    //     player1score.innerHTML = `<p>Player 1:<br> ${gameData.score[gameData.index]}</p>`;
    //     playscreen.innerHTML += `<img src="images/${gameData.deck[gameData.shuffle1-1]}"> <img src="images/${gameData.deck[gameData.shuffle2-1]}">`;
    // });

    

    function shuffleCard(){

        gameData.shuffle1 = Math.floor(Math.random()*6) + 1;
        gameData.shuffle2 = Math.floor(Math.random()*6) + 1;

        if(gameData.index === 0){
            card1.innerHTML = `<img src="images/${gameData.deck[gameData.shuffle1-1].img}">
                            <img src="images/${gameData.deck[gameData.shuffle2-1].img}">`;
        } else {
            card2.innerHTML = `<img src="images/${gameData.deck[gameData.shuffle1-1].img}">
                            <img src="images/${gameData.deck[gameData.shuffle2-1].img}">`;
        }

        gameData.sum = gameData.shuffle1 + gameData.shuffle2;

         // if two 1's are rolled
        if(gameData.sum === 2){
            console.log('snake eyes!');
            overlay.innerHTML += '<p>Oh snap! Snake eyes!</p>';
            // set the score for the current player
            gameData.score[gameData.index]= 0;
            gameData.index ? (gameData.index=0) : (gameData.index=1);
            // we will add ShowCurrentScore() function here
            showCurrentScore();
            // wait 2 seconds
            setTimeout(setUpTurn, 2000);
        }
        // if either die is a 1
        else if(gameData.shuffle1 === 1 || gameData.shuffle2 === 1){
            console.log('one of the two decks is a 1');
            gameData.index ? (gameData.index=0) : (gameData.index=1);
            overlay.innerHTML += `<p>Sorry, one of your rolls was one, switching to ${gameData.players[gameData.index]}</p>`;
            setTimeout(setUpTurn, 2000);
        }

        // if neither die is a 1
        else {
            console.log('neither die was a 1, game continues...');
            gameData.score[gameData.index] = gameData.score [gameData.index] + gameData.sum;
            // actionArea.innerHTML= '<button id="rollagain">Roll again</button> or <button id = "pass">Pass</button>';

            // document.querySelector('#rollagain').addEventListener('click', function(){
            //     shuffleCard();
            // });

            // document.querySelector('#pass').addEventListener('click', function(){
            //     gameData.index ? (gameData.index=0) : (gameData.index=1);
            //     setUpTurn();
            // });
            checkWinningCondition();
        }
        
    }

    function checkWinningCondition(){
        if(gameData.score[gameData.index] /* current player score */ > gameData.gameEnd /*game end point */){
            overlay.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;

            document.querySelector('#overlaymsg').innerHTML = 'start a new game?';
        } else {
            // showCurrentScore() function will go here...
            showCurrentScore();
        }
    }

    function showCurrentScore(){
        score1.innerHTML = `<p>Player 1:<strong><br> ${gameData.score[0]}</strong> points</p> <img src="images/orangecat.png" alt="orange cat" height="140" width="140">`
        score2.innerHTML = `<p>Player 2:<strong><br> ${gameData.score[1]}</strong> points</p> <img src="images/browncat.png" alt="brown cat" height="140" width="140">`
    }

    
})();