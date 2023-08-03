"use client";

import { useRouter } from "next/navigation";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
import Image from "next/image";
import Modal from "./Modal";
import ToggleIcon from "./ToggleIcon";
const SideMenu = ({ closeFunc }) => {
  const router = useRouter();
  return (
    <Modal
      bgColor={"bg-white dark:bg-[#0C0C0C]"}
      customStyles={"p-6 dark:text-white"}
    >
      <div className="relative h-full">
        <div className="flex flex-row items-center justify-between mt-3.5">
          <div className="flex flex-row items-center text-[#F59300] font-mono">
            <Image src="/plantalogo.png" alt="logo" width={50} height={50} />
            <p>Plantif</p>
          </div>
          <RxCross1
            className="text-3xl cursor-pointer"
            onClick={() => closeFunc(false)}
          />
        </div>
        <div className="flex flex-col justify-between font-medium text-lg my-8 h-[35%]">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/products">Products</Link>
          <Link href="/blog">Blog</Link>
        </div>
        <div className="fixed bottom-20 right-6">
          <ToggleIcon/>
        </div>
      </div>
    </Modal>
  );
};

export default SideMenu;
{
  /* <p
          onClick={() => {
            router.push("/");
            closeFunc(false);
          }}
        >Home</p>
        <p
          onClick={() => {
            router.push("/about");
            closeFunc(false);
          }}
        >About</p>
        <p
          onClick={() => {
            router.push("/products");
            closeFunc(false);
          }}
        >Products</p>
        <p
          onClick={() => {
            router.push("/blog");
            closeFunc(false);
          }}
        >Blog</p> */
}

{
  /* <div className="bg-white font-merriweather p-6 fixed z-[1000] top-0 left-0 w-full h-full"> */
}
