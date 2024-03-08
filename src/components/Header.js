import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useContext } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const [buttonValue, setbuttonValue] = useState("Login");
  const status = useOnlineStatus();
  const data = useContext(UserContext);

  //subcribing to store useing Selector
  const cartItem = useSelector((store) => store.cart.items);
  console.log(cartItem);

  return (
    <div className="flex bg-yellow-500 justify-between p-2 shadow-md mb-2">
      <a href="/">
        <img className="w-44" alt="logo" src={LOGO_URL}></img>
      </a>
      <div className="flex items-center">
        <ul className="flex p-5 m-3">
          <li className="px-5 py-1 hover:border-yellow-500 hover:rounded-md hover:text-yellow-500 hover:bg-black">
            <Link to="/">Home</Link>
          </li>
          <li className="px-5 py-1 hover:border-yellow-500 hover:rounded-md hover:text-yellow-500 hover:bg-black">
            <Link to="/about">About</Link>
          </li>
          <li className="px-5 py-1 hover:border-yellow-500 hover:rounded-md hover:text-yellow-500 hover:bg-black">
            <Link to="/contact">Contacts</Link>
          </li>
          <li className="px-5 py-1 hover:border-yellow-500 hover:rounded-md hover:text-yellow-500 hover:bg-black font-bold text-xl">
            Cart({cartItem.length})
          </li>
          <li className="px-5 py-1 hover:border-yellow-500 hover:rounded-md hover:text-yellow-500 hover:bg-black">
            {data.loggedInUser}
          </li>
          <li className="px-5 py-1 hover:border-yellow-500 hover:rounded-md hover:text-yellow-500 hover:bg-black">
            <button
              onClick={() => {
                buttonValue === "Login"
                  ? setbuttonValue("Logout")
                  : setbuttonValue("Login");
                console.log(buttonValue);
              }}
            >
              Login
            </button>
          </li>
          <li className="px-5 py-1 hover:border-yellow-500 hover:rounded-md hover:text-yellow-500 hover:bg-black">
            {status ? (
              <span>Online &#9989;</span>
            ) : (
              <span>Offline &#10060;</span>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
