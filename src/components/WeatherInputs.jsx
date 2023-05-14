import {CiSearch, CiLocationOn} from "react-icons/ci";



function WeatherInputs() {
  return (
    <div className="flex flex-col md:flex-row justify-center my-8 p-8">
        <div className="flex flex-col md:flex-row md:w-3/4 justify-center space-x-4 items-center">
            
            <input type="search" className="focus:outline-none p-2 font-light shadow-xl capitalize placeholder:lowercase" placeholder="search for your city..." />
            <div className="flex flex-row space-x-2 mt-4 md:mt-0">
              <button><CiSearch size={25} className="text-white transition ease-out hover:scale-125"/></button>
              <button><CiLocationOn size={25} className="text-white transition ease-out hover:scale-125"/></button>

            </div>
            
           
            
            
        </div>

        <div className="flex flex-row md:w-1/4 justify-center md:my-0 my-4 items-center">
            <button name="metric" className="text-white transition ease-out hover:scale-125">°C</button>
            <p className="text-white text-xl mx-4">|</p>
            <button name="imperial" className="text-white transition ease-out hover:scale-125">°F</button>
        </div>
      

    </div>
  )
}

export default WeatherInputs
