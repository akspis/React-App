import { useContext, useEffect } from "react";
import { FOOD_URL } from "../utils/constants";
import { idContext } from "../utils/userContext";

const ItemList = (data) => {
  const { id, setId } = useContext(idContext);
  useEffect(() => setId((prev) => prev + 1), []);
  console.log("hey", id);
  return (
    <div className="border-b-2 flex m-4 p-4">
      <div className="w-9/12 ">
        <span className="py-2">{data.data?.info?.name}</span> -
        <span className="">
          Rs.
          {data.data?.info?.price / 100 || data.data?.info?.defaultprice / 100}
        </span>
        <p className="py-2 text-xs">{data.data?.info?.description}</p>
      </div>
      <div className="3/12 w-28 mx-auto relative">
        <img src={FOOD_URL + data.data?.info?.imageId} alt="food" />
        <button className="absolute bg-black font-semibold rounded-lg text-white p-2 text-sm bottom-0 left-7">
          Add + {id}
        </button>
      </div>
    </div>
  );
};
export default ItemList;
