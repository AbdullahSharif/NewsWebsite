import HeroImage from "../assets/images/hero image.webp"


const Hero = ({news}) => {
  return (

    <>
    { news &&
    <div className={` flex flex-col md:flex-row justify-between my-60`}>
        <div><img src={news[0].urlToImage} alt="breaking_news" className={`rounded-xl`} /></div>
        <div className={`mt-8 md:mt-0 md:mx-8 md:w-[70%] text-center flex flex-col justify-center items-center`}>
            <h1 className={`font-extrabold mb-8 md:text-4xl`}>{news.title ? news.title : "Top News"}</h1>
            <p className="font-light">
            {news[0].description}
            </p>
            
        </div>
      
    </div>}
    </>
  )
}

export default Hero
