import { useState } from "react"
import Card from './Card';
import TrendingNews from "../assets/images/trending_news.jpg";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";



const Carousel = () => {

    const [terndingNews, setTrendingNews] = useState([
        {
            newsImage: TrendingNews,
            newsTitle : "title 1",
            newsDesc:"description"
        },
        {
            newsImage: TrendingNews,
            newsTitle : "title 2",
            newsDesc:"description"
        },
        {
            newsImage: TrendingNews,
            newsTitle : "title 3",
            newsDesc:"description"
        },
        {
            newsImage: TrendingNews,
            newsTitle : "title 4",
            newsDesc:"description"
        },
        {
            newsImage: TrendingNews,
            newsTitle : "title 5",
            newsDesc:"description"
        },
        {
            newsImage: TrendingNews,
            newsTitle : "title 6",
            newsDesc:"description"
        },
    ]);
    const scrollLeft = () => {
        document.getElementById("content").scrollLeft -= 400;
    }
    const scrollRight = () => {
        document.getElementById("content").scrollLeft += 400;
    }
    
    
    

  return (
    <div className={"relative"}>
    <div id="content" className={`carousel p-4 flex items-center justify-start overflow-x-hidden space-x-4 scroll-smooth scrollbar-hide overflow-hidden`}>
        
        {terndingNews.map(news => {
              return (
                <div key={news.newsTitle}>
                    <Card  news={news} width={"32rem"} imgWidth="32rem" /> 
                </div>
                
              );
        })}

        <div className={`absolute inset-0 flex justify-between items-center p-4`}>
            <button onClick={scrollLeft}>
                <ChevronLeft className={"font-bold shadow bg-white/80 rounded-full hover:bg-black hover:text-white"} sx={{fontSize: "3rem"}}/>
            </button>
            <button onClick={scrollRight}>
                <ChevronRight className={"font-bold shadow bg-white/80 rounded-full hover:bg-black hover:text-white"} sx={{fontSize: "3rem"}} />
            </button>
            
        </div>

        
    </div>
    </div>
  )
}

export default Carousel
