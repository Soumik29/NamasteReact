import { useState, useEffect } from "react";
const useRestaurantCard = () => {
  const [resCard, setResCard] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.9261243&lng=77.60707029999999&str=north%20indian&trackingId=undefined&submitAction=ENTER&queryUniqueId=bccdc5ae-30de-39ce-57d8-d7b8c618d783"
    );
    const json = await data.json();
    const restaurantInfo =
      json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards?.map(
        (c) => c.card.card
      );
    setResCard(restaurantInfo || []);
    setLoading(false);
  };
  return { resCard, loading };
};

export default useRestaurantCard;
