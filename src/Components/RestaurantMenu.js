import { useEffect, useState } from "react";
import { SWIGGY_RES_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card;

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
