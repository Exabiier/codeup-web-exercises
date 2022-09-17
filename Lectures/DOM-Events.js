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
thesquare.addEventListener('click',function(event){
    console.log(e.target.className);
}

//e.tagret will allow you to minupulate
//get computedStyle(e.target

let theButton = document.querySelector("button")

let buttonClick = Function(){
    document.querySelector('p').innerText = "You CHanged me"}

theButton.onClick= buttonClick;
document.querySelector('p')



let formInput = document.getElementById('formInput');

    // {event.target.removeEventListener(event)}



