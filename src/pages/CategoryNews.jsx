import { useState, useEffect } from "react"
import {useLocation} from "react-router-dom"
import { getFormatedNews } from "../services/newServices"
import defaultImage from "../assets/images/tech.jpg"

function CategoryNews() {
    const location = useLocation()
    const [path, setPath] = useState(location.pathname)
    const [news, setNews] = useState(null)


    useEffect(() => {
        const fetchNews = async (category, country) => {
            const newsData = await getFormatedNews(category, country)
            setNews(newsData)
        }
        if(path !== location.pathname){
            setPath(location.pathname)
        }

        fetchNews(path.slice(1,), "us")

    }, [location, path])

  return (
    <div className={"absolute mt-40 mx-10  right-0 left-0 text-3xl z-0"}>
        {
            news && 
            <div className = {"flex flex-col space-y-12"}>
                {
                    news.map(n => {
                        return (
                            <div key={n.title} className={`w-full flex flex-col h-max items-center bg-slate-200 rounded-xl p-6 shadow-2xl space-y-4`}>
                                <div>
                                    <img src={`${n.urlToImage ? n.urlToImage : defaultImage}`} alt={n.title} className="w-[60rem] h-[30rem] object-contain rounded-lg" />
                                </div>

                                <h3 className="font-extrabold text-center">{n.title}</h3>
                                <p className="font-extralight self-end">{n.author? `~ ${n.author}` : " ~ Author"}</p>
                                <div className="font-extralight">
                                    <p>{n.description}</p>
                                </div>
                                <div className="text-orange-500 hover:underline">
                                    <a href={n.url}>Follow the news ...</a>
                                </div>

                            </div>
                        )
                    })
                }

            </div>
            
        }


      
    </div>
  )
}

export default CategoryNews
