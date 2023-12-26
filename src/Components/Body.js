import { useState } from "react";
import resList from "../utils/mockdata";
import ResCardContainer from "./ResCardContainer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resList);

  return (
    <div className="body-container">
      <div className="seach-section">
        <button
          className="filter-btn"
          onClick={() => {
            const filterData = restaurantList.filter((res) => res.stars > 4);
            setRestaurantList(filterData);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="resCard">
        {restaurantList.map((resData) => (
          <ResCardContainer key={resData.id} resData={resData} />
        ))}
      </div>
    </div>
  );
};

export default Body;
