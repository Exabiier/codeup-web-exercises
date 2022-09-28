

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
    $("#current-city").text(`Current City: ${datafor.city.name}`);
    const userMarker = new mapboxgl.Marker().setLngLat([-98.48527,29.423017]).addTo(map);
    map.setCenter([-98.48527,29.423017]);
    console.log(datafor);

    $.get("http://api.openweathermap.org/data/2.5/weather", {
        APPID: OPEN_WEATHER_APPID,
        lat:    29.423017,
        lon:   -98.48527,
        units: "imperial"
    }).done(function(data) {
    //     $('.currentWeather').append(`<div><h2> ${namedDayFromDay(datafor.list[0].dt-20000)} </h2>  <p>Tempature: ${datafor.list[0].main.temp}&deg</p>  <p> ${datafor.list[0].weather[0].description}</p> <p>${datafor.list[0].wind.speed} mph ${windCardinalDirection(datafor.list[0].wind.deg)} </p>
    //
    // <p>Huminidty: ${datafor.list[0].main.humidity}% </p></div>`)

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
        for (let i = 0; i < 5; i++) {

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


            function skycCndition(sky){
                if(sky === 'clear sky'){
                    sky = '<img class="" src="img/Weather/sun.png" alt="Sunny">';
                } else if(sky === 'few clouds') {
                    sky = '<img class="" src="img/Weather/cloudy.png" alt="few clouds">';
                }
                else if(sky === 'scattered clouds') {
                    sky = '<img class="" src="img/Weather/cloud.png" alt="scattered clouds">';
                }
                else if(sky === 'broken clouds') {
                    sky = '<img class="" src="img/Weather/cloud.png" alt="broken clouds">';
                }
                else if(sky === 'shower rain') {
                    sky = '<img class="" src="img/Weather/rain(1).png" alt="shower rain">';
                }
                else if(sky === 'rain') {
                    sky = '<img class="" src="img/Weather/rain.png" alt="rain">';
                }
                else if(sky === 'thunderstorm') {
                    sky = '<img class="" src="img/Weather/storm.png" alt="thunderstorm">';
                }
                else if(sky === 'snow') {
                    sky = '<img class="" src="img/Weather/snowflake.png" alt="snow">';
                }
                else if(sky === 'mist') {
                    sky = '<img class="" src="img/Weather/wind.png" alt="mist">';
                } else {
                    sky = '<img class="" src="img/Weather/sun.png" alt="Sunny">';
                }
                return sky;
            }

            $('#append').append(
                `<h4 class=" text-left">${namedDayFromDay(time)}</h4>
                 <div class="row">
                    <div class="col-7">
                        <section class="row">
                            <div class="d-flex justify-content-end align-items-center col-6">
                                <h2>${highestTemp}&deg</h2>
                            </div>
                            <div class="d-flex justify-content-start align-items-center ps-0 col-6">
                               ${skycCndition(conSky)}
                            </div>
                        </section>
                    </div>
                    <div class="col-5">
                        <section class="row">
                            <div class="d-flex align-items-center col-6">
                               <h2>${tempMin}&deg</h2>
                            </div>
                            <div class=" d-flex justify-content-start align-items-center  col-6">
                                <img class="" src="img/Weather/moon.png" alt="Night">
                            </div>

                        </section>
                    </div>
                </div>

            <!-- this will be wind information-->
            <section class="windInformation mb-2">
                <p class="lead"><span class="cap">${conSky}.</span> High near ${highestTemp}&deg. Winds ${windCardinalDirection(windDegree)} at ${highWind} mph.</p>
            </section>

            <!--                        extra information-->
            <section class="otherInformation">
                <div class="card mb-0 ">
                    <div class="card-body">
                        <section class="row">
                            <div class="d-flex justify-content-end col-3">
                            <img class="" src="img/temperature.png" alt="Tempature reading">
                            </div>
                            <div class="ps-0  d-flex justify-content-start align-items-center col-3 row row-col">
                               <p class="pt-2  mb-0">Feels Like:</p> 
                               <br>
                               <p>${highestFeels}&deg</p>
                            </div>
                            <div class="d-flex justify-content-end  col-3">
                            <img class="pe-0" src="img/2682807_drop_high_humidity_percentage_precipitation_icon.png" alt="Humidity water drop">
                            </div>
                            <div class="d-flex justify-content-start align-items-center col-3 row row-col">
                               <p class="pt-2 m-0">Humidity:</p> 
                               <p>${highHum}%</p>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
            <hr>
                
            `)







            // $('.nextdays').append(`<div class="day${i}">
            // <h2> ${namedDayFromDay(time)} </h2>  <p>HighTemp: ${highestTemp}&deg  LowestTemp: ${tempMin}&deg FeelsLike: ${highestFeels}&deg </p>  <p> ${conSky}</p> <p> Wind-Speed: ${highWind} mph ${windCardinalDirection(windDegree)} </p>
            // <p>Huminidty: ${highHum}% </p>
            // </div>`)

    }


        console.log(data);

    });
    });
