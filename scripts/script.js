var weather_api_key = "a1dc48dfede346af91d35011230607"
var base_url = "http://api.weatherapi.com/v1"


async function getWeather(location_parameter) {
    url = `${base_url}/forecast.json?key=${weather_api_key}&q=${location_parameter}&days=3`
    const response = await fetch(url, {mode: 'cors'});
    const weatherDat = await response.json();
    console.log(weatherDat)
}

getWeather("London")
