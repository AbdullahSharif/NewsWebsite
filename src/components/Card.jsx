

function Card (props) {
  return (
    <div className={`shadow-lg rounded-lg w-96 transition ease-out hover:scale-105 hover:cursor-pointer`}>

      <div className={"image text-center object-cover" }>
        <img src= {props.news.newsImage} alt="new_tag" className={`rounded-lg w-full h-48 object-cover`} />
      </div>

      <div className="description py-3 px-4">
        <h4 className={`font-semibold`}>{props.news.newsTitle}</h4>
        <p className="text-xl">{props.news.newsDesc}</p>
      </div>

    </div>
  ) 
}

export default Card
