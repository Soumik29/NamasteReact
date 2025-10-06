import { CDN_URL } from "../utils/constants";
const MenuItems = ({ menuCategory }) => {
  //   console.log(menuCategory);
  //   console.log("This message is just after menuCategory")
  const maxLength = 100;
  console.log(menuCategory);
  if (!menuCategory) return null;
  return (
    <div>
      {menuCategory.map((menu) => {
        const s = menu.card?.info;
        return (
          <div key={s.id}>
            <div className="flex flex-col">
              <h2 className="font-medium">{s.name}</h2>
              <span>₹{s.price ? s.price / 100 : s.defaultPrice / 100}</span>
              <span>⭐{s.ratings.aggregatedRating.rating}({s.ratings.aggregatedRating.ratingCountV2})</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuItems;
