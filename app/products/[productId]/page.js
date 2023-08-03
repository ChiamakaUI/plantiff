import ProductDetails from "../components/ProductDetails";
import { client } from '@/app/lib/sanity';

async function getData(id) {
  const query = `*[_type == "product" && _id == "${id}"]`;
  const data = await client.fetch(query);

  return data;
  
}
const ProductPage = async ({ params: { productId } }) => {
  const product = await getData(productId);
  const [ data ] = product;
  return (
    <div>
      <ProductDetails
        name={data.name}
        price={data.price}
        image={data.image}
        id={data._id}
      />
    </div>
  );
};

export default ProductPage;
