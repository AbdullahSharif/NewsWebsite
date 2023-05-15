
import Card from "./Card"
import { useState, useEffect } from "react";
import { getFormatedNews } from "../services/newServices";



const Business = () => {

    const [businessNews, setBusinessNews] = useState(null);

    useEffect(() => {
        const fetchCategoryNews = async (category, country) => {
            const data = await getFormatedNews(category, country)
            setBusinessNews(data)
            // console.log(data)
        }
        fetchCategoryNews("business", "us")

    }, [])




  return (
    <div id="tech" className="my-80">

        {
            businessNews && 
            
        

        <div>
        <div className={`flex flex-col md:flex-row items-center text-center`}>
            
            
            <div className={`md:w-1/2`}>
                <h1 className=" font-extrabold text-3xl md:text-7xl my-8 md:my-40">Business World</h1> 
            </div>

            <div className={`flex flex-col md:flex-row justify-center items-center md:w-1/2  flex-wrap md:space-x-8 md:space-y-8 space-y-6`}>
                {businessNews.slice(0,4).map(sports => {
                    return (
                        <Card news={sports} width={"28rem"} key={sports.title}   />
                    )
                })}
                
            </div>
            

        </div>
        <div className="flex justify-center mt-10 text-orange-500 hover:underline">
            <a href="#" >More about Businesses...</a>
        </div>

        </div>
            }
    </div>
  )
}

export default Business
