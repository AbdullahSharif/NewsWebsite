import TimeLocation from "./TimeLocation"
import WeatherButtons from "./WeatherButtons"
import WeatherInputs from "./WeatherInputs"


function Weather() {
  return (
    <div className="bg-blue-500 rounded-lg bg-gradient-to-br from-cyan-600 to-blue-600 p-8">
      <WeatherButtons/>
      <WeatherInputs/>

      <TimeLocation/>
    </div>
  )
}

export default Weather