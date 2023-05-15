import SportImage from "../assets/images/sports.jpg";
import Card from "./Card"
import { useEffect, useState } from "react";
import { getFormatedNews } from "../services/newServices";





const Sports = () => {

    // const [sportsNews, setSportsNews] = useState([
    //     {
    //         newsImage: SportImage,
    //         newsTitle : "title 1",
    //         newsDesc:"description"
    //     },
    //     {
    //         newsImage: SportImage,
    //         newsTitle : "title 2",
    //         newsDesc:"description"
    //     },
    //     {
    //         newsImage: SportImage,
    //         newsTitle : "title 3",
    //         newsDesc:"description"
    //     },
    //     {
    //         newsImage: SportImage,
    //         newsTitle : "title 4",
    //         newsDesc:"description"
    //     }
    // ]);

    const [sportsNews, setSportsNews] = useState(null)

    useEffect(() => {
        const fetchCategoryNews = async (category, country) => {
            const data = await getFormatedNews(category, country)
            setSportsNews(data)
            // console.log(data)
        }
        fetchCategoryNews("sports", "us")

    }, [])


  return (

    
    <div id="sports" className="my-80">


        {sportsNews && 
            <div>
                <div className={`flex flex-col md:flex-row items-center text-center`}>
            
            
                    <div className={`md:w-1/2`}>
                        <h1 className=" font-extrabold text-3xl md:text-7xl my-8 md:my-40">Sports World</h1> 
                    </div>

                    <div className={`flex flex-col md:flex-row justify-center items-center md:w-1/2  flex-wrap md:space-x-8 md:space-y-8 space-y-6`}>
                        {sportsNews.slice(0,4).map(sports => {
                            return (
                                <Card news={sports} width={"28rem"} key={sports.title}   />
                            )
                        })}
                        
                    </div>
            

                </div>
                <div className="flex justify-center mt-10 text-orange-500 hover:underline">
                    <a href="#" >More about Sports...</a>
                </div>

            </div>
        }
        
        
    </div>
            
  )
}

export default Sports
