import { useState } from "react";
import {CiSearch, CiLocationOn} from "react-icons/ci";



function WeatherInputs({units, setUnits, setQuery}) {
  const [city, setCity] = useState("");

  const handleClick = () => {
    if(city) setQuery({q: city})
  }

  const handleUnitChange = (e) => {
    if (e.currentTarget.name !== units) {
      setUnits(e.currentTarget.name)
    }
  }

  const handleLocationClick = () => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const lon = position.coords.longitude;
        const lat = position.coords.latitude;

        setQuery({
          lat,
          lon
        })
      })
    }
  }

  return (
    <div className="flex flex-col md:flex-row justify-center my-8 p-8">
        <div className="flex flex-col md:flex-row md:w-3/4 justify-center space-x-4 items-center">
            
            <input 
            type="text" 
            className="focus:outline-none p-2 font-light shadow-xl capitalize placeholder:lowercase" 
            placeholder="search for your city..." 
            value={city}
            onChange={(e) => setCity(e.target.value)}
            />

            <div className="flex flex-row space-x-2 mt-4 md:mt-0">
              <button onClick={() => handleClick()}><CiSearch size={25} className="text-white transition ease-out hover:scale-125"/></button>
              <button onClick={() => handleLocationClick()}><CiLocationOn size={25} className="text-white transition ease-out hover:scale-125"/></button>

            </div>
            
           
            
            
        </div>

        <div className="flex flex-row md:w-1/4 justify-center md:my-0 my-4 items-center">
            <button name="metric" className="text-white transition ease-out hover:scale-125" onClick={handleUnitChange}>°C</button>
            <p className="text-white text-xl mx-4">|</p>
            <button name="imperial" className="text-white transition ease-out hover:scale-125" onClick={handleUnitChange} >°F</button>
        </div>
      

    </div>
  )
}

export default WeatherInputs
