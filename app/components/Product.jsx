"use client";
import Image from "next/image";
import { useCartContext } from "../context/cart";
import { ACTION_TYPES } from "../reducer/reducer";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import { urlFor } from '../lib/sanityImageUrl';
const Product = ({ name, image, price, id }) => {
  const { state, dispatch } = useCartContext();
  // console.log(image);

  const addToCart = (id) => {
    // console.log(id)
    for (let i = 0; i < state.length; i++) {
      const element = state[i];
      if (element.id === id) {
        element.quantity++;
        toast.error(`${name} has already been added to your cart.`);
        return;
      }
    }

    const cartItem = {
      id,
      name,
      image,
      price,
      quantity: 1,
    };
    dispatch({ type: ACTION_TYPES.ADD, payload: cartItem });
    toast.success(`Success, you have added ${name} to your cart.`);
  };
  return (
    <div className="min-w-[156px] max-w-[156px] lg:min-w-[220px] lg:max-w-[220px] mx-2 my-2.5 dark:text-white">
      <Link href={`/products/${id}`}>
        <div>
          <Image
            src={urlFor(image).url()}
            alt="plant"
            width={150}
            height={150}
            className="h-[180px] w-full"
          />
          <div className="w-full">
            <div className="flex flex-row justify-between w-full text-sm font-bold my-2">
              <p>{name}</p>
              <p className="text-[#F59300]">₦{price}</p>
            </div>
          </div>
        </div>
      </Link>
      <button
        className="bg-[#F59300] px-4 rounded"
        onClick={() => addToCart(id)}
      >
        Buy
      </button>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Product;
//156
