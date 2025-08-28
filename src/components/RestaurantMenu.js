import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resMenu = useRestaurantMenu(resId);

  if (resMenu === null) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }
  const { name, locality, areaName, costForTwo, cuisines } = resMenu;
  return (
    <div>
      <h1>{name}</h1>
      <h3>{locality}</h3>
      <h3>{areaName}</h3>
      <h3>Rs {costForTwo / 100}</h3>
      <ol>
        {cuisines.map((cuisine, index) => (
          <li key={index}>{cuisine}</li>
        ))}
      </ol>
      <p>
        Here we will display our individual restaurant menus based on the
        Restaurant ID.
      </p>
      <p>
        The menus are going to be fetched from swiggy's api. Which we are going
        to do from the api provided by the namastedev team.
      </p>
    </div>
  );
};

export default RestaurantMenu;
