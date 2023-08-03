export default async function getProducts() {
    const res = await fetch("http://127.0.0.1:1337/api/products?populate=*");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }
  