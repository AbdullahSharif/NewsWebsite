

function WeatherButtons({setQuery}) {
    const cities = [
        {
            id: 1,
            name: "islamabad"
        },
        {
            id: 2,
            name: "lahore"
        },
        {
            id: 3,
            name: "karachi"
        },
        {
            id: 4,
            name: "peshawar"
        },
        {
            id: 5,
            name: "multan"
        },
    ]
  return (
    <div className="hidden md:flex justify-around items-center">
        {
            cities.map(city => {
                return (
                <button key={city.id} className="text-white hover:text-orange-500 hover:scale-125 transition ease-out first-letter:uppercase" onClick={() => setQuery({q: city.name})}>
                    {city.name}
                </button>
                );
            })
        }
      
    </div>
  )
}

export default WeatherButtons
