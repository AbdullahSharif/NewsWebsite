import { useState } from "react"
import Footer from "../components/Footer";


function Contact() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [comments, setComments] = useState("")


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      comments
    };

    const response = await fetch("http://localhost:9000/api/contact/submit/", {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(formData)
    })

    const recieved = await response.json()

    if(recieved.submitted) {
      alert(recieved.message)
    }else{
      alert("Sorry! something went wrong.")
    }


    
    setName("")
    setComments("")
    setEmail("")
  }

  return (
    
    <div className={"absolute mt-40 mx-10  right-0 left-0 text-3xl z-0"}>
        <h1 className="text-center font-bold">Have any comments? </h1>
        <form name="contactForm" method="post" className="flex flex-col space-y-8 items-center my-8 box-border" onSubmit={handleSubmit}>
          <input type="text" name="name" value={name} required onChange={(e) => setName(e.target.value) } placeholder="Your good name" className="w-full focus:outline-none focus:border-orange-500  border-2 rounded-lg p-2 text-lg" />
          <input type="text" name="email" value={email} required onChange={(e) => setEmail(e.target.value) } placeholder="Your Email" className="w-full focus:outline-none focus:border-orange-500  border-2 rounded-lg p-2 text-lg" />
          <textarea name="comments" id="" value={comments} required onChange={(e) => setComments(e.target.value)} className="w-full focus:outline-none focus:border-orange-500 border-2 rounded-lg p-2 text-lg h-96" placeholder="Enter your comments..."></textarea>
          <button type="submit" className="border-2 hover:bg-orange-500 hover:text-white text-xl w-max p-6 transition ease-out hover:border-none rounded-lg box-border">Submit</button>
        </form>
        <Footer/>

    </div>
    
  )
}

export default Contact
