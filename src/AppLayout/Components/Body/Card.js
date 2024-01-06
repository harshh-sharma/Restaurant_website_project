import { Image_Url } from "../../../utils/constant";
import { Link } from "react-router-dom";

const Card = (props) => {
    // console.log(props.restaurantData.data);
    console.log(props);
    const {name,cloudinaryImageId,id,avgRating,costForTwo,cuisines,sla} = props.restaurantData.data;
    const cuisine = []
    for(i = 0 ; i < 3 ; i++){
            cuisine.push(cuisines[i]);
    }
    return (
        <div className=" h-auto bg-gray-100 w-[300px] flex flex-col p-2 rounded-md shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 transition-transform">
          <img src={Image_Url + cloudinaryImageId} className="w-auto rounded-md"/>
          <div className="p-5 flex flex-col justify-center">
            <div id="heading" className="text-gray-900 font-bold flex justify-center">{name}</div>
            <p className="text-lg mb-1 gap-2 text-black flex justify-start">
              {cuisine.join(',')}
            </p>
            <div className="flex justify-start gap-5">
              <span className="text-lg">{avgRating}</span>
              <span className="text-lg">{sla.deliveryTime}</span>
              <span className="text-lg" >{costForTwo}</span>
            </div>
          </div>
        </div>
      );
    };

export default Card;