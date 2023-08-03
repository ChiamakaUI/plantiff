export default async function getProduct(productId) {
  const res = await fetch(
    `http://127.0.0.1:1337/api/products/${productId}?populate=*`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
