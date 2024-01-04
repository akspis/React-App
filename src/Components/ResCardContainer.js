import { useContext } from "react";
import { FOOD_URL } from "../utils/constants";
import { userContext } from "../utils/userContext";

const ResCardContainer = (props) => {
  const { name, cloudinaryImageId, cuisines, avgRating } = props?.resData?.info;
  const { loggedInUser } = useContext(userContext);
  return (
    <div className="w-[250px] m-4 p-4 bg-gray-200 rounded-lg hover:bg-gray-300">
      <div className="food-img flex justify-center items-center">
        <img
          src={FOOD_URL + cloudinaryImageId}
          alt="food"
          className="rounded-lg h-[250px] object-cover"
        />
      </div>
      <div>
        <h3 className="font-bold text-lg py-2">{name}</h3>
        <h4 style={{ overflow: "hidden", overflowWrap: "break-word" }}>
          {cuisines.join(", ")}
        </h4>
        <h4>{avgRating}stars</h4>
        <h4>user : {loggedInUser}</h4>
      </div>
    </div>
  );
};
// this is higher order component (HOC) it will take components and returns new componets. it does not change the callback component
export const withLabelRestaurant = (ResCardContainer) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black m-2 p-2 text-white">promoted</label>
        <ResCardContainer {...props} />
      </div>
    );
  };
};

export default ResCardContainer;
