// warmup #1
// let array = [5, 10, 15];
//
// //delcare your accumilar varrainble before any loop
// function arrayAverage(array) {
//     if (array === undifined) { return false;}
//         let total = 0;
// //     array.forEach(number =>{ total+= number});
//         for (let i = 0; i < array.length; i++) {
//             if (!isNumnber(array[i])) {
//                 return false;
//             }
//             total += array[i];
//         }
//         return total / array.length;
//     }
//
// //if there is the same value
//
//
// let stringArray = ["Janna", "Darth Maul", "Hondo"]
//
// function longeststring(arrayOfStrings){
//     let longest = "";
//     for(let i = 0; i<arrayOfSrings.length;i++){
//         if(arrayOfStrings[i].length > longest.length) longest = arrayOfStrings[i];
//     }
//     return longest;
// }
//
//
//

// function getArrayAverage(array){
//     return array.forEach(function (element) {
//         let total = 0;
//        total += element;
//    });
// }

// [1,2,3,4] 0+1 = 1
// 1+2=3

// Write a function, calculateTotalStudents, that returns the total number of students recorded in the classes array.

// const convertToObject = function (nameOfClass, numberOfStudents) {
//     return {
//         class: nameOfClass,
//         numberOfStudents: numberOfStudents,
//     }
// }
//
// //you can do an arrow function with a function expression.
//
// console.log(convertToObject("Intro to Programming", 20));
//
// let myFunction = convertToObject;
// console.log(myFunction("Intro to React"));

var neighborhood1 ={
    neighborhood: "Lovely Estates",
    medianHomePrice: 280000,
    pool: true,
    tennis: false,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 8},
        {name: "MS2", rating: 6},
        {name: "HS3", rating: 8}
    ]
}

var neighborhood2 ={
    neighborhood: "Luminous Estates",
    medianHomePrice: 270000,
    pool: true,
    tennis: false,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 8},
        {name: "MS2", rating: 8},
        {name: "HS3", rating: 8}
    ]
}

var neighborhood3 ={
    neighborhood: "Ginormous Ego Estates",
    medianHomePrice: 350000,
    pool: true,
    tennis: true,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 9},
        {name: "MS2", rating: 9},
        {name: "HS3", rating: 9}
    ]
}

    // Write a function that takes a neighborhood object and determines if it is desirable. A neighborhood is desirable if the median home price is less than 300000, crime rates are low, and the total rating of schools is at least 24.

//Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.
//
// A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...
//
// Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:
//
//     your referral bonus, and
//
//     the price of a beer can
//
// For example:
//
// beeramid(1500, 2); // should === 12
// beeramid(5000, 3); // should === 16

//we want to move to the best hood

// function desirableNeighborhoodsObject(neighborhoodsobject){
//     return neighborhoodsobject.medianHomePrice<300000 && neighborhoodsobject.crimeRate === "low";
// }

//Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.
//
// A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...
//
// Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:
//
//     your referral bonus, and
//
//     the price of a beer can
//
// For example:
//
// beeramid(1500, 2); // should === 12
// beeramid(5000, 3); // should === 16

//whats the costof each level
// need a total cost accumilator

// function beermaid(bonus, price) {
//     let totalCost = 0;
//     let levels = 0;
//     while (totalCost < bonus) {
//         totalCost += (levels ** 2) * price;
//         if(totalcost + (levels + 1)**2*price>bonus){break;}
//         levels++;
//     }
//     return levels;
// }



