"use client";
import { useCartContext } from "@/app/context/cart";
import Counter from "@/app/components/Counter";
import toast, { Toaster } from "react-hot-toast";
import { ACTION_TYPES } from "@/app/reducer/reducer";
import useCounter from "@/app/hooks/useCounter";
import Image from "next/image";
import { urlFor } from "@/app/lib/sanityImageUrl";
const ProductDetails = ({ name, image, price, id, description }) => {
  const { state, dispatch } = useCartContext();
  const { count, increaseCount, decreaseCount } = useCounter();

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
      quantity: count,
    };
    dispatch({ type: ACTION_TYPES.ADD, payload: cartItem });
    toast.success(`Success, you have added ${name} to your cart.`);
  };
  return (
    <div className="w-[90%] mx-auto mt-6 p-2 lg:flex flex-row lg:h-[650px] lg:w-[78%] lg:relative dark:text-white lg:justify-between">
      <div className="lg:p-4 lg:w-[45%]">
        <Image
          src={urlFor(image).url()}
          width={357}
          height={384}
          alt={name}
          className="mx-auto rounded-lg lg:hidden"
        />
        <Image
          src={urlFor(image).url()}
          width={525}
          height={600}
          alt={name}
          className="mx-auto rounded-lg hidden lg:block h-[500px]"
        />
      </div>
      <div className="lg:w-[50%] lg:p-3.5">
        <div className="flex flex-row justify-between items-center my-6 text-xl lg:text-3xl lg:font-semibold">
          <p>{name}</p>
          <p>₦{price}</p>
        </div>

        <Counter
          num={count}
          increaseFunc={increaseCount}
          decreaseFunc={decreaseCount}
        />
        <div className="flex flex-row items-center my-4">
          <button
            className="bg-[#004529] text-lg text-white w-[200px] lg:w-[250px] py-2 rounded"
            onClick={() => addToCart(id)}
          >
            Add to cart
          </button>
          <Toaster position="top-right" reverseOrder={false} />
        </div>
        <p className="text-sm my-3 lg:my-6 lg:text-lg">
          Featuring plump, silvery-green leaves with purple-hued margins that
          fade into speckles towards the center of each leaf, {name} packs a ton
          of character into one 8-inch plant! While {name} makes a charming
          stand-alone specimen, or a unique addition to an arrangement, be sure
          to keep this variety out of the reach of curious pets and children, as
          its leaves do contain a mild toxin. {name} thrives when given plenty
          of bright light, which will help retain its signature coloration. It
          is particularly sensitive to overwatering, so ample airflow, porous
          soil, and adequate drainage are all necessary to help avoid rot. Be
          sure to allow the soil to dry all the way through before watering
          again, and protect this tender succulent from frosty temperatures
          below Zone 9.
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
