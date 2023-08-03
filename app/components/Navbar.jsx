"use client";
import { CgMenuLeftAlt } from "react-icons/cg";
import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useState } from "react";
import SideMenu from "./SideMenu";
import Cart from "./Cart";
import ToggleIcon from "./ToggleIcon";
import { useCartContext } from "../context/cart";
import { BsFillCircleFill } from "react-icons/bs";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { state } = useCartContext();
  return (
    <>
      <div className="font-serif flex flex-row items-center justify-between p-4 lg:hidden my-3.5 dark:text-white">
        <CgMenuLeftAlt
          className="text-4xl cursor-pointer"
          onClick={() => setShowMenu(true)}
        />
        <div className="flex flex-row items-center text-[#F59300] font-mono font-bold">
          <Image
            src="/plantalogo.png"
            alt="logo"
            width={50}
            height={50}
            className="w-[40px]"
          />
          <p>Plantif</p>
        </div>

        <div className="relative">
          <BsFillCircleFill
            className={`text-[8px] text-red-600 ${
              state.length === 0 ? "hidden" : ""
            }`}
          />
          <MdOutlineShoppingCart
            className="text-3xl cursor-pointer"
            onClick={() => setShowCart(true)}
          />
        </div>
      </div>
      <div className="font-serif hidden lg:flex flex-row items-center justify-between font-merriweather p-3 w-[80%] mx-auto my-6 dark:text-white">
        <div className="flex flex-row items-center text-[#F59300] font-mono">
          <Image src="/plantalogo.png" alt="logo" width={50} height={50} />
          <p>Plantif</p>
        </div>
        <div className="flex flex-row items-center justify-between w-[40%]">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/products">Products</Link>
          <Link href="/blog">Blog</Link>
        </div>
        <div className="flex flex-row items-center w-[15%] justify-between p-3 rounded-full">
          <FiSearch className="text-3xl" />
          {/* <input type="text" placeholder="Search..." className="w-[80%] p-1 focus:outline-none"/> */}
          <div className="relative">
            <p
              className={`absolute right-px bottom-6 text-sm ${
                state.length === 0 ? "hidden" : ""
              }`}
            >
              {state.length}
            </p>
            <MdOutlineShoppingCart
              className="text-3xl cursor-pointer"
              onClick={() => setShowCart(true)}
            />
          </div>
          <ToggleIcon />
        </div>
      </div>
      {showMenu && <SideMenu closeFunc={setShowMenu} />}
      {showCart && <Cart closeFunc={setShowCart} />}
    </>
  );
};

export default Navbar;
