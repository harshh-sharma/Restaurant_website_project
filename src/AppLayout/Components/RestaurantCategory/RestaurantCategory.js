import { IoIosArrowDropdownCircle } from "react-icons/io";
import Menu from "./Menu";
import { useState } from "react";
const RestaurantCategory = (data) => {
    const {title,itemCards} = data.data;
    const [toggle,setToggle] = useState(false);

    const toggleHandler = () => {
        setToggle(!toggle);
    }

    return(
        <div className="w-12/12 mx-2 my-1 ">
            <div className="w-12/12 px-5  py-1 rounded-md bg-gray-300 cursor-pointer  flex justify-between" onClick={toggleHandler}>
                <h2 className="font-semibold text-lg text-gray-900">{title}</h2>
                <IoIosArrowDropdownCircle />
            </div>
            <div>
                {toggle ? itemCards.map(item => <Menu key = {item.card.info.id} listOfItem = {item}/>) : ''}
            </div>
        </div>
        
    );
}

export default RestaurantCategory;