const MenuItems = ({ restaurantMenu }) => {
  return (
    <div>
      {restaurantMenu.map((menu) => (
        <div>
          <h1 className="text-3xl">{menu.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default MenuItems;
