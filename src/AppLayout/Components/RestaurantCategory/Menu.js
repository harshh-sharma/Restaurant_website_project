import { useDispatch } from "react-redux";
import { Image_Url, defaultImage, defaultimage } from "../../../utils/constant";
import { addItem } from "../../../Slices/CartSlice";


const Menu = (props) => {
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }
    const {category,description,imageId,price} = props.listOfItem.card.info;
    return(
        <div className="w-12/12 flex justify-between mx-2 my-10 pb-5 border-b-2 border-gray-400">
            <div className="flex flex-col w-6/12 md:w-9/12">
                <div className="flex gap-5">
                  <h1 className="font-semibold">{category}</h1>
                  <span className="font-semibold">₹{price/100}</span>
                </div>
                <div className="">
                    <p className="text-sm tracking-wide text-gray-500">{description}</p>
                </div>
            </div>
            <div>
                <div className='relative'>
                    <img src={imageId ? Image_Url+ imageId : defaultImage} alt='image' className="h-24"/>
                    <button className="absolute bottom-0 left-10 px-2 py-1 rounded-lg bg-gray-950 text-orange-500" onClick={() => handleAddItem(props)}>Add +</button>
                </div>
            </div>
        </div>
    );
}

export default Menu;