//declaring arrays
let groceryList = ['Bread', 'eggs', 'butter', "milk"];

// groceryList[0] = "Bread"
// you store arraay in a varriabble ex: myLastItem = groceryList[3] = "milk";
// subtract 1 from lenght
// for(let i = 0; i < groceryList.lenght; i++){
//     if( i === groceryList.lenght - 1)
//     console.log(`I have to buy ${groceryList[i]}.`);
// }

// let emotions = ["happy", "sad", "mad" , "disappointed"];
// for(let i = 0; i < emotions.lenght; i++) {
//     if (i === emotions.lenght - 1) {
//         console.log(`I am really feeling ${emotions[i]}`)
//     } else {
//         console.log(`I am feeling like ${emotions[i]} and`)
//     }
// }
//
// function outputArray(array){
//     for(let i = 0; i<array.lenght; i++){
//         console.log(array[i])
//     }
// }
//
// outputArray(emotions);
//
// let prices = [32.99, 21.99, 6.99, 4.99,12.99, 8.98, 5.99]


//forEach loops through the array made for arrays
// the first element always represent the elements of the array
// cann only have 3 peramiter in the foreach
//Anounimous fucntion use arrow synthax

// prices.forEach(function(price, index){
//     console.log("item number" + index + "costs" + price);
// })
//
// prices.forEach(price =>{
// console.log(price)});

groceryList.push("potatoes");
groceryList.pop();

groceryList.unshift("sliced chedder");
groceryList.shift();


//.shift will remove the first element and .unshift will put one more above it
indexOfButter = groceryList.indexof("butter");

// you find the index of something use .indexof

groceryList[indexOfButter] = "Peanut butter";

//you can replace anything in the array if you call the array and eqaul it to a nnew value in the array

let firsthaOfGroceryList =  groceryList.slice(0,2);
 // with slice the last number of the index will not show!!!!!!!

let secondHalfOfGroceryList = groceryList.slice(2);

//the

firsthaOfGroceryList = firsthaOfGroceryList.push("butter");
groceryList = firsthaOfGroceryList.concat(secondHalfOfGroceryList)

groceryList.reverse();

//reverses the order of the of the array

groceryList.sort();

//put them in alphebidical order

// prices.sort(function(a,b){
//     return a-b;
// })
//if you you want to put number in order then you

groceryList[3] = "Blueberries";
groceryList.sort();

let newList


for(let i = 0; i < groceryList.length; i++){
    groceryList[i] = groceryList[i].toLowerCase();
}

groceryList.forEach(item, index, array=> {
    array[index] = item.toLowerCase();
})

let quote = "All the world's a play";
quote = quote.toLowerCase()
let quoteArray = quote.split(" ")
console.log(quoteArray);

quoteArray = quoteArray.reverse()

quote = quoteArray.join(' ').toLowerCase();



let wishList = [25,15,34,8,59]

function checkWishListPrices(wishList){
    for (let i = 0; i < wishList.length; i++){
        if (wishlist[i] > 50) {
            return false;
        }
    }
    return true;
}
console.log(checkWishListPrices(wishList));

function checkWishListTotal(wishList){
    let total = 0;
    for(let i= 0; i< wishList.length; i++){
        total += wishlist[i];
    }
        return total <= 100
}

function processWishList(wishList, testFuntion1, testFunction2){
    return testFunction1(wishList) && testFunction2(wishList);

}

console.log(processWishList(wishList,checkWishListPrices, checkWishListTotal))

function zetM(string){
    let commandArray = string.toLowerCase().split(" ");
    let newArray = []
    for (let i = 0; i < commandArray.length; i++){
        commandArray[i] = (commandArray[i].split('').reverse().join(''));
    }
    let command = commandArray.join(' ') + "!";
    return commandArray[0].charAt(0).toUpperCase() + commandArray,join(' ').slice(1) + "!";
}