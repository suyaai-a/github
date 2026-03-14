(function(){
    'use strict';
    console.log('reading js');

    const homepage = document.querySelector('#homepage');
    const playscreen = document.querySelector('#playscreen');
    const start = document.querySelector('#start');
    const flip1 = document.querySelector('#flip1');
    const flip2 = document.querySelector('#flip2');
    const pass1 = document.querySelector('#pass1');
    const pass2 = document.querySelector('#pass2');
    const overlay = document.querySelector('#overlaymsg p')
    const card1 = document.querySelector('#card1');
    const card2 = document.querySelector('#card2');
    const p1score = document.querySelector('#p1score');
    const p2score = document.querySelector('#p2score');
    const actions1 = document.querySelector('#actions1');
    const actions2 = document.querySelector('#actions2');
    const endscreen = document.querySelector('#endscreen');
    const newgame = document.querySelector('#newgame');
    const endscreenText = document.querySelector('#endscreen p');
    const overlaySection = document.querySelector('#message'); 
    const overlayText = document.querySelector('#overlaymsg p'); 
    const firstcard = document.querySelector('#firstcard');
    const secondcard = document.querySelector('#secondcard');
    const thirdcard = document.querySelector('#thirdcard');
    const fourthcard = document.querySelector('#fourthcard');
    const p1cards = document.querySelectorAll('#card1 .card');
    const p2cards = document.querySelectorAll('#card2 .card');
    const flipSound = new Audio('audio/flipcard.mp3');
    const meowsound = new Audio('audio/catmeow.mp3');
    const victory = new Audio('audio/victory.mp3');

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

        flipSound.load();

        homepage.className = 'hidden';
        playscreen.className = 'showing';
        
        gameData.index = Math.round(Math.random());

        setUpTurn();

    });

    flip1.addEventListener('click', function(){

        if(gameData.index === 0){

            flipSound.currentTime = 0;
            flipSound.play();

            shuffleCard();

            p1cards.forEach(card =>{
                card.classList.add('flipped');
            });

        }

    });

    flip2.addEventListener('click', function(){

        if(gameData.index === 1){

            flipSound.currentTime = 0;
            flipSound.play();

            shuffleCard();

            p2cards.forEach(card =>{
                card.classList.add('flipped');
            });

        }

    });

    pass1.addEventListener('click', function(){
        if(gameData.index === 0){
            gameData.index = 1;
            setUpTurn();
        }
    });

    pass2.addEventListener('click', function(){
        if(gameData.index === 1){
            gameData.index = 0;
            setUpTurn();
        }
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
        },2500);

    }

    function showOverlay(msg, duration = 2500) {
        overlayText.textContent = msg;
        overlaySection.classList.add('showing');
        overlaySection.classList.remove('hidden');

        setTimeout(() => {
            overlaySection.classList.add('hidden');
            overlaySection.classList.remove('showing');
        }, duration);
    }


    function shuffleCard(){

        gameData.shuffle1 = Math.floor(Math.random()*6) + 1;
        gameData.shuffle2 = Math.floor(Math.random()*6) + 1;

        if(gameData.index === 0){

            firstcard.setAttribute("src", `images/${gameData.deck[gameData.shuffle1-1].img}`);
            secondcard.setAttribute("src", `images/${gameData.deck[gameData.shuffle2-1].img}`);

        } else {

            thirdcard.setAttribute("src", `images/${gameData.deck[gameData.shuffle1-1].img}`);
            fourthcard.setAttribute("src", `images/${gameData.deck[gameData.shuffle2-1].img}`);
        }

        gameData.sum = gameData.shuffle1 + gameData.shuffle2;

        // if player flip a 2
        if (gameData.sum === 2) {
            gameData.score[gameData.index] = 0;
            gameData.index = gameData.index === 0 ? 1 : 0;
            showCurrentScore();
            showOverlay('Oh snap! Snake eyes!', 2500);
            meowsound.currentTime = 0;
            meowsound.play();
            setTimeout(setUpTurn, 2500);

        // if player flip a 1
        } else if (gameData.shuffle1 === 1 || gameData.shuffle2 === 1) {
            gameData.index = gameData.index === 0 ? 1 : 0;
            showOverlay(`Sorry, one of your cards was one, switching to ${gameData.players[gameData.index]}`, 2500);
            meowsound.currentTime = 0;
            meowsound.play();
            setTimeout(setUpTurn, 2500);

        // if neither card is a 1
        } else {
            gameData.score[gameData.index] += gameData.sum;
            flip1.innerHTML= 'Flip again'
            flip2.innerHTML= 'Flip again'
            checkWinningCondition();
        }
    }

    function checkWinningCondition(){

        if(gameData.score[gameData.index] >= gameData.gameEnd){

            const endscreen = document.querySelector('#endscreen');

            endscreen.classList = "showing";

            victory.play();
            endscreenText.textContent =
            `${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!`;

            actions1.classList = "hidden";
            actions2.classList = "hidden";

            newgame.addEventListener('click', function(){
                location.reload();
            });

        } else {
            showCurrentScore();
        }
    }

    function showCurrentScore(){
        p1score.textContent = gameData.score[0];
        p2score.textContent = gameData.score[1];
    }

})();