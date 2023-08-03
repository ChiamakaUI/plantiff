import getProduct from "@/lib/getProduct";
import ProductDetails from "../components/ProductDetails";
const ProductPage = async ({ params: { productId } }) => {
  const product = await getProduct(productId);
  const { data } = product;
  return (
    <div>
      <ProductDetails
        name={data.attributes.name}
        price={data.attributes.price}
        image={data.attributes.images.data[0].attributes.url}
        id={data.id}
      />
    </div>
  );
};

export default ProductPage;
