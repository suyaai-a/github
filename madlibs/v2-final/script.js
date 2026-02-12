(function(){
    'use strict';
    console.log('reading js');

    const form = document.querySelector('form');
    const sections = document.querySelectorAll('section');
    const result = document.querySelector('#result');
    const header = document.querySelector('h1');


    document.querySelector('#next-1').addEventListener('click', function(e){
        if (document.querySelector('#adjective1').value == '') {
            document.querySelector('#adjective1').focus;
        } else if (document.querySelector('#verb2').value == '') {
            document.querySelector('#verb2').focus; 
        } else if (document.querySelector('#adverb2').value == '') {
            document.querySelector('#adverb2').focus; 
        } else if (document.querySelector('#number1').value == '') {
            document.querySelector('#number1').focus;
        }
        
        // else if (document.querySelector('#drink1') == '') {
        //     document.querySelector('#drink1').focus;
        // } else if (document.querySelector('#number2') == ''){
        //     document.querySelector('#number2').focus;
        // } else if (document.querySelector('#verb1') == ''){
        //     document.querySelector('#verb1').focus;
        // } else if (document.querySelector('#drink2') == ''){
        //     document.querySelector('#drink2').focus;
        // } 
        
        // else if (document.querySelector('#adjective2') == '') {
        //     document.querySelector('#adjective2').focus;
        // } else if (document.querySelector('#food') == ''){
        //     document.querySelector('#food').focus;
        // } else if (document.querySelector('#adjective3') == '') {
        //     document.querySelector('#adjective3').focus;
        // } else if (document.querySelector('#adverb1') == '') {
        //     document.querySelector('#adverb1').focus;
        // }

        else {
            e.preventDefault();
            sections[0].className = "hidden";
            sections[1].className = "showing";
        }
    });

    document.querySelector('#next-2').addEventListener('click', function(e) {
        if (document.querySelector('#drink1').value == '') {
            document.querySelector('#drink1').focus;
        } else if (document.querySelector('#number2').value == ''){
            document.querySelector('#number2').focus;
        } else if (document.querySelector('#verb1').value == ''){
            document.querySelector('#verb1').focus;
        } else if (document.querySelector('#drink2').value == ''){
            document.querySelector('#drink2').focus;
        } else {
            e.preventDefault();
            sections[1].className = "hidden";
            // show the third section
            sections[2].className = "showing";
        } 
    });

    document.querySelector('form').addEventListener('submit', function(e) {
        if (document.querySelector('#adjective2').value == '') {
            document.querySelector('#adjective2').focus;
        } else if (document.querySelector('#food').value == ''){
            document.querySelector('#food').focus;
        } else if (document.querySelector('#adjective3').value == '') {
            document.querySelector('#adjective3').focus;
        } else if (document.querySelector('#adverb1').value == '') {
            document.querySelector('#adverb1').focus;
        } else {
            e.preventDefault();
            sections[2].className = "hidden";
            // show the third section
            sections[3].className = "showing";
        } 
    });

    form.addEventListener('submit', function(event){
        event.preventDefault();

        const adjective1 = document.querySelector('#adjective1').value;
        const verb2 = document.querySelector('#verb2').value;
        const adverb2 = document.querySelector('#adverb2').value;
        const number1 = document.querySelector('#number1').value;
        const drink1 = document.querySelector('#drink1').value;
        const number2 = document.querySelector('#number2').value;
        const verb1 = document.querySelector('#verb1').value;
        const drink2 = document.querySelector('#drink2').value;
        const adjective2 = document.querySelector('#adjective2').value;
        const food = document.querySelector('#food').value;
        const adjective3 = document.querySelector('#adjective3').value;
        const adverb1 = document.querySelector('#adverb1').value;
        

        let myText;

        if (adjective1 == '') {
            myText = "Please provide an adjective.";
            document.querySelector('#adjective1').focus();
            // added below to put the error on the page for each field
            errorMessage.innerHTML = myText;
        } else if (verb2 == '') {
            myText = "Please provide a verb.";
            document.querySelector('#verb2').focus();
            errorMessage.innerHTML = myText; // error message
        } else if (adverb2 == '') {
            myText = "Please provide an adverb.";
            document.querySelector('#adverb2').focus();
            errorMessage.innerHTML = myText;  //error message
        } else if (number1 == '') {
            myText = "Please provide a number.";
            document.querySelector('#number1').focus();
            errorMessage.innerHTML = myText; // error message
        } else if (drink1 == '') {
            myText = "Please provide a number.";
            document.querySelector('#drink1').focus();
            errorMessage.innerHTML = myText; // error message 
        } else if (number2 == '') {
            myText = "Please provide a number.";
            document.querySelector('#number2').focus();
            errorMessage.innerHTML = myText; // error message 
        } else if (verb1 == ''){
            myText = "Please provide a number.";
            document.querySelector('#verb1').focus();
            errorMessage.innerHTML = myText; // error message 
        } else if (drink2 == '') {
            myText = "Please provide a number.";
            document.querySelector('#drink2').focus();
            errorMessage.innerHTML = myText; // error message
        } else if (adjective2 == ''){
            myText = "Please provide a number.";
            document.querySelector('#adjective2').focus();
            errorMessage.innerHTML = myText; // error message
        } else if (food == ''){
            myText = "Please provide a number.";
            document.querySelector('#food').focus();
            errorMessage.innerHTML = myText; // error message
        } else if (adjective3 == ''){
            myText = "Please provide a number.";
            document.querySelector('#adjective3').focus();
            errorMessage.innerHTML = myText; // error message
        } else if (adverb1 == ''){
            myText = "Please provide a number.";
            document.querySelector('#adverb1').focus();
            errorMessage.innerHTML = myText; // error message
        }
        else {
            header.innerHTML = '<h1>Madlib Result</h1>';
            myText = `<p>Today was a <span>${adjective1}</span> day, and I decide to go to a cafe to <span>${verb2}</span>. As I entered in the cafe, I saw a good old friend and I was <span>${adverb2}</span>. I walk up to her and decided to chat with her. I decided to order <span>${number1}</span> of 
            <span>${drink1}</span>. We talked for <span>${number2}</span> hours there. After she left, I decided to go back to <span>${verb1}</span>. My <span>${drink2}</span> was becoming <span>${adjective2}</span> so I decided to throw it away.  
            I was getting really tired so I decided to go home. I made <span>${food}</span> and it came out <span>${adjective3}</span>! It was getting really late and we have lost track of time. I <span>${adverb1}</span> crawl into my bed and fell asleep. 
            </p>`;

            // clear out the form
            // document.querySelector('#noun').value = '';
            // document.querySelector('#adjective').value = '';
            // document.querySelector('#verb').value = '';
            // document.querySelector('#adverb').value = '';

            // put the MadLib on the page
            result.innerHTML = myText;
        }
    });
})();