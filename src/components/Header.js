import { useState } from "react";
import { image_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  return (
    <header className="sticky top-0 z-20 bg-[oklch(27.4%_0.006_286.033)] text-white shadow-md backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link to="/home" className="flex items-center gap-2">
          <img
            src={image_URL}
            alt="restaurantLogo"
            className="w-12 h-12 rounded-full object-cover"
          />
          <span className="text-xl font-bold tracking-wide">Foodie</span>
        </Link>

        {/* Nav Links */}
        <nav>
          <ul className="flex items-center gap-6 text-sm font-medium">
            <li>
              <Link
                to="/home"
                className="px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Login Button */}
        <button
          onClick={() =>
            setLoginBtn((login) => (login === "Login" ? "Logout" : "Login"))
          }
          className="px-5 py-2 rounded-full bg-amber-500 hover:bg-amber-600 transition-colors font-semibold text-sm shadow-sm"
        >
          {loginBtn}
        </button>
      </div>
    </header>
  );
};

export default Header;
