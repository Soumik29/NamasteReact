import MenuItems from "./MenuItems";
const MenuTitles = ({ categories }) => {
  return (
    <div>
      <div className="border border-gray-100 p-5 rounded-xl shadow-md font-sans">
        {categories.map((category, index) => {
          const categoryInfo = category.card.card;
          return (
            <div key={index} className="w-full mb-4 p-4">
              <div className="flex justify-between w-full border-1 p-5 bg-green-200 rounded-3xl cursor-pointer">
                <h1 className="text-xl font-bold">{categoryInfo.title}</h1>
                <span>🔽</span>
              </div>
              <MenuItems menuCategory={categoryInfo.itemCards} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuTitles;
