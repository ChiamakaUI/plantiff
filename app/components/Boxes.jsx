import { TbMoodSmileDizzy } from "react-icons/tb";
import { BsBoxSeam } from "react-icons/bs";
import { FaStore } from "react-icons/fa";
const Boxes = () => {
  const info = [
    {
      id: 1,
      icon: <BsBoxSeam className="text-5xl" />,
      header: "Free Standard Shipping",
      sub:
        "Enjoy free standard shipping on all plants and planters. Orders are shipped via UPS carbon neutral shipping, keeping our carbon footprint as small as possible.",
    },
    {
      id: 2,
      icon: <TbMoodSmileDizzy className="text-5xl" />,
      header: "30-Day Customer Happiness Guarantee",
      sub:
        "Our team preps, prunes, & carefully packs every order—meaning lots of care goes into every step. If your plant arrives damaged or unhealthy, we replace it for free.",
    },
    {
      id: 3,
      icon: <FaStore className="text-5xl" />,
      header: "Local Stores",
      sub:
        "Want hands-on plant expertise IRL? Stop by one of our stores in NYC, Boston, Chicago, LA, or San Francisco to explore more plants, planters, & care accessories.",
    },
  ];
  return (
    <div className="flex flex-col w-[90%] md:w-[97%] mx-auto lg:my-10 lg:w-[88%] lg:flex-row lg:items-center lg:justify-between md:flex-row md:items-center md:justify-between dark:text-white">
      {info.map((data) => (
        <div
          key={data.id}
          className="border rounded-md my-2 p-3.5 w-full lg:w-[380px] md:w-[240px]"
        >
          {data.icon}
          <p className="text-2xl font-semibold my-1">{data.header}</p>
          <p>{data.sub}</p>
        </div>
      ))}
    </div>
  );
};

export default Boxes;
