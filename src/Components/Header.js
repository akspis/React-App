import { LOGO_URL } from "../utils/constants";

const Headers = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Headers;
