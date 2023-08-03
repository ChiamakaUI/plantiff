import Banner from "@/app/components/Banner";

const PlantTips = () => {
  const tips = [
    {
      id: 1,
      heading: "Smart care reminders",
      subtext:
        "Are you not sure when it’s time to water your plants? Planta knows when! Just add them to the app and get notified when it’s time to water, fertilize, mist, clean ",
      imgLink: "/assets/tip1.png",
      firstBtn: "",
      secondBtn: "",
    },
    {
      id: 2,
      heading: "Plant identification",
      subtext:
        "Maybe you are not sure which plant you have? You can just take a picture of it and we will instantly let you know. With Plantas plant scanner you can scan all your house plants to find out the plants name and how to care for them.",
      imgLink: "/assets/tip2.png",
      firstBtn: "App Store",
      secondBtn: "Google Play",
    },
  ];
  return (
    <div className="my-4 lg:my-10">
      <p className="text-3xl font-semibold lg:text-5xl lg:font-bold my-6 lg:my-0 text-center lg:my-10 dark:text-white">
      Everything you need to be a plant parent
      </p>
      <div className="lg:w-[85%] mx-auto">
      {tips.map((tip, index) => (
        <Banner
          img={tip.imgLink}
          key={tip.id}
          heading={tip.heading}
          subtext={tip.subtext}
          btntext1={tip.firstBtn}
          btntext2={tip.secondBtn}
          lgdirection={index % 2 === 0 ? "lg:flex-row-reverse md:flex-row-reverse md:w-[94%]" : "lg:flex-row md:flex-row md:w-[94%]"}
          showBtn={index % 2 !== 0 ? true : false}
        />
      ))}
      </div>
      
    </div>
  );
};

export default PlantTips;

