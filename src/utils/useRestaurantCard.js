import { useState, useEffect } from "react";
const useRestaurantCard = () => {
  const [resCard, setResCard] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://pastebin.com/raw/0QcdEDBL");
    const json = await data.json();
    const restaurantInfo =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setResCard(restaurantInfo || []);
    setLoading(false);
  };
  return {resCard, loading};

};

export default useRestaurantCard;
