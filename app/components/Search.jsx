import Image from "next/image";
import { FiSearch } from "react-icons/fi";
const Search = () => {
  return (
    <div className="font-serif w-[90%] mx-auto my-4 flex flex-col items-center text-center lg:w-[52%] lg:my-2 md:w-[82%] md:my-2">
      <p className="text-2xl lg:text-4xl lg:font-semibold text-[#004529] dark:text-white">
        Make Your Home a Sanctuary
      </p>
      <p className="my-2 lg:text-xl lg:my-3.5 dark:text-white">
        Flexible solutions created to meet daily, business needs.
      </p>
      <Image
        src="/assets/video.png"
        alt="plant"
        width={150}
        height={150}
        className="w-full"
      />
      <p className="my-2 lg:text-xl lg:my-3.5 text-[#004529] dark:text-white">Make Your Home a Sanctuary</p>
      <div className="bg-[#004529] p-6 flex flex-row items-center rounded-md w-full">
        <input
          type="text"
          placeholder="Search flowers..."
          className="w-[88%] rounded-full p-1.5 focus:outline-none"
        />
        <FiSearch className="text-2xl" />
      </div>
    </div>
  );
};

export default Search;
