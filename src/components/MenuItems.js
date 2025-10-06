import { CDN_URL } from "../utils/constants";
const MenuItems = ({ menuCategory }) => {
//   console.log(menuCategory);
//   console.log("This message is just after menuCategory")
  const maxLength = 100;
  console.log(menuCategory);
  if(!menuCategory) return null;
  return (
    <div>
      {menuCategory.map((menu) => {
        const s = menu.card?.info;
        return (
          <div>
            <h2>{s.name}</h2>
          </div>
        )
      })}
    </div>
  );
};

export default MenuItems;
