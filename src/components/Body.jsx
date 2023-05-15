import Sports from "./Sports"
import Hero from "./Hero"
import Tech from "./Tech"
import TrendingNews from "./TrendingNews"
import Footer from "./Footer"
import Weather from "./Weather"
import { getFormatedHeadlines } from "../services/newServices";
import { useState, useEffect } from "react"
import Business  from "./Business";
import Health from "./Health"
import Entertainment from "./Entertainment";
import Science from "./Science";


const Body = () => {

  const [trendingNews, setTrendingNews] = useState(null);

    useEffect(() => {
        const fetchHeadlines = async (info, country) => {
            const data = await getFormatedHeadlines(info, country)
            setTrendingNews(data)

        }

        fetchHeadlines("top-headlines", "us")
    }, [])

  return (
    <div className={"absolute mt-40 mx-10  right-0 left-0 text-3xl z-0"}>
        <Hero news={trendingNews}/>
        <TrendingNews trendingNews={trendingNews}/>
        <Weather/>
        <Sports/>
        <Tech/>
        <Business/>
        <Entertainment/>
        <Health/>
        <Science/>
        <Footer/>
    </div>
  )
}

export default Body