// userMarker.on('dragend', onDragEnd);


function updateWeather(coordinates){
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        lat:    coordinates[1],
        lon:    coordinates[0],
        units: "imperial"
    }).done(function (data){
        $("#current-city").text(`Current City: ${data.city.name}`);

        printWeather(data);

    })
}

function printWeather(datafor) {
    $('#append').empty();

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
    for (let i = 0; i < 5; i++) {

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


        $('#append').append(
            `<h5 classname=" text-left">${namedDayFromDay(time)}</h5>
                 <div class="row">
                    <div class="col">
                        <section class="row">
                            <div class="col-6">
                                <h2>${highestTemp}&deg</h2>
                            </div>
                            <div class="col-6">
                                sfadfasdfasfdsafdsfasdfsdfasd
                            </div>
                        </section>
                    </div>
                    <div class="col">
                        <section class="row">
                            <div class="col-6">
                               <h2>${tempMin}&deg</h2>
                            </div>
                            <div class="col-6">
                                
                            </div>

                        </section>
                    </div>
                </div>

            <!-- this will be wind information-->
            <section class="windInformation mb-2">
                <p class="lead"><span class="cap">${conSky}.</span> High near ${highestTemp}&deg. Winds ${windCardinalDirection(windDegree)} at ${highWind} mph.</p>
            </section>

            <!--                        extra information-->
            <section class="otherInformation">
                <div class="card mb-0">
                    <div class="card-body">
                        <section class="row">
                            <div class="col-2">icon</div>
                            <div class="col-4">
                               <p class=" m-0">FeelsLike:</p> 
                               <p>${highestFeels}&deg</p>
                            </div>
                            <div class="col-2">icon</div>
                            <div class="col-4">
                               <p class=" m-0">Humidity:</p> 
                               <p>${highHum}%</p>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
            <hr>
                
            `)







        // $('.nextdays').append(`<div class="day${i}">
        // <h2> ${namedDayFromDay(time)} </h2>  <p>HighTemp: ${highestTemp}&deg  LowestTemp: ${tempMin}&deg FeelsLike: ${highestFeels}&deg </p>  <p> ${conSky}</p> <p> Wind-Speed: ${highWind} mph ${windCardinalDirection(windDegree)} </p>
        // <p>Huminidty: ${highHum}% </p>
        // </div>`)

    }


}

$('#searchButton').on('click', function(e){
    e.preventDefault();
    const address = $('#search').val();
    geocode(address, MAPBOX_API_TOKEN).then(function (coordinates) {
        console.log(coordinates);
        const userMarker = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
        map.setCenter(coordinates);
        updateWeather(coordinates);
    });
})

//    ideas:
// what i will do for all the forcast is that is that i will do a lot of if elses so then i can get the exact data on the certian time.
//this will require a lot of math so we will do todays and tommorrows today.

//you can make a whole much of if statement to gut info in the right spots

//i want tempature, what the sky conditions will be like sunny, and  wind speed and directioo
//need the highs and lows
//make a for loop for the certian days and find the Math.max of the data

//how to append

// use if statement so then you can put your own icons into the box based on condition

//put the weather in map.

//we need to include

//we need to turn of auto complete

//make aimated search bar

//check if all of the weather that comes up.

