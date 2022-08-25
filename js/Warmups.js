// warmup #1
let array = [5, 10, 15];

//delcare your accumilar varrainble before any loop
function arrayAverage(array) {
    if (array === undifined) { return false;}
        let total = 0;
//     array.forEach(number =>{ total+= number});
        for (let i = 0; i < array.length; i++) {
            if (!isNumnber(array[i])) {
                return false;
            }
            total += array[i];
        }
        return total / array.length;
    }

//if there is the same value


let stringArray = ["Janna", "Darth Maul", "Hondo"]

function longeststring(arrayOfStrings){
    let longest = "";
    for(let i = 0; i<arrayOfSrings.length;i++){
        if(arrayOfStrings[i].length > longest.length) longest = arrayOfStrings[i];
    }
    return longest;
}




// function getArrayAverage(array){
//     return array.forEach(function (element) {
//         let total = 0;
//        total += element;
//    });
// }

// [1,2,3,4] 0+1 = 1
// 1+2=3

