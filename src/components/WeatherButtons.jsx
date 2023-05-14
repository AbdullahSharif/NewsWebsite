

function WeatherButtons() {
    const cities = [
        {
            id: 1,
            name: "Islamabad"
        },
        {
            id: 2,
            name: "Lahore"
        },
        {
            id: 3,
            name: "Karachi"
        },
        {
            id: 4,
            name: "Peshawar"
        },
        {
            id: 5,
            name: "Multan"
        },
    ]
  return (
    <div className="hidden md:flex justify-around items-center">
        {
            cities.map(city => {
                return (
                <button key={city.id} className="text-white hover:text-black hover:scale-125 transition ease-out">
                    {city.name}
                </button>
                );
            })
        }
      
    </div>
  )
}

export default WeatherButtons
