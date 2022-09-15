//The Three steps of handlingevents



//1. Get reference to the element that will trigger the event
// let theButton = document.querySelector("button")

//2. Write the function that will be triggered by the event
//A function is a set of instructions. this kind of function that is trifggered by an event
// function eventHandler(){
//     alert("You clicked me!");
// }

//3. register the handler, the 2 ways.

// theButton.addEventListener('click', eventHandler)

//we put the event on the varable itself
// theButton.onclick = eventHandler;



let thesquare = document.querySelector('.sqaure');

let theHandler = function x() {
    alert('I am a sqaure')
}

thesquare.onclick = theHandler;



