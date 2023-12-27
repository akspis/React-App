import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Headers = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo">
        {" "}
        <img src={LOGO_URL} alt="logoimg" />
      </div>
      <div className="nav-links">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contack Us</li>
          <li>Cart</li>
          <button
            className="btn"
            onClick={() => {
              setBtnName(btnName === "Login" ? "Logout" : "Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Headers;
