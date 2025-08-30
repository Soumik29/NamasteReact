import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import useRestaurantCard from "../utils/useRestaurantCard";
import useFilteredRestaurant from "../utils/useFilteredRestaurant";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const { resCard, loading } = useRestaurantCard();
  const {
    searchText,
    handleSearchText,
    filterRes,
    handleSearchFilter,
    handleRatingFilter,
  } = useFilteredRestaurant(resCard);
  console.log(resCard);
  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <h1>Uh oh! Looks like you're offline. Please try again.</h1>;
  }

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="search-box"
            placeholder="Search a Restaurant"
            value={searchText}
            onChange={handleSearchText}
          />
          <button onClick={handleSearchFilter}>Search</button>
        </div>
        <button className="filter-btn" onClick={handleRatingFilter}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="card-container">
        {filterRes.map((restaurantData) => (
          <Link
            key={restaurantData.info.id}
            to={`/restaurant/${restaurantData.info.id}`}
          >
            <RestaurantCard
              key={restaurantData.info.id}
              resData={restaurantData.info}
            />
          </Link>
        ))}
      </div>{" "}
    </div>
  );
};

export default Body;
