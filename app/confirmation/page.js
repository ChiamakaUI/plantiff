"use client";
import Image from "next/image";
import { useUserContext } from '../context/user';
const Main = () => {
  const { user } = useUserContext();
  return (
    <div className='w-[88%] md:w-[65%] lg:w-[55%] mx-auto dark:text-white'>
       <Image
          src='/confirmation.png'
          alt="payment confirmation"
          width={250}
          height={250}
          className="w-full h-[250px] lg:h-[450px]"
        />
         <div className="text-center font-bold p-2 text-lg lg:text-4xl md:text-2xl">
        <p className="my-4 lg:my-4">
          Hey <span className="text-[#159947]">{user?.fullname || "there"}</span>,
          thank you for your purchase.
        </p>
        <p className="lg:mt-8">
          You are Awesome.
        </p>
      </div>
    </div>
  )
}

export default Main