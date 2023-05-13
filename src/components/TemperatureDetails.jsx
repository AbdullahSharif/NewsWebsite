import Sun from "../assets/images/sun.png";
import {BsThermometerHalf} from "react-icons/bs";
import {FiDroplet, FiSun, FiSunset, FiArrowUp, FiArrowDown} from "react-icons/fi";
import {TiWeatherWindyCloudy} from "react-icons/ti";

function TemperatureDetails() {
  return (
    <div>
      <div className="text-xl flex justify-center items-center text-cyan-300 py-6"> 
        <p>Cloudy or Whatever</p>
      </div>

      <div className="flex flex-row justify-around items-center">
        <img src={Sun} alt="weather" className="w-20" />
        <p className="text-5xl text-white">34°</p>
        <div className="hidden md:flex flex-col items-center space-y-2 font-extralight text-[12px] text-white">
            <div className="flex flex-row items-center justify-center space-x-1">
                <BsThermometerHalf size={20}/>
                <span>Real Feel:</span>
                <span className="font-bold">38°</span>
            </div>
            <div className="flex flex-row items-center justify-center space-x-1">
                <FiDroplet size={19}/>
                <span>Humidity:</span>
                <span className="font-bold">64%</span>
            </div>

            <div className="flex flex-row items-center justify-center space-x-1">
                <TiWeatherWindyCloudy size={20}/>
                <span>Wind:</span>
                <span className="font-bold">9 km/h</span>
            </div>
        </div>

      </div>

      <div className="flex flex-row justify-around my-12 text-white font-extralight text-[12px]">

        <div className="flex flex-row justify-center items-center space-x-2">
            <FiSun size={20}/>
            <span>Rise:</span>
            <span className="font-bold">04:50 AM</span>
        </div>

        <p>|</p>

        <div className="flex flex-row justify-center items-center space-x-2">
            <FiSunset size={20}/>
            <span>SunSet:</span>
            <span className="font-bold">09:06 PM</span>
        </div>

        <p className="hidden md:block">|</p>

        <div className="hidden md:flex flex-row justify-center items-center space-x-2">
            <FiArrowUp size={20}/>
            <span>High:</span>
            <span className="font-bold">39°</span>
        </div>

        <p className="hidden md:block">|</p>

        <div className="hidden md:flex flex-row justify-center items-center space-x-2">
            <FiArrowDown size={20}/>
            <span>Low:</span>
            <span className="font-bold">31°</span>
        </div>




      </div>
    </div>
  )
}

export default TemperatureDetails
