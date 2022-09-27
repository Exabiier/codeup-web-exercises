

// //function for Conversion of date
// const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
//
// function formatTime(timeStamp){
//     let dateTime = new Date(timeStamp * 1000);
//     let year = dateTime.getFullYear();
//     let month = months[dateTime.getMonth()];
//     let day = dateTime.getDate();
//     let hour = appendLeadingZeroes(dateTime.getHours());
//     let minutes = appendLeadingZeroes(dateTime.getMinutes());
//     let seconds = appendLeadingZeroes(dateTime.getSeconds());
//     let formattedDateTime = month + " " + day + " " + year + " " + hour + ":" + minutes + ":" + seconds;
//     return formattedDateTime;
// }

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function namedDayFromDay(timeStamp){
    let dateTime = new Date(timeStamp * 1000);
    return daysOfWeek[dateTime.getDay()];
}

//function for wind Direction:
function windCardinalDirection(degrees){
    let cardinalDirection = '';
    if ((degrees > 348.75 && degrees <= 360) || (degrees >=0 && degrees <= 11.25)){
        cardinalDirection = "N";
    } else if (degrees > 11.25 && degrees  <= 33.75) {
        cardinalDirection = "NNE";
    } else if (degrees > 33.75 && degrees <= 56.25) {
        cardinalDirection = "NE";
    } else if (degrees > 56.25 && degrees <= 78.75) {
        cardinalDirection = "ENE";
    } else if (degrees > 78.75 && degrees <= 101.25) {
        cardinalDirection = "E";
    } else if (degrees > 101.25 && degrees <= 123.75) {
        cardinalDirection = "ESE";
    } else if (degrees > 123.75 && degrees <= 146.25) {
        cardinalDirection = "SE";
    } else if (degrees > 146.25 && degrees <= 168.75) {
        cardinalDirection = "SSE";
    } else if (degrees > 168.75 && degrees <= 191.25) {
        cardinalDirection = "S";
    } else  if (degrees > 191.25 && degrees <= 213.75) {
        cardinalDirection = "SSW";
    } else if (degrees > 213.75 && degrees <= 236.25)  {
        cardinalDirection = "SW";
    } else if (degrees > 236.25 && degrees <= 258.75) {
        cardinalDirection = "WSW";
    } else if (degrees > 258.75 && degrees <= 281.25) {
        cardinalDirection = "W";
    } else if (degrees > 281.25 && degrees <= 303.75) {
        cardinalDirection = "WNW";
    } else if (degrees > 303.75 && degrees <= 326.25) {
        cardinalDirection = "NW";
    } else if (degrees > 326.75 && degrees <= 348.75) {
        cardinalDirection = "NNW";
    }
    return cardinalDirection;
}


$.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: OPEN_WEATHER_APPID,
    lat:    29.423017,
    lon:   -98.48527,
    units: "imperial"
}).done(function(datafor) {
    console.log(datafor);


    $.get("http://api.openweathermap.org/data/2.5/weather", {
        APPID: OPEN_WEATHER_APPID,
        lat:    29.423017,
        lon:   -98.48527,
        units: "imperial"
    }).done(function(data) {
        $('.currentWeather').append(`<div><h2> ${namedDayFromDay(datafor.list[0].dt-20000)} </h2>  <p>Tempature: ${datafor.list[0].main.temp}&deg</p>  <p> ${datafor.list[0].weather[0].description}</p> <p>${datafor.list[0].wind.speed} mph ${windCardinalDirection(datafor.list[0].wind.deg)} </p>

    <p>Huminidty: ${datafor.list[0].main.humidity}% </p></div>`)

        //tempature
        let highestTemp = '';
        let tempA = [];

        let tempMin = '';
        let tempM = [];

        let highestFeels = '';
        let feelT = [];


        //wind speed
        highWind = '';
        let windA=[];
        let windDegree = '';

        //huminitdy
        highHum = ''
        let humA = [];

        //sky conditions
        let skyA = [];
        let conSky = '';

        //Date
        let time = '';




        // total amount of stuff.
        for (let i = 1; i < 5; i++) {

            for(let j = i*8; j <(i+1)*8; j++){
            tempA.push(datafor.list[j].main.temp);
            tempM.push(datafor.list[j].main.temp_min)
            feelT.push(datafor.list[j].main.feels_like)
            windA.push(datafor.list[j].wind.speed);
            humA.push(datafor.list[j].main.humidity);
            if(j % 8 === 0 ){
                conSky = datafor.list[j].weather[0].description;
                time = ((datafor.list[j].dt)-4000);
                windDegree = datafor.list[j].wind.deg;

            }

        }
            //the Max tempature, wind-speed
            highestFeels = Math.max(...feelT)
            highestTemp = Math.max(...tempA)
            highWind = Math.max(...windA)
            highHum = Math.max(...humA)

            //Min tempature
            tempMin = Math.min(...tempM)

            console.log(time);


            $('.nextdays').append(`<div class="day${i}">
            <h2> ${namedDayFromDay(time)} </h2>  <p>HighTemp: ${highestTemp}&deg  LowestTemp: ${tempMin}&deg FeelsLike: ${highestFeels}&deg </p>  <p> ${conSky}</p> <p> Wind-Speed: ${highWind} mph ${windCardinalDirection(windDegree)} </p>
            <p>Huminidty: ${highHum}% </p>
            </div>`)

    }


        console.log(data);

    });
    });




//    ideas:
// what i will do for all the forcast is that is that i will do a lot of if elses so then i can get the exact data on the certian time.
//this will require a lot of math so we will do todays and tommorrows today.

//you can make a whole much of if statement to gut info in the right spots

//i want tempature, what the sky conditions will be like sunny, and  wind speed and directioo
//need the highs and lows
//make a for loop for the certian days and find the Math.max of the data


