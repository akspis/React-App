import { FOOD_URL } from "../utils/constants";

const ResCardContainer = (props) => {
  const { name, cloudinaryImageId, cuisines, avgRating } = props?.resData?.info;
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
      </div>
    </div>
  );
};
export default ResCardContainer;
