import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { useState } from 'react';
const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [openCategory, setOpenCategory] = useState(false);

  return (
    <div className={"relative"}>
        {/* this will appear only when screen is larger than md */}
        <div className={"hidden md:flex  justify-between mx-10 items-center my-6 bg-slate-100 p-5 rounded-lg fixed right-0 left-0 z-0"}>
            <h1 className={"text-2xl font-bold text-orange-500"}>News Nexus</h1>
            <ul className="flex space-x-10">
                <li>Home</li>
                <li className={`cursor-pointer relative`} onClick={() => setOpenCategory(!openCategory)}>Categories <ArrowDropDownOutlinedIcon/></li>
                <div className={`${openCategory? "flex-col" : "hidden"}  bg-slate-100 px-12 rounded-lg absolute w-max top-20 justify-between`}>
                    <ul>
                        <li>Category 1</li>
                        <li>Category 2</li>
                        <li>Category 3</li>
                        <li>Category 4</li>
                    </ul>
                </div>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
            <div className={"flex space-x-2 align-middle items-center"}>
                <input type="search" placeholder="Search trending news" className={"text-lg p-2 outline-none rounded-lg text-orange-400"} />
                <button><TravelExploreIcon/></button>
            </div>
        </div>

        <div className={"md:hidden flex justify-between mx-4 items-center my-3 bg-slate-100 p-5 rounded-lg fixed right-0 left-0"}>
            <button onClick={() => {setOpenMenu(!openMenu)}}><MenuOutlinedIcon className={"w-1/12 text-xl"}/></button>
            <h1 className={"text-2xl font-bold text-orange-500 w-11/12 text-center "}>News Nexus</h1>
        </div>

        <div className={`md:hidden bg-slate-100 p-5 ${openMenu ? 'block' : 'hidden'} h-max w-min z-10 absolute top-24 left-4 rounded-br-lg rounded-tr-lg `}>
            <div className={"flex space-x-1"}>
                <input type="search" placeholder="Search trending news" className={"text-md p-2 outline-none rounded-lg text-orange-400"} />
                <button><TravelExploreIcon/></button>
            </div>
            <ul className={"flex-col items-center justify-center my-7 space-y-4 text-lg font-semibold"}>
                <li>Home</li>
                <li  onClick={() => setOpenCategory(!openCategory)} className={"cursor-pointer"}>Categories <ArrowDropDownOutlinedIcon/></li>
                <div className={`${openCategory? 'block' : "hidden" }`}>
                    <ul>
                        <li>Category 1</li>
                        <li>Category 2</li>
                        <li>Category 3</li>
                        <li>Category 4</li>
                    </ul>
                </div>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>


        </div>


    </div>
  )
}

export default Navbar
