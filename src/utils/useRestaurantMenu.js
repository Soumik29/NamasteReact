import { useEffect, useState } from "react";
import { menu_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resTitle, setResTitle] = useState(null);
  const [menuCategories, setMenuCategories] = useState([]);
  useEffect(() => {
    menuData();
  }, []);
  // console.log(resMenu, resTitle)

  const menuData = async () => {
    try {
      const data = await fetch(menu_API +  resId);
      const restaurantMenu = await data.json();
      console.log(restaurantMenu);
      const restaurantTitle = restaurantMenu.data.cards;
      setResTitle(restaurantTitle);
      const menuCardList =
        restaurantMenu.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards;
      const itemCategories = menuCardList?.filter(
        (c) =>
          c?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
      // console.log(itemCategories)
      setMenuCategories(itemCategories);
    } catch (err) {
      console.log("Failed to fetch Menu ", err);
    }
  };
  //   console.log(menuCategories);
  return { resTitle, menuCategories };
};
export default useRestaurantMenu;
