import { useDispatch, useSelector } from "react-redux";
import Menu from "../RestaurantCategory/Menu";
import { clearCart } from "../../../Slices/CartSlice";
import CartItem from "./CartItem";

const Cart = () => {
    const dispatch = useDispatch();
    const items = useSelector((store) => store.cart.items);
    console.log("items",items);
    const clearCartItems = () => {
        dispatch(clearCart());
    }
    return <div className="pt-20 flex items-center w-full justify-center bg-gray-100 min-h-screen">
        <div className="w-9/12 flex flex-col bg-gray-100 ">
            <div className="w-full flex justify-center">
                { items.length > 0 ? <button className="text-xl bg-gray-900 text-orange-500 rounded-sm font-semibold font-sans px-4 py-2" onClick={clearCartItems}>Clear Cart Items</button> : <h1 className="text-orange-500 text-xl font-semibold font-sans">There is no item in the card</h1>}
            </div>
            
            <div className="w-full">
                {items.map((item) => <CartItem listOfItem = {item} />)}
            </div>
        </div>
    </div>
}

export default Cart ;