import { DateTime } from "luxon";
// api key: a9e21b4ee026689783db83463f84b3fc
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?q=lahore&appid=a9e21b4ee026689783db83463f84b3fc

const API_KEY = "a9e21b4ee026689783db83463f84b3fc";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

// we can call two types of APIs
// 1 - oneCall
// 2 - weather     -> this will be the "info" parameter in the following method.

const getWeatherData = async (info, params) => {
    const url = new URL(BASE_URL + info);
    //  the params will be an object consisting of the search params. the URLSearchParams will convert into search params automatically. 
    url.search = new URLSearchParams({...params, appid:API_KEY});
    // return url

    return fetch(url).then(res => res.json());


}

const formatWeather = (data) => {
    const {
        coord : {lon, lat},
        weather,
        main: { temp, feels_like, temp_min, temp_max, humidity},
        wind: {speed},
        dt,
        sys: { country, sunrise, sunset}, 
        timezone,
        name

    } = data;
    const {description, icon} = weather[0];

    return {lon, lat, description, icon, temp, feels_like, temp_min, temp_max, speed, humidity, dt : formatToLocalTime(dt, timezone), country, sunrise: formatToLocalTime(sunrise, timezone,'hh:mm a'), sunset: formatToLocalTime(sunset, timezone, "hh:mm a"), timezone, name};

}

const formatToLocalTime = (secs, zone, format = "cccc, dd LLL yyyy' | Time Monitored: 'hh:mm a") => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

// const getFormatedForecast = (data) => {
//     let {timezone, daily, hourly} = data;

//     daily = daily.slice(1, 6).map(d => {
//         return {
//             time: formatToLocalTime(d.dt, timezone, "ccc"),
//             temp: d.temp.day,
//             icon: d.weather[0].icon,
//         }
//     })

//     hourly = hourly.slice(1,6).map(h => {
//         return {
//             time: formatToLocalTime(h.dt, timezone, "hh:mm a"),
//             temp: h.temp,
//             icon: h.weather[0].icon
//         }
//     })

//     return {timezone, daily, hourly}

// }


const getFormatedWeatherData = async (searchParams) => {
    const formatedData = await getWeatherData("weather",searchParams).then(data => formatWeather(data));

    // const {lon, lat} = formatedData;

    // const currentForecastData = await getWeatherData("onecall", {
    //     lon, 
    //     lat,
    //     exclude: "minutely,alerts,current",
    //     units: searchParams.units,
    // } ).then(data => getFormatedForecast(data))

    return ({...formatedData})


}

const getIcon = (code) =>
`http://openweathermap.org/img/wn/${code}@2x.png`;

export {getFormatedWeatherData, getIcon};
