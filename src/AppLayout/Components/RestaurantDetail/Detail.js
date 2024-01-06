import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantCategory from "../RestaurantCategory/RestaurantCategory";

const Detail = () => {
    const [resInfo,setResInfo] = useState(null);
    const {resId} = useParams();
    console.log(resId);

    const fetchMenu = async () => {
        const response = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.2599333&lng=77.412615&restaurantId=' + resId + '&catalog_qa=undefined&submitAction=ENTER');


        const json = await response.json();
        const data = json.data;
        setResInfo(data);
    }

    useEffect(() => {
        fetchMenu();
    },[]);

    if(resInfo===null){
        return;
    } 
    console.log(resInfo);
    const {name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
     const categoryies = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c) => c?.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');

    
    return(
       <div className="w-12/12 min-h-screen bg-gray-200 flex justify-center">
            <div className="w-12/12 md:w-6/12 bg-gray-200 pt-24 flex flex-col ">
                <h1 className="text-orange-500 text-2xl font-bold text-center">{name}</h1>
                <p className="text-xl font-semibold font-mono text-center">{cuisines.join(',')} - {costForTwoMessage}</p>
                <div className="flex justify-start flex-col mt-10">
                    {categoryies.map(category => <RestaurantCategory key={category?.card?.card?.title} data = {category?.card?.card}/>)}
                </div>
            </div>
       </div>
    );
}

export default Detail;