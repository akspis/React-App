import { FOOD_URL } from "../utils/constants";

const ResCardContainer = (props) => {
  const { food_img, resName, cuisins, stars } = props?.resData;
  return (
    <div className="res-container">
      <div className="food-img">
        <img src={FOOD_URL + food_img} alt="food" />
      </div>
      <h3>{resName}</h3>
      <h4>{cuisins}</h4>
      <h4>{stars}stars</h4>
    </div>
  );
};
export default ResCardContainer;
