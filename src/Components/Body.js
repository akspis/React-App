import { useEffect, useState } from "react";
import ResCardContainer from "./ResCardContainer";
import { SWIGGY_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filterRestuarant, setFilterRestuarant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const jsonData = await data.json();
    setRestaurantList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterRestuarant(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (onlineStatus !== true) return <h1>oops look like you are offline</h1>;

  return (
    <>
      {restaurantList.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="body-container">
          <div className="seach-section">
            <div>
              <input
                name="search"
                type="text"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                  if (e.target.value === "")
                    setFilterRestuarant(restaurantList);
                }}
              />
              <button
                onClick={() => {
                  const filterList = restaurantList.filter((res) =>
                    res.info.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                  );
                  setFilterRestuarant(filterList);
                }}
              >
                Search
              </button>
            </div>
            <button
              className="filter-btn"
              onClick={() => {
                const filterData = restaurantList.filter(
                  (res) => res.info.avgRating > 4
                );
                setFilterRestuarant(filterData);
              }}
            >
              Top Rated Restaurant
            </button>
          </div>
          <div className="resCard">
            {filterRestuarant.map((resData) => (
              <Link key={resData.info.id} to={"/restaurant/" + resData.info.id}>
                <ResCardContainer resData={resData} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Body;
