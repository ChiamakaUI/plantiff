import Image from "next/image";

const Banner = ({
  img,
  heading,
  subtext,
  btntext1,
  btntext2,
  lgdirection,
  showBtn,
}) => {
  return (
    <div
      className={`w-[88%] mx-auto my-5 flex flex-col font-serif ${lgdirection} lg:items-center lg:justify-between md:flex-row md:items-center md:justify-between dark:text-white`}
    >
      <div className="w-[98%] mx-auto lg:w-[40%] md:w-[40%] lg:mx-0">
        <p className="text-4xl font-semibold lg:text-5xl lg:font-bold">
          {heading}
        </p>
        <p className="text-base my-6 lg:text-xl lg:my-8">{subtext}</p>
        {showBtn && (
          <div className="w-[90%] my-2 flex flex-row items-center justify-between lg:w-[60%] ">
            <button className="bg-[#004529] p-3 text-white rounded-md">
              {btntext1}
            </button>
            <button className="border border-black p-3 rounded-md dark:border-white">
              {btntext2}
            </button>
          </div>
        )}
      </div>

      <div className="w-[98%] mx-auto mt-3 lg:w-[50%] md:w-[50%] lg:mx-0 lg:mt-0">
        <Image
          src={img}
          alt="banner"
          width={150}
          height={150}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Banner;
//lg:flex-row
