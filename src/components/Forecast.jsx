
import sampleImg from "../assets/images/sun.png"
function Forecast({title}) {
  return (
    <div>
      <div className='flex px-6 flex-col text-white mt-6 capitalize'>
        <p>{title}</p>
        <hr className='my-2' />
      </div>

      <div className='flex flex-row justify-around items-center '>

        <div className='flex flex-col items-center space-y-2 font-extralight text-white text-[12px]'>
            <p>12:00 PM</p>
            <img src={sampleImg} alt="weather" className='w-14'/>
            <p>39°</p>
        </div>

        <div className='flex flex-col items-center space-y-2 font-extralight text-white text-[12px]'>
            <p>12:00 PM</p>
            <img src={sampleImg} alt="weather" className='w-14'/>
            <p>39°</p>
        </div>

        <div className='flex flex-col  items-center space-y-2 font-extralight text-white text-[12px]'>
            <p>12:00 PM</p>
            <img src={sampleImg} alt="weather" className='w-14'/>
            <p>39°</p>
        </div>

        <div className='flex flex-col items-center space-y-2 font-extralight text-white text-[12px]'>
            <p>12:00 PM</p>
            <img src={sampleImg} alt="weather" className='w-14'/>
            <p>39°</p>
        </div>

        <div className='flex flex-col  items-center space-y-2 font-extralight text-white text-[12px]'>
            <p>12:00 PM</p>
            <img src={sampleImg} alt="weather" className='w-14'/>
            <p>39°</p>
        </div>

      </div>



    </div>
  )
}

export default Forecast
