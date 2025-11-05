import { useState, useEffect } from "react";
const useRestaurantCard = () => {
  const [resCard, setResCard] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://namastedev.com/api/v1/listRestaurants"
      );
      const data = await response.json();
      console.log(data);
      const restaurants =
        data.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
      setResCard(restaurants);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return { resCard, loading };
};

export default useRestaurantCard;
