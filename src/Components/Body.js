import { useContext, useEffect, useState } from "react";
import ResCardContainer, { withLabelRestaurant } from "./ResCardContainer";
import { SWIGGY_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { userContext } from "../utils/userContext";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filterRestuarant, setFilterRestuarant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser, setUserName } = useContext(userContext);

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

  const ResCardContainerWithLabel = withLabelRestaurant(ResCardContainer);

  useEffect(() => {
    fetchData();
  }, []);

  if (onlineStatus !== true) return <h1>oops look like you are offline</h1>;

  return (
    <>
      {restaurantList?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="m-4 p-4">
          <div className="seach-section flex pl-[76px]">
            <div className="">
              <input
                className="border border-solid m-4 p-2 rounded-lg"
                placeholder="Search Restaurant"
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
                className="px-4 py-2 bg-green-300 rounded-lg"
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

              <input
                type="text"
                className="border-solid"
                value={loggedInUser}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="flex items-center px-4">
              <button
                className="filter-btn px-4 py-2 bg-gray-300 rounded-lg"
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
          </div>
          <div className="resCard flex flex-wrap pl-[76px]">
            {filterRestuarant &&
              filterRestuarant?.map((resData) => (
                <Link
                  key={resData.info.id}
                  to={"/restaurant/" + resData.info.id}
                >
                  {resData.info.promoted ? (
                    <ResCardContainerWithLabel resData={resData} />
                  ) : (
                    <ResCardContainer resData={resData} />
                  )}
                </Link>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Body;
