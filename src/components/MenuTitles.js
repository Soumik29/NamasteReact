import MenuItems from "./MenuItems";
const MenuTitles = ({ categories }) => {
  // console.log(categories);
  return (
    <div>
      <div className="border border-gray-100 p-5 rounded-xl shadow-md font-sans">
        {categories.map((category, index) => {
          const categoryInfo = category.card.card;
          if (categoryInfo.categories) {
            return (
              <div key={index} className="mb-4">
                <div className="flex justify-between w-full bg-gray-200 p-5 border rounded-3xl">
                  <h1>{categoryInfo.title}</h1>
                  <span>🔽</span>
                </div>
                {categoryInfo.categories.map((subCategories, subIndex) => (
                  <div key={subIndex} className="ml-2 mt-4 w-full">
                    {subCategories.title !== categoryInfo.title && (
                      <h2 className="text-lg font-semibold">
                        {subCategories.title}
                      </h2>
                    )}
                    <MenuItems menuCategory={subCategories.itemCards} />
                  </div>
                ))}
              </div>
            );
          }
          console.log("This is the middle statement");
          return (
            <div key={index} className="w-full p-4 mb-4 border-4">
              <div className="flex justify-between w-full">
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
