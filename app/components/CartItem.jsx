"use client";

import Image from "next/image";
import { RxCrossCircled } from "react-icons/rx";
import Counter from "./Counter";
import { useCartContext } from "../context/cart";
import { ACTION_TYPES } from "../reducer/reducer";
import useCounter from "../hooks/useCounter";

const CartItem = ({ product, deleteFunc }) => {
  const { count, increaseCount, decreaseCount } = useCounter();
  const { dispatch } = useCartContext();

  const increaseQuantity = (item) => {
    dispatch({ type: ACTION_TYPES.INCREASE, payload: item });
    increaseCount();
  };
  const decreaseQuantity = (item) => {
    dispatch({ type: ACTION_TYPES.DECREASE, payload: item });
    decreaseCount();
  };
  return (
    <>
      <div className="w-[92%] mx-auto flex flex-row justify-between md:hidden lg:hidden my-3.5">
        <Image
          // src={product?.image}
          src={`http://127.0.0.1:1337${product?.image}`}
          className="min-w-[100px] max-w-[100px] h-[95px]"
          height={100}
          width={95}
          alt={product?.name}
        />
        <div className="w-[38%]">
          <p>{product?.name}</p>
          <Counter
            num={count}
            increaseFunc={() => increaseQuantity(product)}
            decreaseFunc={() => decreaseQuantity(product)}
            containerStyles={"rounded-lg mt-6"}
            // btnStyles={"border-x px-2 border-black"}
          />
        </div>
        <div>
          <RxCrossCircled
            className="text-3xl cursor-pointer"
            onClick={() => {
              deleteFunc(product.id);
            }}
          />
          <p className="mt-6 text-lg font-semibold">₦{count * product?.price}</p>
        </div>
      </div>
    
      <div className="w-[92%] lg:w-[85%]  mx-auto hidden md:flex lg:flex flex-row justify-between my-8">
        <div className="flex flex-row w-[60%]">
          <Image
            src={`http://127.0.0.1:1337${product?.image}`}
            className="max-w-[100px] min-w-[100px] h-[95px]"
            height={100}
            width={95}
            alt={product?.name}
          />
          <div className="ml-5 lg:ml-10 relative">
            <p className="text-sm font-semibold">{product?.name}</p>
            <Counter
              num={count}
              increaseFunc={() => increaseQuantity(product)}
              decreaseFunc={() => decreaseQuantity(product)}
              containerStyles={"absolute bottom-4"}
            />
          </div>
        </div>
        <div className="relative w-[15%]">
          <p className="text-xl">₦{count * product?.price}</p>
          <p
            className="uppercase absolute bottom-4 cursor-pointer text-sm opacity-75"
            onClick={() => {
              deleteFunc(product.id);
            }}
          >
            Remove
          </p>
        </div>
      </div>
    </>
  );
};

export default CartItem;

{
  /* <RxCrossCircled
            className="text-3xl cursor-pointer"
            onClick={() => {
              deleteFunc(product.id);
            }}
          /> */
}

{
  /* <hr className="hidden w-[92%] mx-auto md:block lg:block lg:w-[80%]" /> */
}
