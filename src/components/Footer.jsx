import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row bg-slate-100 mb-7 rounded-lg p-4 justify-around items-center">
      <div className="text-orange-500 font-semibold text-3xl">
        <p>News</p>
        <h1 className="text-4xl font-bold">Nexus</h1>
      </div>
      <div className="flex flex-col md:flex-row text-xl justify-center items-center md:space-x-24">
        <div className="flex flex-col font-semibold md:mx-14 justify-center items-center md:items-start">
            <Link className="my-2 hover:text-orange-500">Home</Link>
            <Link className="my-2 hover:text-orange-500" >About</Link>
            <Link className="my-2 hover:text-orange-500">Contact Us</Link>
        </div>
        <div className="flex flex-col font-semibold justify-center items-center">
          <Link className={`my-2 hover:text-orange-500 transition ease-in-out`}>General</Link>
          <Link className={`my-2 hover:text-orange-500 transition ease-in-out`}>Science</Link>
          <Link className={`my-2 hover:text-orange-500 transition ease-in-out`}>Business</Link> 
        </div>

        <div className="flex flex-col font-semibold justify-center items-center">
          <Link className={`my-2 hover:text-orange-500 transition ease-in-out`}>Technology</Link>
          <Link className={`my-2 hover:text-orange-500 transition ease-in-out`}>Health</Link>
          <Link className={`my-2 hover:text-orange-500 transition ease-in-out`}>Sports</Link>
        </div>

        <div className="flex flex-col font-semibold justify-center items-center">
          <Link className={`my-2 hover:text-orange-500 transition ease-in-out`}>Entertainment</Link>
        </div>

        
      </div>
    </div>
  )
}

export default Footer

