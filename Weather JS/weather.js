"use strict";

class Weather
{
    constructor(city, state, country)
    {
        // rapidapi key, to create one, go here: 
        // https://rapidapi.com/community/api/open-weather-map/
        // and here for tutorial https://www.youtube.com/watch?v=t1lbJvoPxwM 
        this.apiKey = '3441953a87mshaac15fd0799e4b9p1ab2f4jsnb18406169a48';
        this.city = city;
        this.state = state;
        this.country = country;
    }

    // fetch weather from API
    async getWeather()
    {
        const url = `https://community-open-weather-map.p.rapidapi.com/weather?q=${this.city}%2C${this.state}%2C${this.country}&lang=en&units=imperial&mode=JSON`;
        const response = await fetch(url, 
        {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": `${this.apiKey}`
            }
        });

        const responseData = await response.json();

        return responseData;
    }

    changeLocation(city, state, country)
    {
        this.city = city;
        this.state = state;
        this.country = country;
    }
}