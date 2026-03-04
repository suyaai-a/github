(function(){
    'use strict';
    console.log('reading js');

    // const open = document.querySelector('.open');

    // when the image is clicked, the overlay shows
    document.querySelector('.open').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#overlay').className = 'showing';
    });
    // when image is closed by the x button, the overlay is hidden
    document.querySelector('.close').addEventListener('click', function(){
        event.preventDefault();
        document.querySelector('#overlay').className = 'hidden';
    });


    document.querySelector('.open2').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#overlay2').className = 'showing2';
    });

    document.querySelector('#close2').addEventListener('click', function(){
        event.preventDefault();
        document.querySelector('#overlay2').className = 'hidden';
    });


    document.querySelector('.open3').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#overlay3').className = 'showing3';
    });

    document.querySelector('#close3').addEventListener('click', function(){
        event.preventDefault();
        document.querySelector('#overlay3').className = 'hidden';
    });



    document.querySelector('.open4').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#overlay4').className = 'showing4';
    });

    document.querySelector('#close4').addEventListener('click', function(){
        event.preventDefault();
        document.querySelector('#overlay4').className = 'hidden';
    });



    document.querySelector('.open5').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#overlay5').className = 'showing5';
    });

    document.querySelector('#close5').addEventListener('click', function(){
        event.preventDefault();
        document.querySelector('#overlay5').className = 'hidden';
    });
    
})();