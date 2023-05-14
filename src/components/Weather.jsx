import Forecast from "./Forecast"
import TemperatureDetails from "./TemperatureDetails"
import TimeLocation from "./TimeLocation"
import WeatherButtons from "./WeatherButtons"
import WeatherInputs from "./WeatherInputs"

import { getWeatherData } from "../services/weatherService"


function Weather() {
    const fetchWeatherData = async () => {
        const data =  await getWeatherData("weather", {q:"lahore"})
        console.log(data)
    }

    // fetchWeatherData()

    

  return (
    <div className="bg-blue-500 rounded-lg bg-gradient-to-br from-cyan-600 to-blue-600 p-8">
      <WeatherButtons/>
      <WeatherInputs/>

      <TimeLocation/>
      <TemperatureDetails/>
      <Forecast title="hourly forecast"/>
      <Forecast title="Daily forecast"/>
    </div>
  )
}

export default Weather
