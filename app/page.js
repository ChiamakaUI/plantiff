import Banner from "./components/Banner";
import Boxes from "./components/Boxes";
import Collections from "./components/Collections";
import ProductsSnippet from "./components/ProductsSnippet";
import Search from "./components/Search";
import Showcase from "./components/Showcase";

export default function Home() {
  return (
    <main className="">
      <Banner
        img={"/assets/banner.png"}
        heading={"Experience nature beautiful gifts"}
        subtext={
          "Create a cozy and relaxing space with free shipping on all plants and planters"
        }
        btntext1={"Start free trial"}
        btntext2={"Explore Plants"}
        lgdirection={"lg:flex-row"}
        showBtn={true}
      />
      <Collections />
      <Search />
      <ProductsSnippet/>
      <Boxes />
      <Showcase />
    </main>
  );
}

