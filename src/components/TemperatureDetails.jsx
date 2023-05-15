
import {BsThermometerHalf} from "react-icons/bs";
import {FiDroplet, FiSun, FiSunset, FiArrowUp, FiArrowDown} from "react-icons/fi";
import {TiWeatherWindyCloudy} from "react-icons/ti";
import { getIcon } from "../services/weatherService";

function TemperatureDetails({weather: {description, icon, temp, feels_like, humidity, speed, sunrise, sunset, temp_min, temp_max}}) {
  return (
    <div className="select-none">
      <div className="text-xl flex justify-center items-center text-cyan-300 py-6"> 
        <p>{description}</p>
      </div>

      <div className="flex flex-row justify-around items-center">
        <img src={getIcon(icon)} alt="weather" className="w-32" />
        <p className="text-5xl text-white">{temp.toFixed()} °</p>
        <div className="hidden md:flex flex-col items-center space-y-2 font-extralight text-[12px] text-white">
            <div className="flex flex-row items-center justify-center space-x-1">
                <BsThermometerHalf size={20}/>
                <span>Real Feel:</span>
                <span className="font-bold">{feels_like} °</span>
            </div>
            <div className="flex flex-row items-center justify-center space-x-1">
                <FiDroplet size={19}/>
                <span>Humidity:</span>
                <span className="font-bold">{humidity}%</span>
            </div>

            <div className="flex flex-row items-center justify-center space-x-1">
                <TiWeatherWindyCloudy size={20}/>
                <span>Wind:</span>
                <span className="font-bold">{speed} km/h</span>
            </div>
        </div>

      </div>

      <div className="flex flex-row justify-around my-12 text-white font-extralight text-[12px]">

        <div className="flex flex-row justify-center items-center space-x-2">
            <FiSun size={20}/>
            <span>SunRise:</span>
            <span className="font-bold">{sunset} </span>
        </div>

        <p>|</p>

        <div className="flex flex-row justify-center items-center space-x-2">
            <FiSunset size={20}/>
            <span>SunSet:</span>
            <span className="font-bold">{sunrise} </span>
        </div>

        <p className="hidden md:block">|</p>

        <div className="hidden md:flex flex-row justify-center items-center space-x-2">
            <FiArrowUp size={20}/>
            <span>High:</span>
            <span className="font-bold">{temp_max} °</span>
        </div>

        <p className="hidden md:block">|</p>

        <div className="hidden md:flex flex-row justify-center items-center space-x-2">
            <FiArrowDown size={20}/>
            <span>Low:</span>
            <span className="font-bold">{temp_min} °</span>
        </div>




      </div>
    </div>
  )
}

export default TemperatureDetails
