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
      const data = await fetch(menu_API + resId, {
        headers: {
          "content-type": "application/json",
          Cookie:
            "__SW=tvyoBQf8EXUjwi1e3O-ekFo0bl93i_sg; _device_id=3e846c41-9226-290f-97fd-cf3764243bfe; userLocation={%22lat%22:12.9352403%2C%22lng%22:77.624532%2C%22address%22:%22Koramangala%2C%20Bengaluru%2C%20Karnataka%2C%20India%22%2C%22area%22:%22%22%2C%22showUserDefaultAddressHint%22:false}; _gcl_au=1.1.380339340.1753202694; _ga_YE38MFJRBZ=GS2.1.s1760648262$o15$g1$t1760649735$j60$l0$h0; _ga=GA1.2.1137880872.1753202697; _ga_34JYJ0BCRN=GS2.1.s1760648262$o15$g1$t1760649736$j60$l0$h0; fontsLoaded=1; _guest_tid=7e69d0c9-41b9-4e94-ba9f-e649a1a6b5ff; _sid=ngq8a660-5f4d-4861-aad3-ead721a1868a; _gid=GA1.2.615841961.1760648263; dadl=true; aws-waf-token=547488e4-adef-45ca-b2cc-319fc00294a5:EgoAZSGVKQZTAQAA:GAB6cCO/NkXTyfJ7Fuzfe7AxGDyTQMiHeHOLpQ6dgqx+fOI1rKcgpc3B3aMaqT2Lbu4sKJbPTNTT4/YrEXxZRR+3KJ5godxdTBYt1hahNzvdJ1tT4UDy444NMymwC4sdeEZVzHebspMADdrlKzVXd1g2SBTHUJ8eOJpSnCF0SEmJ0+uougFtMXCXkov6anuGt3Bw8P44ZccQfAejUYLkjeBPnJqpo0XXgkc11O3YtIKo9MDX",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:143.0) Gecko/20100101 Firefox/143.0",
        },
      });
      const json = await data.json();
      const restaurantTitle = json.data?.cards[2]?.card?.card?.info;
      setResTitle(restaurantTitle);
      const menuCardList =
        json.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards;
      const itemCategories = menuCardList?.filter(
        (c) =>
          c?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
          c?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
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
