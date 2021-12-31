"use strict";

class UI
{
    constructor()
    {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.pressure = document.getElementById('w-pressure');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather)
    {
        this.location.textContent = `${weather.name} ${weather.sys.country}`;
        this.desc.textContent = `Description: ${weather.weather[0].description}`;
        this.string.textContent = `${weather.main.temp} (F)`;
        this.icon.setAttribute('src', `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
        this.humidity.textContent = `Humidity: ${weather.main.humidity}`;
        this.feelsLike.textContent = `Feels like: ${weather.main.feels_like} (F)`;
        this.pressure.textContent = `Pressure: ${weather.main.pressure}`;
        this.wind.textContent = `Wind speed: ${weather.wind.speed}`;
    }
}