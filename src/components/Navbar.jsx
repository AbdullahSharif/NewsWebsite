import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { useState } from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [openCategory, setOpenCategory] = useState(false);

    const categories = [
        {
            id: 1,
            name: "general"
        }, 
        {
            id: 2,
            name: "science"
        }, 
        {
            id: 3,
            name: "technology"
        }, 
        {
            id: 4,
            name: "business"
        }, 
        {
            id: 5,
            name: "entertainment"
        }, 
        {
            id: 6,
            name: "sports"
        }, 
        {
            id: 7,
            name: "health"
        }, 

    ]

  return (
    <div className={"relative"}>
        {/* this will appear only when screen is larger than md */}
        <div className={"hidden md:flex  justify-between mx-10 items-center my-6 bg-slate-100 p-5 rounded-lg fixed right-0 left-0 z-10"}>
            <h1 className={"text-4xl font-bold text-orange-500"}>News Nexus</h1>
            <ul className="flex space-x-10 font-semibold text-xl">
                <li className='hover:text-orange-500 transition ease-in-out'><Link to={"/"}>Home</Link></li>
                <li className={`cursor-pointer relative hover:text-orange-500 transition ease-in-out`} onClick={() => setOpenCategory(!openCategory)}>Categories <ArrowDropDownOutlinedIcon/></li>
                <div className={`${openCategory? "flex-col" : "hidden"}  bg-slate-100 px-12 rounded-lg absolute w-max top-20 justify-between font-semibold`}>
                    <ul>
                        {
                            categories &&
                            categories.map(cat => {
                                return (
                                    <li key={cat.id} className={`my-2 hover:text-orange-500 transition ease-in-out first-letter:uppercase`}>
                                        <Link to={cat.name}>
                                            {cat.name}
                                        </Link>
                                    </li>
                                    )

                            })
                        }
                        {/* <li className={`my-2 hover:text-orange-500 transition ease-in-out`}>General</li>
                        <li className={`my-2 hover:text-orange-500 transition ease-in-out`}>Science</li>
                        <li className={`my-2 hover:text-orange-500 transition ease-in-out`}>Technology</li>
                        <li className={`my-2 hover:text-orange-500 transition ease-in-out`}>Business</li>
                        <li className={`my-2 hover:text-orange-500 transition ease-in-out`}>Entertainment</li>
                        <li className={`my-2 hover:text-orange-500 transition ease-in-out`}>Sports</li>
                        <li className={`my-2 hover:text-orange-500 transition ease-in-out`}>Health</li> */}



                    </ul>
                </div>
                <li className='hover:text-orange-500 transition ease-in-out'><Link to={"about"}>About Us</Link></li>
                <li className='hover:text-orange-500 transition ease-in-out'><Link to={"contact"}>Contact Us</Link></li>
            </ul>
            <div className={"flex space-x-2 align-middle items-center"}>
                <input type="search" placeholder="Search news around the world ..." className={"text-lg p-2 outline-none rounded-lg text-orange-400"} />
                <button className="transition ease-out hover:scale-125"><TravelExploreIcon/></button>
            </div>
        </div>

        
        <div className={"md:hidden flex justify-between mx-4 items-center z-10 my-3 bg-slate-100 p-5 rounded-lg fixed right-0 left-0"}>
            <button onClick={() => {setOpenMenu(!openMenu)}}><MenuOutlinedIcon className={"w-1/12 text-xl"}/></button>
            <h1 className={"text-2xl font-bold text-orange-500 w-11/12 text-center "}>News Nexus</h1>
        

        <div className={`md:hidden bg-slate-100 p-5 ${openMenu ? 'block' : 'hidden'} h-max w-min z-20 absolute top-24 left-4 rounded-br-lg rounded-tr-lg `}>
            <div className={"flex space-x-1"}>
                <input type="search" placeholder="Search news around the world..." className={"text-md p-2 outline-none rounded-lg text-orange-400"} />
                <button><TravelExploreIcon/></button>
            </div>
            <ul className={"flex-col items-center justify-center my-7 space-y-4 text-lg font-semibold"}>
                <li>Home</li>
                <li  onClick={() => setOpenCategory(!openCategory)} className={"cursor-pointer"}>Categories <ArrowDropDownOutlinedIcon/></li>
                <div className={`${openCategory? 'block' : "hidden" }`}>
                    <ul>

                        {
                            categories &&
                            categories.map(cat => {
                                return (
                                    <li key={cat.id} className={`my-2 hover:text-orange-500 transition ease-in-out first-letter:uppercase`}>
                                        <Link to={cat.name}>
                                            {cat.name}
                                        </Link>
                                    </li>
                                    )

                            })
                        }
                        {/* <li className={`my-2 hover:text-orange-500 transition ease-in-out`}>General</li>
                        <li className={`my-2 hover:text-orange-500 transition ease-in-out`}>Science</li>
                        <li className={`my-2 hover:text-orange-500 transition ease-in-out`}>Technology</li>
                        <li className={`my-2 hover:text-orange-500 transition ease-in-out`}>Business</li>
                        <li className={`my-2 hover:text-orange-500 transition ease-in-out`}>Entertainment</li>
                        <li className={`my-2 hover:text-orange-500 transition ease-in-out`}>Sports</li>
                        <li className={`my-2 hover:text-orange-500 transition ease-in-out`}>Health</li> */}
                    </ul>
                </div>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>


        </div>
        </div>
        


    </div>
  )
}

export default Navbar
