import { useState } from "react";
import { image_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  return (
    <div className="flex justify-between bg-[oklch(27.4%_0.006_286.033)]/50 text-white backdrop-blur-2xl backdrop-sepia">
      <div className="w-20 ml-5">
        <img src={image_URL} alt="restaurantLogo" className="rounded-full w-15 h-15"/>
      </div>
      <div className="flex justify-between pr-3 gap-10">
        <ul className="flex w-2xl md:w-2xl justify-around items-center pr-3">
          <li>
            <Link to="/" className="rounded-full hover:bg-[oklch(43.9%_0_0)] hover:max-w-full transition-all duration-300 h-0.5 p-2">Home</Link>
          </li>
          <li>
            <Link to="/about" className="rounded-full hover:bg-[oklch(43.9%_0_0)] hover:max-w-full transition-all duration-300 h-0.5 p-2">About</Link>
          </li>
          <li>
            <Link to="/contact" className="rounded-full hover:bg-[oklch(43.9%_0_0)] hover:max-w-full transition-all duration-300 h-0.5 p-2">Contact</Link>
          </li>
        </ul>
        <button
          className="btnLogin"
          onClick={() =>
            setLoginBtn((login) => (login === "Login" ? "Logout" : "Login"))
          }
        >
          {loginBtn}
        </button>
      </div>
    </div>
  );
};

export default Header;
