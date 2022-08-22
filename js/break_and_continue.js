// let string = ""
// for (let i = 0; i< 8; i++){
//     let word = prompt("Let's make a sentance! Enter the word: ");
//     if (word === curses){
//         console.log("not allowed in my house");
//         continue;
//     }
//     string += "" + word;
//     console.log("our sentance is: " + string)
// }

//while(true) === for(;;)
for(;;){
    let oddNumber = prompt("Please enter an odd number:");
    if(oddNumber >= 1 && oddNumber <= 50 && oddNumber % 2 === 1 && isNumber(oddNumber)){
        console.log(`Number to skip is: ${oddNumber}`);
        console.log(" ");
        for(let i = 1; i <= 50; i+= 2){
            if(i == oddNumber){
                console.log(`Yikes! Skipping number ${oddNumber}`);
                continue;
            } else {
                console.log(i);
            }
        }
        break;
    }

}



