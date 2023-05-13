

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row bg-slate-100 mb-7 rounded-lg p-4 justify-around items-center">
      <div className="text-orange-500 font-semibold text-3xl">
        <p>News</p>
        <h1 className="text-4xl font-bold">Nexus</h1>
      </div>
      <div className="flex flex-col md:flex-row text-xl justify-center items-center">
        <div className="flex flex-col font-semibold md:mx-14 justify-center">
            <a href="#" className="my-2 hover:text-orange-500">Home</a>
            <a href="#" className="my-2 hover:text-orange-500" >About</a>
            <a href="#" className="my-2 hover:text-orange-500">Contact Us</a>
        </div>
        <div className="flex flex-col font-semibold justify-center items-center">
            <a href="#" className="my-2 hover:text-orange-500">Category 1</a>
            <a href="#" className="my-2 hover:text-orange-500" >Category 2</a>
            <a href="#" className="my-2 hover:text-orange-500">Category 3</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
