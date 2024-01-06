import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartSlice from "../../../Slices/CartSlice";
import { useState } from "react";
const Header = () => {
    const [showMenu,setShowMenu] = useState(false);
    const item = useSelector((store) => store.cart.items);
    console.log(item);
    return(
        <div className="flex flex-col">
        <div className="w-full h-70px bg-gray-900 flex items-center justify-around py-5 fixed top-0 left-0 z-50 shadow-xl">
                <span className="text-orange-500 text-xl font-bold ">Logo</span>
                <ul className=" hidden md:flex text-orange-500 items-center justify-evenly">
                    <li className="px-10 text-lg md:text-xl  font-bold ease-in-out duration-300 hover:underline"><Link to='/'>Home</Link></li>
                    <li className="px-10 text-lg md:text-xl font-bold ease-in-out duration-300 hover:underline"><Link to='/about'>About us</Link></li>
                    <li className="px-10 text-lg md:text-xl  font-bold ease-in-out duration-300 hover:underline"><Link to='/cart'>Cart (items {item.length})</Link></li>
                </ul>
                <GiHamburgerMenu className="flex md:hidden text-orange-500" onClick={() =>setShowMenu(!showMenu) }/>
     </div>
     {showMenu ? <ul className=" flex flex-col md:hidden text-orange-500 shadow-lg bg-gray-900 absolute pt-20 h-1/2 w-full items-center justify-around" onClick={() => setShowMenu(!showMenu)}>
                    <li className="px-2 text-md md:text-xl  font-bold"><Link to='/'>Home</Link></li>
                    <li className="px-2 text-md md:text-xl font-bold"><Link to='/about'>About us</Link></li>
                    <li className="px-2 text-md md:text-xl  font-bold"><Link to='/cart'>Cart (items {item.length})</Link></li>
                </ul>
     : null}
     </div>
    );
}

export default Header ;