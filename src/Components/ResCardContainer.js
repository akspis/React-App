import { FOOD_URL } from "../utils/constants";

const ResCardContainer = (props) => {
  const { name, cloudinaryImageId, cuisines, avgRating } = props?.resData?.info;
  return (
    <div className="res-container">
      <div className="food-img">
        <img src={FOOD_URL + cloudinaryImageId} alt="food" />
      </div>
      <div>
        <h3>{name}</h3>
        <h4 style={{ overflow: "hidden", overflowWrap: "break-word" }}>
          {cuisines.join(",")}
        </h4>
        <h4>{avgRating}stars</h4>
      </div>
    </div>
  );
};
export default ResCardContainer;
