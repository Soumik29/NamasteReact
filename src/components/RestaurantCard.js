import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantCard = ({ resData }) => {
  const formatCuisines = (cuisines = []) => {
    if (cuisines.length === 0) return "No Cuisine to display";
    return (
      <span className="text-sm text-gray-500 line-clamp-1">
        {cuisines.join(", ")}
      </span>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden w-72 cursor-pointer border border-gray-100">
      <Link to={`/restaurant/${resData.id}`}>
        <img
          src={CDN_URL + resData.cloudinaryImageId}
          alt={resData.name}
          className="w-full h-44 object-cover"
        />
        <div className="p-4 flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-gray-800 truncate">
            {resData.name}
          </h3>
          {formatCuisines(resData.cuisines)}

          <div className="flex justify-between items-center text-sm mt-2">
            <span
              className={`px-2 py-0.5 rounded-md text-white font-medium ${
                resData.avgRating >= 4
                  ? "bg-green-500"
                  : resData.avgRating >= 3
                  ? "bg-yellow-500"
                  : "bg-red-500"
              }`}
            >
              ⭐ {resData.avgRating}
            </span>
            <span className="text-gray-600">₹{resData.costForTwo / 100} for two</span>
            <span className="font-semibold text-amber-600">
              {resData.sla.deliveryTime} min
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export const promotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="bg-black p-2 m-2 absolute text-white">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;
