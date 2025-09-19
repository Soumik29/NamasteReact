import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resMenu = useRestaurantMenu(resId);

  if (resMenu === null) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const { name, locality, areaName, costForTwo, cuisines } = resMenu;

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Restaurant Info Card */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-100">
        <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
        <p className="text-gray-600 mt-1">{locality}, {areaName}</p>
        <p className="text-lg font-semibold text-amber-600 mt-2">
          ₹{costForTwo / 100} for two
        </p>

        {/* Cuisines as tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {cuisines.map((cuisine, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium"
            >
              {cuisine}
            </span>
          ))}
        </div>
      </div>

      {/* Placeholder for menu items (future expansion) */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Menu
        </h2>
        <p className="text-gray-500">
          Menu items will go here once API is integrated.
        </p>
      </div>
    </div>
  );
};

export default RestaurantMenu;
