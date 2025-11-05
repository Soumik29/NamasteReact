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
            <div className="flex flex-col p-4 border-b-2 border-gray-200 ">
              <h2 className="font-extrabold">{s.name}</h2>
              <span>₹{s.price / 100}</span>
              <p>{s.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuItems;
