import placeHolder from "../assets/images/tech.jpg"

function Card (props) {
  return (
    <div className={`shadow-lg rounded-lg transition ease-out hover:scale-105 w-[24rem] h-[24rem]`}>
      
      <div className={"image text-center object-cover" }>
        <img src= {props.news.urlToImage ? props.news.urlToImage : placeHolder } alt="new_tag" className={`rounded-lg w-full h-48 object-cover`} />
      </div>

      <div className="description py-3 px-4">
        <h4 className={`font-light text-[16px]`}>{props.news.title}</h4>
        {/* <p className="text-xl">{props.news.newsDesc}</p> */}
      </div>


    </div>
  ) 
}

export default Card
