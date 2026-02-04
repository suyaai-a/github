(function(){
    'use strict'
    console.log("reading js")


    const questions = document.querySelector("#madlib-questions1").value;

    questions.addEventListener('submit', function(event){
        event.preventDefault();
        const adj1 = document.querySelector('#adjective1').value
        const verb = document.querySelector('#verb2').value
        const adverb = document.querySelector('#adverb2').value
        const number = document.querySelector('#number1').value

        const drink1 = document.querySelector('#drink1').value
        const number2 = document.querySelector('#number2').value
        const verb1 = document.querySelector('#verb1').value
        const drink2 = document.querySelector('#drink2').value

        const adjective2 = document.querySelector('#adjective2').value
        const food = document.querySelector('#food').value
        const adjective3 = document.querySelector('#adjective3').value
        const adverb1 = document.querySelector('#adverb1').value
    });

    const myText = (`you type the words ${noun1}, ${noun2}, ${adj}, ${verb}`);
})();