import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../Redux/cartSlice";
import { FOOD_URL } from "../utils/constants";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  return (
    <div className="w-6/12 m-auto">
      <div className="text-center m-4 p-2 font-bold text-2xl">Cart</div>
      <div className="text-center">
        <button
          className="m-4 p-2 font-bold rounded-lg bg-red-500"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
      </div>
      {items.length > 0 ? (
        <div className="">
          {items?.map((item) => (
            <div className="border-b-2 flex m-4 p-4">
              <div className="w-9/12 ">
                <span className="py-2">{item.data?.info?.name}</span> -
                <span className="">
                  Rs.
                  {item.data?.info?.price / 100 ||
                    item.data?.info?.defaultprice / 100}
                </span>
                <p className="py-2 text-xs">{item.data?.info?.description}</p>
              </div>
              <div className="3/12 w-28 mx-auto relative">
                <img src={FOOD_URL + item.data?.info?.imageId} alt="food" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center">add to cart. Happy Shopping</div>
      )}
    </div>
  );
};
export default Cart;
