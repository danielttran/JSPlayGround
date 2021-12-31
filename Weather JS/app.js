"use strict";

const ui = new UI();

// to remember user selection
const storage = new Storage();

const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation.city, weatherLocation.state, "US");

// get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// change location event
document.getElementById('w-change-btn').addEventListener('click', 
() => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    // get new weather
    weather.changeLocation(city, state, "US");
    getWeather();

    // update local storage
    storage.setLocationData(city, state);

    // close modal
    $("#locModal").modal('hide');
});

function getWeather()
{
    weather.getWeather()
        .then(weather => {
            ui.paint(weather);
        })
        .catch(error => console.log(error));

}