const MenuItems = ({restaurantMenu}) => {
    console.log(restaurantMenu);
    return (<div>
        <h1 className="font-bold text-2xl text-center">{restaurantMenu.name}</h1>
    </div> )  
};

export default MenuItems;