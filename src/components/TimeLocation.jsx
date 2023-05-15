

function TimeLocation({weather:{dt, country, name}}) {
  {console.log({dt, name, country
  })}
  return (
    
    <div className="p-6 select-none">
        <div className="flex justify-center items-center my-6 space-x-4 text-white text-xl font-extralight">
            <p>{dt}</p>
        </div>
        <div className="flex justify-center items-center my-3">
            <p className="text-white text-3xl font-medium">{`${name}, ${country}`}</p>
        </div>
    </div>
  )
}

export default TimeLocation
