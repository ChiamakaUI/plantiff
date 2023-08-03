// import Image from "next/image";
import Banner from "../components/Banner";
import PlantTips from "./components/PlantTips";
import Boxes from "./components/Boxes";

const Main = () => {
  return (
    <div>
      <Banner
        img={"/assets/about.png"}
        heading={"Happy people are plant people"}
        subtext={
          "Individual care schedule and reminders for your plants, recommendations, step by step guides, identification, light meter and more. Keep your plants alive with Planta!"
        }
        btntext1={"App Store"}
        btntext2={"Google Play"}
        lgdirection={"flex-row"}
        showBtn={true}
      />
      <PlantTips/>
      <Boxes/>
    </div>
  );
};

export default Main;

{/* <Image
  alt="banner"
  src={"/assets/download.png"}
  width={150}
  height={150}
  className="w-[88%] object-contain h-[350px]"
/> */}