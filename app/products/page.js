import getProducts from "@/lib/getProducts";
import Product from "../components/Product";
import getCategories from "@/lib/getCategories";
import CategoryButton from "./components/CategoryButton";
const Main = async () => {
  const products = getProducts();
  const categories = getCategories();
  const [productsData, categoriesData] = await Promise.all([
    products,
    categories,
  ]);
  // console.log(categoriesData)
  const { data } = productsData;
  const { data: category } = categoriesData;

  return (
    <div className="w-[96%] mx-auto lg:w-[72%] md:w-[92%]">
      <div className="my-6 scroll-smooth scrollbar-hide flex flex-row w-[94%] mx-auto overflow-x-auto justify-between lg:w-[80%] lg:mx-0 md:w-full md:mx-0">
        <CategoryButton name="All plants" />
        {category.map((cat) => (
          <CategoryButton key={cat.id} name={cat.attributes.name} />
        ))}
      </div>
      <div className="flex flex-row flex-wrap">
        {data.map((pro) => (
          <Product
            key={pro.id}
            name={pro.attributes.name}
            price={pro.attributes.price}
            image={pro.attributes.images.data[0].attributes.url}
            id={pro.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;

// const res = await getProducts();
// const { data } = res;
