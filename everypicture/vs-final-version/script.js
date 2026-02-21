(function(){
    'use strict';
    console.log('reading js');

    // const open = document.querySelector('.open');

    document.querySelector('.open').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#overlay').className = 'showing';
    });

    document.querySelector('.close').addEventListener('click', function(){
        event.preventDefault();
        document.querySelector('#overlay').className = 'hidden';
    });


    document.querySelector('.open2').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#overlay2').className = 'showing2';
    });

    document.querySelector('.close2').addEventListener('click', function(){
        event.preventDefault();
        document.querySelector('#overlay2').className = 'hidden2';
    });


    document.querySelector('.open3').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#overlay3').className = 'showing3';
    });

    document.querySelector('.close3').addEventListener('click', function(){
        event.preventDefault();
        document.querySelector('#overlay3').className = 'hidden3';
    });



    document.querySelector('.open4').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#overlay4').className = 'showing4';
    });

    document.querySelector('.close4').addEventListener('click', function(){
        event.preventDefault();
        document.querySelector('#overlay4').className = 'hidden4';
    });



    document.querySelector('.open5').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#overlay5').className = 'showing5';
    });

    document.querySelector('.close5').addEventListener('click', function(){
        event.preventDefault();
        document.querySelector('#overlay5').className = 'hidden5';
    });
    
})();