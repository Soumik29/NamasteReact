import {useEffect, useState} from "react";
import { menu_API } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resMenu, setResMenu] = useState(null);
    const [resTitle, setResTitle] = useState(null);
    useEffect(() => {
        menuData();
    }, []);

    const menuData = async () => {
        const data = await fetch(menu_API + resId);
        const json = await data.json();
        const resList = json.data?.cards?.find((c) => c.groupedCard?.cardGroupMap?.REGULAR);
        const title = json.data?.cards[2]?.card?.card?.info;
        const menuCards = resList?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        const itemCategory = menuCards?.find((c) => c.card?.card?.itemCards);
        const list = itemCategory?.card?.card?.itemCards || [];
        const items = list?.map(item => item?.card?.info);
        setResMenu(items);
        setResTitle(title);
    }
    return {resMenu, resTitle};
}
export default useRestaurantMenu;