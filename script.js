const inputBox = document.querySelector('.inputbox');
const searchBtn = document.getElementById('searchBtn');
const weather_image = document.querySelector('.image');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const pressure = document.getElementById('pressure');


async function checkWeather(city) {
    const api_key = "6c8d1be59f909bc383927bb65162ce47";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}kmph`;
    pressure.innerHTML = `${weather_data.main.pressure}hpa`;

    switch (weather_data.weather[0].main) {
        case 'Clouds':
            weather_image.src = "/images/partlycloud.png";
        case 'Clear':
            weather_image.src = "/images/clearsky.png";
        case 'Sunny':
            weather_image.src = "/images/sunny.png";
        case 'Rain':
            weather_image.src = "/images/rain.png";
        // case 'Mist':
        //     weather_image.src = "/images/mist.png";
        case 'Snow':
            weather_image.src = "/images/snow.png";
    }

    console.log(weather_data);
}


searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
});