import MenuItems from "./MenuItems";
import { useState } from "react";
const MenuTitles = ({ categories }) => {
  const [accordion, setAccordion] = useState(false);
  // console.log(categories);
  const handleAccordion = (id) => {
    console.log(id);
    setAccordion(!accordion);
  }
  return (
    <div>
      <div className="border border-gray-100 p-5 rounded-xl shadow-md font-sans">
        {categories.map((category, index) => {
          const categoryInfo = category.card.card;
          if (categoryInfo.categories) {
            return (
              <div key={index} className="mb-4">
                <div onClick={() => handleAccordion(categoryInfo.id)} className="flex justify-between w-full bg-gray-200 p-5 border rounded-3xl cursor-pointer">
                  <h1>{categoryInfo.title}</h1>
                  <span>🔽</span>
                </div>
                {accordion && categoryInfo.categories.map((subCategories, subIndex) => (
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
          return (
            <div onClick={() => handleAccordion(categoryInfo.categoryId)}key={index} className="w-full mb-4 p-4">
              <div className="flex justify-between w-full border-1 p-5 bg-gray-200 rounded-3xl ">
                <h1 className="text-xl font-bold">{categoryInfo.title}</h1>
                <span>🔽</span>
              </div>
              {accordion && <MenuItems menuCategory={categoryInfo.itemCards} />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuTitles;
