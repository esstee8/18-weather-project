var weather_api_key = ""
var base_url = "http://api.weatherapi.com/v1"


// Given location parameter (String), returns weather data as JSON via Promise
async function getWeather(location_parameter) {
    url = `${base_url}/forecast.json?key=${weather_api_key}&q=${location_parameter}&days=3`
    const response = await fetch(url, {mode: 'cors'});
    return await response.json()
}

// Extracts desired info from weather JSON object
const weatherFactory = weatherJSON => {
    let weather_data = weatherJSON
    let currentTempF = weather_data.current.temp_f
    let currentWindMPH = weather_data.current.wind_mph
    let currentHumidity = weather_data.current.humidity
    let lastUpdated =  weather_data.current.last_updated
    let isDay = weather_data.current.is_day
    let windGustMPH = weather_data.current.wind_mph
    let currentGustMPH = weather_data.current.gust_mph
    let currentRealFeels = weather_data.current.feelslike_f
    let currentCondition = weather_data.current.condition.text
    let currentConditionIcon = weather_data.current.condition.icon

    const getCurrentTempF = () => {return currentTempF}
    const getCurrentWindMPH = () => {return currentWindMPH}
    const getCurrentHumidity = () => {return currentHumidity}
    const getLastUpdated = () => {return lastUpdated}
    const getIsDay = () => {return isDay}
    const getWindGustMPH = () => {return windGustMPH}
    const getCurrentGustMPH = () => {return currentGustMPH}
    const getCurrentRealFeels = () => {return currentRealFeels}
    const getCurrentCondition = () => {return currentCondition}
    const getCurrentConditionIcon = () => {return currentConditionIcon}

    const getWeatherJSON = () => {return weather_data}
    return{ getWeatherJSON, getCurrentTempF, getCurrentWindMPH, getCurrentHumidity, getLastUpdated, getIsDay, getWindGustMPH, getCurrentGustMPH, getCurrentRealFeels, getCurrentCondition, getCurrentConditionIcon}
}

// Gets city name from form via 'submit' press as String
function getCity() {
    const input = document.querySelector('.search-box-input');
    return input.value;
}

function getWeatherWrapper(){
    getWeather(getCity())
        .then(weather_data => { // Successfully get JSON data
            console.log("SUCCESSFUL API CALL")
            // console.log(typeof(weather_data.current.temp_f))

            console.log("_______________________________")
            const weather_ = weatherFactory(weather_data)
            console.log(">: " + weather_.getCurrentTempF())
            console.log(">: " + weather_.getCurrentWindMPH())
            console.log(">: " + weather_.getCurrentHumidity())
            console.log(">: " + weather_.getLastUpdated())
            console.log(">: " + weather_.getIsDay())
            console.log(">: " + weather_.getWindGustMPH())
            console.log(">: " + weather_.getCurrentGustMPH())
            console.log(">: " + weather_.getCurrentRealFeels())
            console.log(">: " + weather_.getCurrentCondition())
            console.log(">: " + weather_.getCurrentConditionIcon())

        })
        .catch(error => { // something funky happened
            console.log("error happened: " + error)
        })
}