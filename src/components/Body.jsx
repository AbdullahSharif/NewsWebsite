import Sports from "./Sports"
import Hero from "./Hero"
import Tech from "./Tech"
import TrendingNews from "./TrendingNews"
import Footer from "./Footer"


const Body = () => {
  return (
    <div className={"absolute mt-40 mx-10  right-0 left-0 text-3xl z-0"}>
        <Hero/>
        <TrendingNews/>
        <Sports/>
        <Tech/>
        <Footer/>
    </div>
  )
}

export default Body
