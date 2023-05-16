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
            <Link className="my-2 hover:text-orange-500" to={"/"}>Home</Link>
            <Link className="my-2 hover:text-orange-500" to={"/about"}>About</Link>
            <Link className="my-2 hover:text-orange-500" to={"/contact"}>Contact Us</Link>
        </div>
        <div className="flex flex-col font-semibold justify-center items-center">
          <Link className={`my-2 hover:text-orange-500 transition ease-in-out`} to={"/general"}>General</Link>
          <Link className={`my-2 hover:text-orange-500 transition ease-in-out`} to={"/science"}>Science</Link>
          <Link className={`my-2 hover:text-orange-500 transition ease-in-out`} to={"/business"}>Business</Link> 
        </div>

        <div className="flex flex-col font-semibold justify-center items-center">
          <Link className={`my-2 hover:text-orange-500 transition ease-in-out`} to={"/technology"}>Technology</Link>
          <Link className={`my-2 hover:text-orange-500 transition ease-in-out`} to={"/health"}>Health</Link>
          <Link className={`my-2 hover:text-orange-500 transition ease-in-out`} to={"/sports"}>Sports</Link>
        </div>

        <div className="flex flex-col font-semibold justify-center items-center">
          <Link className={`my-2 hover:text-orange-500 transition ease-in-out`} to={"/entertainment"}>Entertainment</Link>
        </div>

        
      </div>
    </div>
  )
}

export default Footer

