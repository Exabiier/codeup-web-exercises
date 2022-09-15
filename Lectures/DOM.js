// let accessTheDom =document.getElementById("Dc");
// let showMe = accessTheDom.innerHTML;
// console.log(showMe);
//
// let marvel = document.getElementById("marvel")
//
// //the document.getElementById is the object (object element) representation of the HTML element. its how you connect HTML to Javascript.
// //use innerText to get the text
// //getElementById gives you a string
//
// accessTheDom.innerHTML += marvel.innerHTML;

// DOM Document Object Model (DOM)
// let accessTheDOM = document.getElementById("dc"); // getElementById is a method
// let showMe = accessTheDOM.innerHTML;
// let marvel = document.getElementById("marvel");
// alert(showMe);
// console.log(showMe)
// let preference = "dc"
// let like = document.getElementById("like");
// let dontLike = document.getElementById("dontLike");
// let output = `${dontLike.innerHTML} ${document.getElementById(preference).innerHTML} movies`;
// console.log(output);
//
// accessTheDOM.innerHTML += " Animated Universe";
//
// marvel.setAttribute('class', 'hotpink');
//
// let hotPinks = document.getElementById('hotpink');
//
// hotPinks[0].style.color ='red'

//use for loops when it come to html element with javascript.

// let subitButton = document.getElementById("colorSubmission")
//
// submitButton.onclick = function(){
//     let colorInput = document.getElementById("colorPreference");
//     let paragraphs = document.getElementsByTagName("p");
//     for(let i=0; i < paragraphs.length; i++) {
//         paragraphs[i].style.color = colorInput.value;
//     }
// }

//get when getElements you will get multiple stuff in an array.
//find good libaries when ever you do a project.

// let theHulk = document.getElementById("hulk");
// let hulkState = theHulk.getAttribute("data-state")
// theHulk.innerText += ` is in ${hulkState} state`;
// let hulkState = theHulk.dataset.state;
// let hulkStrength = theHulk.dataset.strength;
// let hulkIntelligence = theHulk.dataset.intelligence;
// let hulkSummary = `The Hulk is in ${hulkState} state. His strength is ${hulkStrength} and his intelligence is ${hulkIntelligence}.`
// theHulk.innerText = hulkSummary;

// let transformButton = document.getElementById("transformHulk");
// transformButton.onclick = function () {
//     // alert("hi");
//     let hulkState = theHulk.dataset.state;
//     let hulkStrength = theHulk.dataset.strength;
//     let hulkIntelligence = theHulk.dataset.intelligence;
//     if (hulkState === "hulk") {
//         theHulk.dataset.state = "Bruce Banner";
//     } else {
//         theHulk.dataset.state = "hulk";
//     }
//     theHulk.innerText = `The Hulk is in ${hulkState} state.`
// }


// let eHulk = document.getElementById("Hulk");
//     let hulkState = theHulk.getAttribute("data-state");
//     theHulk.innerText += "is in" + hulkState + "state";
//     let hulkState = theHulk.dataset.state;
//     let hulkStrength = theHulk.dataset.strength;
//     let hulksummary = `the hulk strength is ${hulkState} state. the hulk strength is ${hulkStrength}`
//

//you can retrive any attribute of any element on any page

let theHulk = document.getElementById("hulk");
// let hulkState = theHulk.getAttribute("data-state")
// theHulk.innerText += ` is in ${hulkState} state`;
let hulkState = theHulk.dataset.state;
let hulkStrength = theHulk.dataset.strength;
let hulkIntelligence = theHulk.dataset.intelligence;
let hulkSummary = `The Hulk is in ${hulkState} state. His strength is ${hulkStrength} and his intelligence is ${hulkIntelligence}.`
// theHulk.innerText = hulkSummary;

let transformButton = document.getElementById("transformHulk");
transformButton.onclick = function () {
    // alert("hi");
    let hulkState = theHulk.dataset.state;
    let hulkStrength = theHulk.dataset.strength;
    let hulkIntelligence = theHulk.dataset.intelligence;
    if (hulkState === "hulk") {
        theHulk.dataset.state = "Bruce Banner";
    } else {
        theHulk.dataset.state = "hulk";
    }
    theHulk.innerText = `The Hulk is in ${hulkState} state.`
}



