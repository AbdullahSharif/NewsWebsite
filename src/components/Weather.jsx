import TemperatureDetails from "./TemperatureDetails"
import TimeLocation from "./TimeLocation"
import WeatherButtons from "./WeatherButtons"
import WeatherInputs from "./WeatherInputs"

import {getFormatedWeatherData } from "../services/weatherService"
import { useEffect, useState } from "react"


function Weather() {

  const [query, setQuery] = useState({q: "london"});
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data =  await getFormatedWeatherData({...query, units})
      setWeather(data);
    }

    fetchWeatherData();
    
  }, [query, units])

  const changeColor = () => {
    if(!weather) return "from-cyan-600 to-blue-600";
    const threshhold = units === "metric" ? 25 : 60;
    if(weather.temp < threshhold) {
      return "from-cyan-600 to-blue-600";
    }
    else{
      return "from-yellow-700 to-orange-700";
    }


  }

  return (
    <div className={`rounded-lg bg-gradient-to-br  p-8 ${changeColor()}`}>
      <WeatherButtons setQuery={setQuery} />
      <WeatherInputs setQuery={setQuery} setUnits={setUnits} units={units}/>

      {weather &&
        <div>
          <TimeLocation weather={weather}/>
          <TemperatureDetails weather={weather}/>

        </div>
      }

      
      
    </div>
  )
}

export default Weather
