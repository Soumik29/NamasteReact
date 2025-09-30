import RestaurantCard, { promotedLabel } from "./RestaurantCard";
import { Link } from "react-router-dom";
import useRestaurantCard from "../utils/useRestaurantCard";
import useFilteredRestaurant from "../utils/useFilteredRestaurant";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Result } from "postcss";

const Body = () => {
  const { resCard, loading } = useRestaurantCard();
  const {
    searchText,
    handleSearchText,
    filterRes,
    handleSearchFilter,
    handleRatingFilter,
  } = useFilteredRestaurant(resCard);
  console.log(filterRes)
  const onlineStatus = useOnlineStatus();
  const RestaurantCardPromoted = promotedLabel(RestaurantCard);
  if (!onlineStatus) {
    return (
      <h1 className="text-center mt-20 text-xl font-semibold text-red-600">
        Uh oh! Looks like you're offline. Please try again.
      </h1>
    );
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Search & Filter Bar */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md p-4 flex flex-wrap gap-3 items-center justify-center shadow-sm">
        <input
          className="border rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-amber-500"
          placeholder="Search a Restaurant"
          value={searchText}
          onChange={handleSearchText}
        />
        <button
          onClick={handleSearchFilter}
          className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
        >
          Search
        </button>
        <button
          className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
          onClick={handleRatingFilter}
        >
          Top Rated Restaurants
        </button>
      </div>

      {/* Restaurant Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 place-items-center">
        {filterRes.map((restaurantData) => (
          restaurantData.info.avgRating >= 4.5 ? (<RestaurantCardPromoted resData={restaurantData.info} />): 
        (
          <RestaurantCard
            key={restaurantData.info.id}
            resData={restaurantData.info}
          />
        )
        ))}
      </div>
    </div>
  );
};

export default Body;
