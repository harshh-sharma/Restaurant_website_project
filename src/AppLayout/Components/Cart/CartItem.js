import { useDispatch } from "react-redux";
import { Image_Url, defaultImage } from "../../../utils/constant";
import { removeItem } from "../../../Slices/CartSlice";

const CartItem = (props) => {
    // console.log(props.listOfItem.listOfItem.card.info.id);
    const {category,price,imageId,description,id} = props?.listOfItem?.listOfItem?.card?.info;

    const dispatch = useDispatch();
    const handleRemoveItem = () => {
        dispatch(removeItem(id));
        console.log(id);
    }

    return(
        <div className="w-12/12 flex justify-between mx-2 my-10 pb-5 border-b-2 border-gray-400">
            <div className="flex flex-col w-12/12 md:w-9/12">
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
                    <button className="absolute bottom-0 left-10 px-2 py-1 rounded-lg bg-gray-950 text-orange-500" onClick={handleRemoveItem}>Remove</button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;