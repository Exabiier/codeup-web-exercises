// let sayHey = function() {
//     let count = 0;
//
//     function hey() {
//         if (count < 10) {
//             console.log('hey' + count);
//             count++;
//         }else {
//             clearInterval();
//         }
//     }
//
//     setInterval(hey, 1000);
// }


//to stop this cod you cant just use a if statement

// let count=0;
// let thisTimeItWillStop;
// function hey(){
//     if(count<10){
//         console.log("hey" + count);
//         count++
//     } else {
//         clearInterval(thisTimeItWillStop)
//     }
//     thisTimeItWillStop = setInterval(hey, 1000);
// }

//you have to set the setInterval to a varable!

function tenHeys() {
    let count = 0;
    let thisWillStop = setInterval(function () {

        if (count < 10) {
            console.log("hey" + count);
            count++;
        } else {
            clearInterval(thisWillStop)
        }
    }, 1000)
}

setTimeout(wakeUpUser, 5000);

function wakeUpUser(){
    alert("WAKEUPPPP!!!!!")
}
