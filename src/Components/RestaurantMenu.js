import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import { idContext } from "../utils/userContext";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [id, setId] = useState(0);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const categories =
    resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );

  return (
    <>
      <idContext.Provider value={{ id: id, setId }}>
        <div className="w-6/12 mx-auto">
          <div className="text-center font-bold text-xl py-6">{name}</div>
          <div className="text-center">
            <span className="font-semibold">{cuisines}</span> -{" "}
            <span className="font-semibold">{costForTwoMessage}</span>
          </div>
          {categories.map((item, index) => (
            // controlled Component if this below component have its own state and its controlled by it state than its uncontrolled component
            //  we are using here lifting state startegy
            <RestaurantCategory
              data={item.card}
              key={item.card.card.title}
              toggleOpen={index === showIndex ? true : false}
              setShowIndex={() => setShowIndex(index)}
            />
          ))}
        </div>
      </idContext.Provider>
    </>
  );
};

export default RestaurantMenu;
