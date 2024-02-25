import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [buttonValue, setbuttonValue] = useState("Login");
  return (
    <div className="header">
      <a href="/">
        <img className="logo" alt="logo" src={LOGO_URL}></img>
      </a>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contacts</Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              onClick={() => {
                buttonValue === "Login"
                  ? setbuttonValue("Logout")
                  : setbuttonValue("Login");
              }}
            >
              {buttonValue}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
