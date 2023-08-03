"use client";
import Modal from "./Modal";
import { RxCross1 } from "react-icons/rx";
import { useCartContext } from "../context/cart";
import { ACTION_TYPES } from "../reducer/reducer";
import CartItem from "./CartItem";
import { useRouter } from "next/navigation";

const Cart = ({ closeFunc }) => {
  const { state, dispatch } = useCartContext();
  const router = useRouter();
  const deleteItem = (id) => {
    dispatch({ type: ACTION_TYPES.DELETE, payload: id });
  };
  const subTotal = state.reduce(
    (acc, current) => acc + current.quantity * current.price,
    0
  );

  const totalQuantity = state.reduce(
    (acc, current) => acc + current.quantity,
    0
  );
  return (
    <Modal bgColor="bg-black-overlay">
      <div className="bg-[#004529] w-[96%] md:w-[60%] lg:w-[32%] ml-auto text-white h-screen p-3 max-w-[450px] overflow-y-auto">
        <div className="flex flex-row w-[80%] mx-auto justify-between items-center py-2">
          <p className="text-2xl lg:text-3xl font-semibold">Your Cart</p>
          <RxCross1
            className="text-3xl cursor-pointer"
            onClick={() => closeFunc(false)}
          />
        </div>
        <hr className="w-[92%] mx-auto lg:w-[85%] mb-4 mt-2" />
        {state.length === 0 ? (
          <div className="flex flex-col items-center">
            <p className="text-lg md:text-xl lg:text-2xl">
              There are no items in your cart
            </p>
            <button
              className="bg-white text-[#004529] px-3.5 py-2 mt-6 rounded-md"
              onClick={() => {
                router.push("/products");
                closeFunc();
              }}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="">
            {state.map((item) => (
              <CartItem product={item} key={item.id} deleteFunc={deleteItem} />
            ))}
          </div>
        )}
        <button className="bg-white text-[#004529] px-3.5 py-3 mt-6 rounded-full w-full uppercase font-semibold">Checkout</button>
      </div>
    </Modal>
  );
};

export default Cart;
