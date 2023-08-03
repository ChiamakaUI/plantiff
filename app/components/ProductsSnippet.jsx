import Link from "next/link";
import Product from "./Product";
import { client } from '../lib/sanity';

async function getData() {
  const query = `*[_type == "product"]`;
  const data = await client.fetch(query);

  return data;
}

const ProductsSnippet = async () => {
  const data = await getData();

  return (
    <div className="my-5 w-[88%] mx-auto">
      <div className="flex flex-row items-center justify-between my-2">
        <p className="text-3xl dark:text-white">Our shop</p>
        <Link href="/products">
          <p className="text-[#F59300] text-lg">view all</p>
        </Link>
      </div>

      <div className="flex flex-row w-full overflow-x-auto justify-between scroll-smooth scrollbar-hide">
        {data.slice(0, 7).map((pro) => (
          <Product
          key={pro.id}
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

export default ProductsSnippet;
