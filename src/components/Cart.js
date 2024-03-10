import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux/dist/react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  console.log(cartItems);

  return (
    <div className="text-center m-5 p-5">
      <h1 className="text-2xl font-bold m-5">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          id="btn"
          className=" bg-yellow-400 px-2 py-1 m-5 content-center rounded-sm hover:text-yellow-500 hover:bg-black"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        <ItemList items={cartItems} />
        {cartItems.length == 0 && <h1>Cart is empty</h1>}
      </div>
    </div>
  );
};

export default Cart;
