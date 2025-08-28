import {useEffect, useState} from "react";
import { menu_API } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resMenu, setResMenu] = useState(null);
    useEffect(() => {
        menuData();
    }, []);

    const menuData = async () => {
        const data = await fetch(menu_API + resId);
        const json = await data.json();
        const resList = json.data?.cards[2]?.card?.card?.info;
        setResMenu(resList);
    }
    return resMenu;
}
export default useRestaurantMenu;