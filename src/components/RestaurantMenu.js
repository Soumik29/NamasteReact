import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuTitles from "./MenuTitles";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resTitle, menuCategories } = useRestaurantMenu(resId);
  // console.log(menuCategories);
  if (!resTitle || !menuCategories) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const { name } = resTitle;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-xl p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
      </div>
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <MenuTitles categories={menuCategories} />
      </div>
    </div>
  );
};

export default RestaurantMenu;
