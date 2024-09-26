document.addEventListener('DOMContentLoaded', () => {
    const inputBox = document.querySelector('.input-box');
    const searchBtn = document.getElementById('searchBtn');
    const weather_img = document.querySelector('.weather-img');
    const temperature = document.querySelector('.temperature');
    const description = document.querySelector('.description');
    const humidity = document.getElementById('humidity');
    const wind_speed = document.getElementById('wind-speed');
    const location_not_found=document.querySelector('.location-not-found');
    const weather_body=document.querySelector('.weather-body');

    async function checkWeather(city) {
        const api_key = "adf939a75496b956ec95770d1c2ea911";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
        const weather_data = await fetch(url).then(response => response.json());
        if(weather_data.cod==='404')
            {
                location_not_found.style.display="flex";
                weather_body.style.display="none";
                console.log("error");
                return;

            }
                

        location_not_found.style.display="none";
        weather_body.style.display="flex";
        temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
        description.innerHTML = `${weather_data.weather[0].description}`;

        humidity.innerHTML = `${weather_data.main.humidity}%`;
        wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

        switch(weather_data.weather[0].main){
        case 'cloude':
            weather_img.src="./Image/cloude.jpeg";
            break;
        case 'sun':
            weather_img.src="./Image/sun.jpeg";
            break;
        case 'rain':
             weather_img.src="./Image/rain.jpeg";
             break;
        case 'mist':
             weather_img.src="./Image/mist.jpeg";
             break;
        case 'snow':
             weather_img.src="./Image/snow.jpeg";
             break;
                          
        }   
                
        console.log(weather_data);
    }

    searchBtn.addEventListener('click', () => {
        checkWeather(inputBox.value);
    });
});