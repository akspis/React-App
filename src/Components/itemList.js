import { useDispatch } from "react-redux";
import { FOOD_URL } from "../utils/constants";
import { addItem } from "../Redux/cartSlice";

const ItemList = (data) => {
  const dispatch = useDispatch();

  const hanleCartData = (data) => {
    dispatch(addItem(data));
  };

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
        <button
          className="absolute bg-black font-semibold rounded-lg text-white p-2 text-sm bottom-0 left-7"
          onClick={() => hanleCartData(data)}
        >
          Add +
        </button>
      </div>
    </div>
  );
};
export default ItemList;
