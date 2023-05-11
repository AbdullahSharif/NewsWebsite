import TechImage from "../assets/images/tech.jpg";
import Card from "./Card"
import { useState } from "react";



const Sports = () => {

    const [techNews, setTechNews] = useState([
        {
            newsImage: TechImage,
            newsTitle : "title 1",
            newsDesc:"description"
        },
        {
            newsImage: TechImage,
            newsTitle : "title 2",
            newsDesc:"description"
        },
        {
            newsImage: TechImage,
            newsTitle : "title 3",
            newsDesc:"description"
        },
        {
            newsImage: TechImage,
            newsTitle : "title 4",
            newsDesc:"description"
        }
    ]);


  return (
    <div id="sports" className="my-80">

        
        <div className={`flex flex-col md:flex-row items-center text-center`}>
            
            <div className={`flex flex-col md:flex-row justify-center items-center md:w-1/2  flex-wrap md:space-x-8 md:space-y-8 space-y-6`}>
                {techNews.map(sports => {
                    return (
                        <Card news={sports} width={"28rem"} key={sports.newsTitle} imgWidth={"24rem"} />
                    )
                })}
                
            </div>
            <div className={`md:w-1/2`}>
                <h1 className=" font-extrabold text-3xl md:text-7xl my-8 md:my-40">Technology World</h1> 
            </div>
            

        </div>
        <div className="flex justify-center mt-10 text-orange-500 hover:underline">
            <a href="#" >More about Technology...</a>
        </div>
    </div>
  )
}

export default Sports
