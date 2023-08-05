import Product from "../components/Product";
import CategoryButton from "./components/CategoryButton";
import { client } from "../lib/sanity";

async function getData() {
  const query = `*[_type == "product"]`;
  const data = await client.fetch(query);

  return data;
}

async function getCategories() {
  const query = `*[_type == "category"]`;
  const data = await client.fetch(query);
  return data;
}

// async function filterCategories(name) {
//   const query = `*[_type == "product" && category == "${name}"]`;
//   const data = await client.fetch(query);
//   return data;
// }

const Main = async () => {
  const categories = await getCategories();

  const data = await getData();

  return (
    <div className="w-[96%] mx-auto lg:w-[72%] md:w-[92%]">
      <div className="my-6 scroll-smooth scrollbar-hide flex flex-row w-[94%] mx-auto overflow-x-auto justify-between lg:w-[80%] lg:mx-0 md:w-full md:mx-0">
        <CategoryButton name="All plants" />
        {categories.map((cat) => (
          <CategoryButton key={cat._id} name={cat.name} />
        ))}
      </div>
      <div className="flex flex-row flex-wrap">
        {data.map((pro) => (
          <Product
            key={pro._id}
            name={pro.name}
            price={pro.price}
            image={pro.image}
            id={pro._id}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
