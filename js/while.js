// let start = 2
// while(start <= 65536){
//     console.log("this is your number: "+start);
//     start *= 2;
// }

// let number = Math.ceil(Math.random()*6);
// let guess;
// do {
//     guess = parseInt(prompt("Enter a number a number between 1 and 6"));
// } while(guess !== number);
// alert(`Your guess of ${guess} was correct!`);

// let allCones = Math.floor(Math.random() * 50) + 50;
//
// let total = allCones;
// do{
//     let random = Math.floor(Math.random() * 5) + 1;
//     if(total <= 0){
//          `Yay! sold them all!`;
//         break;
//     } else if(total<random){
//         console.log(`Cannot sell you ${total} cones I only have &{random}...`);
//     } else{
//         total = total-random;
//         console.log(`${random} cones sold..`);
//     }
// } while(total>0)

// when you go between numbers always do one more

let allCones = Math.floor(Math.random() * 51) + 50;

do {
    let conesWanted = Math.floor(Math.random() * 5) + 1;
    if(conesWanted>allCones){
        console.log(`Cannot sell you ${conesWanted} I only have ${allCones}`)
    } else console.log(`${sold} sold...`);
    allCones = allCones - conesWanted;

}while(allCones>0)


