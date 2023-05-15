import Carousel from "./Carousel"


const TrendingNews = ({trendingNews}) => {
  return (
    <div className="my-80">
        <h1 className={`text-center font-extrabold text-3xl md:text-7xl my-8 md:my-40`}>Trending News Around the World</h1>
        <Carousel trendingNews={trendingNews}/>
    </div>
  )
}

export default TrendingNews
