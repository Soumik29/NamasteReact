import { useEffect, useState } from "react";

const useFilteredRestaurant = (restaurants) => {
  const [searchText, setSearchText] = useState("");
  const [rateRes, setRateRes] = useState([]);
  const [filterRes, setFilterRes] = useState([]);
  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    setRateRes(restaurants);
    setFilterRes(restaurants);
  }, [restaurants]);

  const handleSearchFilter = () => {
    const searchRes = rateRes.filter((resData) => {
      resData.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilterRes(searchRes);
  };

  const handleRatingFilter = () => {
    const searchRatedRes = rateRes.filter((resRate) => resRate.info.avgRating > 4.2);
    setFilterRes(searchRatedRes);
  };

  return {
    searchText,
    handleSearchText,
    filterRes,
    handleSearchFilter,
    handleRatingFilter,
  };
};

export default useFilteredRestaurant;
