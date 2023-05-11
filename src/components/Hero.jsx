import HeroImage from "../assets/images/hero image.webp"


const Hero = () => {
  return (
    <div className={` flex flex-col md:flex-row justify-between my-60`}>
        <div><img src={HeroImage} alt="breaking_news" className={`rounded-xl`} /></div>
        <div className={`mt-8 md:mt-0 md:mx-8 md:w-[70%] text-center flex flex-col justify-center items-center`}>
            <h1 className={`font-extrabold mb-8 md:text-4xl`}>Breaking News</h1>
            <p>
            SC orders IG Islamabad to present Imran Khan before CJP Bandial-led bench within an hour
            SC orders IG Islamabad to present Imran Khan before CJP Bandial-led bench within an hour
            Three-member SC bench hears PTIs plea challenging Imran Khans arrest
            </p>
            
        </div>
      
    </div>
  )
}

export default Hero
