"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor(color1){
//     if (color1 === "blue"){
//         return "blue is the color of sky";
//     } else if (color1 === "red"){
//         return "strawberries are red"
//     } else {
//         return ("I dont know anything about " + color1)
//     }
// }

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// console.log(analyzeColor(randomColor));



/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */


// function anylyzeColor(color1) {
//     switch (color1) {
//         case "blue":
//             return "blue is the color of sky";
//             break;
//         case "red":
//             return "strawberries are red";
//             break;
//         default:
//             return ("I dont know anything about " + color1);
//             break;
//     }
// }




/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

// let color = prompt("what color whould you like to select?")
// alert(anylyzeColor(color))


/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// function cacluateTotal(number, price1)


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

// let i = 11
//
//  do {
//     console.log(' doooooooo while loop iteration #' + i);
//     i++;
// } while (i > 10)

// let a = 0
// while(a < 10) {
//     console.log('while loop iteration #' + a);
//     a++;
// }

//why do we use do

// let i = 0
// for(;i<20; i++){
//     console.log("lets gooooo"+i)
// }

// function upperCase(input){
//
// return typeof input === "string"? input.toUpperCase():false;}
//
// let fruits = ["apple", "orange", "strawberry", "kiwi", "pineapple"];
//
// fruits.forEach(function(element, index, array){
//     console.log(element)
// })

// var arr = [3, 6, 2, 56, 32, 5, 89, 32];
// var largest = [];
//
// for (var i = 0; i < arr.length; i++) {
//     if (largest < arr[i] ) {
//         largest = arr[i];
//     }
// }
// console.log(largest)
// // console.log(Math.max(...arr));
//
// const student = [
//     {
//         id: 1,
//         name: "Jacek",
//         notes: [5, 3, 4, 2, 5, 5]
//     },
//     {
//         id: 2,
//         name: "Ewa",
//         notes: [2, 3, 3, 3, 2, 5]
//     },
//     {
//         id: 3,
//         name: "Zygmunt",
//         notes: [2, 2, 4, 4, 3, 3]
//     }
// ]
//
// function fetStudentTopNote(array){
//     const topNotes = [];
//     array.foreach(studentObj => {
//         TopNotes.push(Math.max(...studentObj))
//     })
//     return coltopNotes
// }

/**
 * Find the Smallest and Biggest Numbers
 * Create a function named minMax that takes an array of numbers and return both the minimum and maximum numbers, in that order.
 *
 * Examples
 * >> minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
 * >> minMax([2334454, 5]) ➞ [5, 2334454]
 * >> minMax([1]) ➞ [1, 1]
 *
 *
 *
 **/
let y = [1, 2, 3, 4, 5]

function minMax(array){
    let x = [Math.min(...array),Math.max(...array)]
    return x;
}

/** Write a function that accepts a string,
 breaks down the string into components,
 and returns an object where each component of the string has become the value of a property */
// keywords "breaks down the string into components" make it not into a string.
// property = value                               black rifle coffee
// .split(" ") makes it into an array.           property first word = black
// var pistol = {};    {} = objects
// pistol.brand = "glock"; make = key
// car.model = "Camry";

function returnsObjectOfWords (string) {
    let array = string.split (" ")
    let obj = {}
    for ( let i = 0; i < array.length; i++) {
        let property = "word" + (i+1);
        obj.property = array[i]
    }
    return obj;
}
// object.key = value
// object = glock : key = scaliber : value : 9mm
// obj = object : foo = key : bar = value
// const obj = { foo: 'bar', baz: 42 };














