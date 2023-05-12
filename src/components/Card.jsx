

function Card (props) {
  return (
    <div className={`shadow-lg rounded-lg w-96`}>

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
