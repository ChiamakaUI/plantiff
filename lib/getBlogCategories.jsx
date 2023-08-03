export default async function getBlogCategories() {
    const res = await fetch("http://127.0.0.1:1337/api/blog-categories?populate=*");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }
  