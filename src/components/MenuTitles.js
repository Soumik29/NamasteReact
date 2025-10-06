import MenuItems from "./MenuItems";
const MenuTitles = ({ categories }) => {
  // console.log(categories);
  return (
    <div>
      <div className="w-full border border-gray-200 p-5 rounded-xl mb-3 shadow-md flex justify-between font-sans">
        <div>
          {categories.map((category, index) => {
            const categoryInfo = category.card.card;

            if (categoryInfo.categories) {
              return (
                <div key={index}>
                  <h1>{categoryInfo.title}</h1>
                  {categoryInfo.categories.map((subCategories, subIndex) => (
                    <div key={subIndex} className="ml-2 mt-4">
                      <h2 className="text-lg font-semibold">{subCategories.title}</h2>  
                      <MenuItems menuCategory={subCategories.itemCards} />
                    </div>
                  ))}
                </div>
              );
            }
            return (
              <div key={index} className="w-full p-4 mb-4 border-4">
                <h1 className="text-xl font-bold">{categoryInfo.title}</h1>
                <MenuItems menuCategory={categoryInfo.itemCards}/>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default MenuTitles;
