let currentWeather = {
    humidity: 77,
    temp: 82.33,
    feels_like: 88.79,
    clouds: 75
}
// everything within{} is an object. A single thing inside the {} is property
// console.log(currentWeather.temp);
//a method is a stored function witiin an object to be used
//

console.log(currentWeather["humidity"]);

let userChoice = "clouds";
console.log(currentWeather[userChoice])

//use bracket notation if you need to use a varable

console.log("The current weather is" + currentWeather.temp);

for (let property in currentWeather){
    console.log(property + " " + currentWeather[property]);
}

// can add properties to an object this way.
currentWeather.uvIndex = 9.79;
console.log(currentWeather.uvIndex);


//Arrays of object

// const person = {};
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";
//
//
// console.log(person.firstName);
// this is an array with the elements having objects.
//that is why you must index the array then you the .time or .temperature
let hourlyWeather = [
    {
        time: "08:00",
        temperature: 78.91,
        feels_like: 78.91
    },
    {
        time: "09:00",
        temperature: 79.57,
        feels_like: 79.57
    },
    {
        time: "10:00",
        temperature: 81.46,
        feels_like: 86.04
    },
    {
        time: "11:00",
        temperature: 84.49,
        feels_like: 89.24
    }
];

console.log(hourlyWeather[0].time)

// for (let i=0; i <hourlyWeather.length; i++){
//     console.log(`At ${hourlyWeather[i].time} the temperpature will be ${hourlyWeather[i].temperature}`);
// }

// hourlyWeather.forEach(function(forecast){
//     console.log(`At ${forecast.time} the temperture will be ${forecast.temperature} and feel like ${forecast.feels_like}`)
// });

hourlyWeather.forEach(forecast=>
    console.log(`At ${forecast.time} the temperture will be ${forecast.temperature} and feel like ${forecast.feels_like}`))


let texasInfo = [
    {
        city: "San Antonio",
        latitude: 29.423017,
        longitude: -98.48527,
        timezone: "America/Chicago",
        currentWeather: {
            humidity: 77,
            temp: 82.33,
            feels_like: 88.79,
            clouds: 75
        }
    },
    {
        city: "Houston",
        latitude: 29.7915,
        longitude: -95.093,
        timezone: "America/Chicago",
        currentWeather: {
            humidity: 68,
            temp: 87.44,
            feels_like: 97.7,
            clouds: 75
        }
    }
];

console.log(texasInfo[0].currentWeather.temp)

let fighter = {
    name: "Arata",
    hitPoints: 18,
    maxDamage: 8,


}

// we creating a controller object to handle anything the player or game onjects do that affects the state of the game. the controller.

// Let's create a controller object to handle anything players or game objects do that affects the state of the game.  The controller might handle taking user input and calculating the input's effect on the game.

let controller = {
    attack: function(attacker, defender){
        let defenderHPBeforeAttack = defender.hitPoints;
        let damage = Math.ceil(Math.random() * attacker.maxDamage);
        defender.hitPoints -= damage;
        view.displayAttackResults(attacker, defender, defenderHPBeforeAttack, damage);
    }
}

// The view object handles output

let view = {
    displayAttackResults: function(attacker, defender, defenderHPBeforeAttack, damage){
        console.log(`${defender.name} has ${defenderHPBeforeAttack} hit points`);
        console.log(attacker.name + " attacks!");
        console.log(`${attacker.name} does ${damage} hit points of damage!`);
        console.log(`${defender.name} now has ${defenderHPBeforeAttack - damage} hit points.`);
        console.log("-----------------");
    }
}

let model = {
    fighter: {
        name: "Arata",
        hitPoints: 18,
        maxDamage: 8
    },

    monster: {
        name: "Goblin",
        hitPoints: 8,
        maxDamage: 6
    }
}

// fighter.attack(monster);
// fighter["attack"](monster);

controller.attack(model.fighter, model.monster);
controller.attack(model.monster, model.fighter);


//creating a new object
//define an empty object and create properties dynamically
let goblin = {};
goblin.name = "Goblin";


function makeMonster(name, hitPoints, maxDamage){
    return{
        name: name,
        hitPoints: hitPoints,
        maxDamage: maxDamage
    }
}

model.hobgoblin = makeMonster("Hobgoblin", 11, 11);



function Monster(name, hitPoints, maxDamage){
    this.name = name;
    this.hiPoints = hitPoints;
    this.maxDamage;
}

model.hobgoblinCaptain = new Monster("Hobgoblin Captain", 39, 14)

controller.attack(model.hobgoblinCaptain, model.fighter);

//what does this all mean.
// }
//     let monster = {
//
//
//     }
// }

//you cannot use arrow functions as method definitions
// let fighter = {
//     name: "Arata",
//     hitPoints: 18,
//     maxDamage: 8,
//     attack: function (){
//         console.log(this.name + " attacks!");
//         var damage = Math.ceil(Math.random() * this.maxDamage);
//         console.log(this.name + " does " + damage + " points of damage!");
//     }
// }
//
// fighter.attack();































