import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { userContext } from "../utils/userContext";
import { useSelector } from "react-redux";

const Headers = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(userContext);
  const items = useSelector((store) => store.cart.items);
  return (
    <div className="header flex justify-between bg-blue-200 p-4">
      <div className="w-24">
        {" "}
        <img src={LOGO_URL} alt="logoimg" />
      </div>
      <div className="flex">
        <ul className="flex items-center m-4 p-4 font-semibold text-lg">
          <li className="px-4 hover:bg-white">
            Online Status : {onlineStatus ? "online" : "offline"}
          </li>
          <li className="px-4 hover:bg-white">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:bg-white">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 hover:bg-white">
            <Link to="/contact">Contack Us</Link>
          </li>
          <li className="px-4 hover:bg-white">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 hover:bg-white">
            <Link to="/cart">cart ({items.length})</Link>
          </li>
          <button
            className="p-4 bg-red-300 text-stone-700 rounded-lg ml-4"
            onClick={() => {
              setBtnName(btnName === "Login" ? "Logout" : "Login");
            }}
          >
            {btnName}
          </button>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Headers;
