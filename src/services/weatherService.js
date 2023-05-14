// api key: a9e21b4ee026689783db83463f84b3fc
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?q=lahore&appid=a9e21b4ee026689783db83463f84b3fc

const API_KEY = "a9e21b4ee026689783db83463f84b3fc";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

// we can call two types of APIs
// 1 - oneCall
// 2 - weather     -> this will be the "info" parameter in the following method.

const getWeatherData = (info, params) => {
    const url = new URL(BASE_URL + info);
    //  the params will be an object consisting of the search params. the URLSearchParams will convert into search params automatically. 
    url.search = new URLSearchParams({...params, appid:API_KEY});
    // return url

    return fetch(url).then(res => res.json()).then(data => data);


}

export {getWeatherData};
