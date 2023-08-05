"use client";
import { useUserContext } from "../context/user";
import { useCartContext } from "../context/cart";
import { useRouter } from "next/navigation";
import { ACTION_TYPES } from "../reducer/reducer";
import toast, { Toaster } from "react-hot-toast";
const Main = () => {
  const { user, setUser } = useUserContext();
  const { state, dispatch } = useCartContext();

  const router = useRouter();

  const confirmPurchase = (e) => {
    e.preventDefault()
    if (Object.keys(user).length === 0) {
      toast.error("Please, fill the form to continue");
      return;
    }
    if (
      user.wallettype === undefined ||
      user.walletkey === undefined ||
      user.expirydate === undefined ||
      user.cvv === undefined ||
      user.expirydate === "" ||
      user.wallettype === "" ||
      user.cvv === "" ||
      user.walletkey === ""
    ) {
      toast.error("Please, fill the form to continue");
      return;
    }
    router.push("/confirmation");

    setTimeout(() => {
      dispatch({ type: ACTION_TYPES.CLEAR });
    }, 1000);
  };

  return (
    <div className="lg:flex flex-row dark:text-white">
      <form className="w-full lg:w-[65%] mx-auto">
        <div className="w-[92%]  mx-auto">
          <label>Your email</label>
          <input
            placeholder=""
            className="w-full border p-2.5 rounded-lg my-3 dark:bg-[#0C0C0C]"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div className="w-[92%]  mx-auto">
          <label>Your full name</label>
          <input
            placeholder=""
            className="w-full border p-2.5 rounded-lg my-3 dark:bg-[#0C0C0C]"
            onChange={(e) => setUser({ ...user, fullname: e.target.value })}
          />
        </div>
        <div className="w-[92%]  mx-auto">
          <label>Phone number</label>
          <input
            placeholder=""
            className="w-full border p-2.5 rounded-lg my-3 dark:bg-[#0C0C0C]"
            onChange={(e) => setUser({ ...user, number: e.target.value })}
          />
        </div>
        <div className="w-[92%]  mx-auto">
          <label>Wallet type</label>
          <input
            placeholder=""
            className="w-full border p-2.5 rounded-lg my-3 dark:bg-[#0C0C0C]"
            onChange={(e) => setUser({ ...user, wallettype: e.target.value })}
          />
        </div>
        <div className="w-[92%]  mx-auto">
          <label>Key</label>
          <input
            placeholder=""
            className="w-full border p-2.5 rounded-lg my-3 dark:bg-[#0C0C0C]"
            onChange={(e) => setUser({ ...user, walletkey: e.target.value })}
          />
        </div>
        <div className="w-[92%] mx-auto flex flex-row justify-between items-center">
          <div className="w-[47%]">
            <label>Expiry date</label>
            <input
              placeholder="MM/YY"
              className="w-full border p-2.5 rounded-lg my-3 dark:bg-[#0C0C0C]"
              onChange={(e) => setUser({ ...user, expirydate: e.target.value })}
            />
          </div>

          <div className="w-[47%]">
            <label>CVV</label>
            <input
              placeholder=""
              className="w-full border p-2.5 rounded-lg my-3 dark:bg-[#0C0C0C]"
              onChange={(e) => setUser({ ...user, cvv: e.target.value })}
            />
          </div>
        </div>
        <div className="flex flex-col items-center my-10 md:flex-row md:justify-between lg:flex-row lg:justify-between w-[92%] mx-auto">
          <p
            onClick={() => router.push("/products")}
            className="underline mt-5 text-[#004529] cursor-pointer dark:text-white text-base md:text-lg lg:text-lg"
          >
            Continue Shopping
          </p>

          <button
            className="bg-[#004529] py-2.5 md:py-2 lg:py-1.5 my-2 md:my-0 lg:my-0 text-white rounded-md w-full md:w-[40%] lg:w-[40%] text-base md:text-lg lg:text-lg"
            onClick={confirmPurchase}
          >
            Confirm Purchase
          </button>
        </div>
      </form>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Main;
