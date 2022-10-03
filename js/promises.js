$.get("data/blog.json", (data)=>{
    console.log(data)
});

// new way get API
fetch("data/blog.json").then((response)=>{response.json();
}).then((data) => console.log(data))

//callback: a function passed as an argument to another function; it can run another function has finished running.

// function sayHello(greeting, name){
//     greeting `${greeting},${name}`
//     displayOutput((greeting))
// }
//
// sayHello('Hello', 'Javier');
//
// let greetings = sayHello("Hola", "Javier");
//
function displayOutput(output){
    $('#me').html(output)
}

// displayOutput(greetings);

// function greeter(greeting, name, displayFunction){
//     greeting = `${greeting}, ${name}!`;
//     displayFunction(greeting)
// }
//
// function displayToOutputDiv(output){
//     $("#output").html(output)
// }
//
// greeter("Hola", "Javier", displayToOutputDiv)

//greeter is what we call a greeter function

const greetings = [ "Salutations", "Shoutout", "Hello", "Hullo", "Hail", "Hey", "Hi", "Aloha", "Hola", "Bonjour", "Howdy", "Namaste", "Ohayo", "Ni hao"];
const names = ['David', 'Jay', 'Bianca', 'Laura', 'Kenneth', 'Cody', 'Justin', 'Javier', 'Dane', 'Casey', 'Mark', 'Ry', 'Jordy'];
function generateGreeting(greetingsArray, namesArray, displayFunction){
    let greeting = greetingsArray[Math.floor(Math.random() * greetingsArray.length)];
    const name = namesArray[Math.floor(Math.random() * namesArray.length)];
    greeting = `${greeting}, ${name}!`;
    displayFunction(greeting);
}

generateGreeting(greetings, names, displayToOutput

)

setInterval(generateGreeting, 1000 ,greetings, names, displayToOutputDiv)


const aPromise = new Promise((reolve, reject) =>{
    setTimeout(()=>{
        if(Math.random() > 0.5){
            resolve("I was fullfilled!")
        } else {
            reject("I was rejected!")
        }
    }, 3000)
});

aPromise.then(value => console.log(value)).catch(error=>console.log(error))