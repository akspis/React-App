import { useEffect, useState } from "react";
import { SWIGGY_RES_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const resData = await fetch(SWIGGY_RES_API + resId);
    const resDataJson = await resData.json();
    setResInfo(resDataJson);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card
      ?.card;

  return (
    <>
      {resInfo && (
        <div>
          <h2>{name}</h2>
          <h3>{cuisines}</h3>
          <h3>{costForTwoMessage}</h3>
          <h2>Menu</h2>
          {itemCards &&
            itemCards.map((res) => (
              <div key={res.card.info.id} style={{ display: "flex" }}>
                <p>{res?.card?.info?.name}</p>
                {"  "} <p>{res?.card?.info?.price}</p>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default RestaurantMenu;
