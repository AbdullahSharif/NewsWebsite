// import { useState, useEffect } from "react"
import { Link } from 'react-router-dom';
import Card from './Card';
// import TrendingNews from "../assets/images/trending_news.jpg";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
// import { getFormatedHeadlines } from "../services/newServices";




const Carousel = ({trendingNews}) => {

    // const [trendingNews, setTrendingNews] = useState(null);

    // useEffect(() => {
    //     const fetchHeadlines = async (info, country) => {
    //         const data = await getFormatedHeadlines(info, country)
    //         setTrendingNews(data)

    //     }

    //     fetchHeadlines("top-headlines", "us")
    {console.log(trendingNews)}
    // }, [])



    const scrollLeft = () => {
        document.getElementById("content").scrollLeft -= 400;
    }
    const scrollRight = () => {
        document.getElementById("content").scrollLeft += 400;
    }
    
    
    

  return (
    <div className={"relative h-[26rem]"}>

        {
        
            trendingNews && 
            <div id="content" className={`carousel p-4 flex items-center justify-start  space-x-4 scroll-smooth scrollbar-hide overflow-hidden h-[26rem]`}>
        
                {trendingNews.map(news => {
                    return (
                        <Link to={"/trending"} key={news.title} className="transition ease-out hover:scale-105" >
                            <Card  news={news} className="transition ease-out hover:scale-125"/> 
                        </Link>
                        
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


        
        }
    
    </div>
  )
}

export default Carousel
