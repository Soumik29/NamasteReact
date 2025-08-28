import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const formatCuisines  = (cuisines = []) => {
    if (cuisines.length === 0) return "No Cuisine to display";
    const cuisine = cuisines.join(", ");
    return (
      <span>{cuisine}</span>  
    )
  }
  return (
    <div className="card">
      <img
        src={CDN_URL + resData.cloudinaryImageId}
        alt="Food Image"
        className="foodImage"
      />
      <div className="res-container">
        <h3>{resData.name}</h3>
        <div className="cuisines">
          {formatCuisines(resData.cuisines)}
        </div>
      </div>
      <div className="features">
        <p>{resData.avgRating} stars</p>
        <p>{resData.costForTwo}</p>
        <p style={{ fontWeight: "bold" }}>
          {resData.sla.deliveryTime} minutes
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
