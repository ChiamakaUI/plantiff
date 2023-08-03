import Link from "next/link";
import Product from "./Product";
import getProducts from "@/lib/getProducts";
const ProductsSnippet = async () => {
  const res = await getProducts();
  const { data } = res;
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

export default ProductsSnippet;
