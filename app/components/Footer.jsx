import Image from "next/image";
import { BsTwitter, BsInstagram, BsArrowRight } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div
        className="h-[355px] lg:h-[450px] w-[88%] lg:w-[55%] mx-auto bg-no-repeat bg-cover bg-center my-12 p-8 lg:p-12 md:p-10 font-serif"
        style={{ backgroundImage: "url(/assets/footer.png)" }}
      >
        <p className="text-[#004529] text-2xl font-semibold lg:text-4xl">
          Get inspired from our client collections
        </p>
        <p className="my-4 lg:text-xl font-serif">
          If you use the hashtag #bioomey on Instagram, well be happy to feature
          your plant pictures on our platform
        </p>
        <div className="flex flex-row items-center justify-between lg:w-[40%] md:w-[42%]">
          <button className="bg-[#004529] text-white py-3 px-4 font-serif shadow-2xl">
            Shop now
          </button>
          <div className="flex flex-row items-center text-[#004529]">
            <p>Explore plants</p>
            <BsArrowRight className="text-2xl ml-3" />
          </div>
        </div>
      </div>
      <div className="bg-[#004529] text-[#F59300] font-mono">
        <div className="w-full lg:w-[85%] lg:mx-auto flex flex-col lg:flex-row lg:justify-between md:flex-row md:justify-between p-3.5 items-center">
          <div className="flex flex-row items-center">
            <Image src="/plantalogo.png" alt="logo" width={50} height={50} />
            <p>Plantif</p>
          </div>

          <div className="flex flex-row items-center justify-between">
            <p className="mx-1.5 lg:mx-3.5">Help</p>
            <p className="mx-1.5 lg:mx-3.5">Contact Us</p>
            <p className="mx-1.5 lg:mx-3.5">Privacy & Terms</p>
          </div>
          <div className="flex flex-row items-center justify-between text-2xl">
            <FaFacebookF className="mx-1.5 lg:mx-3.5" />
            <BsTwitter className="mx-1.5 lg:mx-3.5" />
            <BsInstagram className="mx-1.5 lg:mx-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
