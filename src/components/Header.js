import { useState } from "react";
import { image_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img src={image_URL} alt="restaurantLogo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
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
