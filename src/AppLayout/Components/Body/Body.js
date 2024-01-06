import { useContext, useState } from "react";
import restaurantData from "../../../utils/mockData";
import Card from "./Card";
import { Link } from "react-router-dom";
import UserContext from "../../../utils/UserContext";

const Body = () => {
    let [listOfRestaurant,setListOFRestaurant] = useState(restaurantData);
    const tempDataOfRestaurant = restaurantData;
    const data = useContext(UserContext);
    console.log('Context',data);
    const [searchData,setSearchData] = useState('');
    const topRatedHandler = () => {
        listOfRestaurant = listOfRestaurant.filter(restaurant => restaurant.data.avgRating > 4);
        setListOFRestaurant(listOfRestaurant);
    }
    const searchHandler = () => {
        listOfRestaurant = tempDataOfRestaurant.filter((restaurant) => restaurant.data.name.toLowerCase().includes(searchData.toLowerCase()));
        setListOFRestaurant(listOfRestaurant);
        console.log("list",listOfRestaurant);
        setSearchData('');
    }
    console.log(listOfRestaurant);
    console.log(searchData);
    return(
        <div className="w-full flex flex-col justify-center items-center bg-gray-100 min-h-screen ">
            <div className="flex justify-center items-start md:justify-between w-7/12 gap-2 px-1 flex-wrap">
                <div className=" flex gap-2 mt-28">
                    <input placeholder="Enter Restaurant Name" className="shadow-xl px-5 md:px-10  py-2 md:py-2 bg-gray-100  rounded-md placeholder:text-orange-500 border-2 border-gray-600  placeholder:font-bold text-gray-900 font-semibold" value={searchData} onChange={(e) => setSearchData(e.target.value)} />
                    <button className="px-5 md:px-5 md:py-2 bg-gray-900 text-orange-500 font-bold rounded-md shadow-xl hover:bg-orange-500 hover:text-gray-950 ease-in-out duration-300 hover:scale-105" onClick={searchHandler}>Search</button>
                </div>
                <div className="gap-1 hidden md:flex  ">
                <button className="px-5 md:px-5 py-2 bg-gray-900 text-orange-500  font-bold rounded-md my-28 shadow-xl hover:bg-orange-500 hover:text-gray-950 ease-in-out duration-300 hover:scale-105 " onClick={topRatedHandler} >Top Rated Restaurants</button >
               {tempDataOfRestaurant.length > listOfRestaurant.length ? <button className="px-5 md:px-5 py-2 text-orange-500 font-bold border-[1px] border-gray-900 rounded-md  bg-gray-900 my-28 shadow-xl hover:bg-orange-500 hover:text-gray-950 ease-in-out duration-500" onClick={() => setListOFRestaurant(tempDataOfRestaurant)}>See All Restaurants</button>: ''}
                </div>
            </div>
            <div className="w-9/12 m-auto flex flex-wrap gap-2 items-center justify-center">
               {listOfRestaurant.length > 0 ? listOfRestaurant.map(restaurant => <Link key={restaurant.data.id} to={'/page/' + restaurant.data.id}><Card restaurantData = {restaurant}/></Link>):<h1 className="text-orange-500 text-xl font-bold">Search Not Found</h1>}
            </div>
            <div className=" w-[100%] py-2 bg-transparent fixed  bottom-0 md:hidden z-1000 flex justify-around bg-orange-400">
            <button className="px-2 md:px-5 py-2  text-orange-500 bg-gray-900 font-bold rounded-md md:my-10 border-[1px] hover:bg-orange-500 hover:text-gray-950 ease-in-out duration-500" onClick={topRatedHandler}>Top Rated Restaurants</button>
            {tempDataOfRestaurant.length > listOfRestaurant.length ? <button className="px-2 md:px-5 py-2 text-orange-500 font-bold border-[1px] border-gray-900 rounded-md md:my-10 bg-gray-900 hover:bg-orange-500 hover:text-gray-950 ease-in-out duration-500 " onClick={() => setListOFRestaurant(tempDataOfRestaurant)}>See All Restaurants</button> : ''}
            </div>
        </div>
    );
}
export default Body;