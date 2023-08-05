export default {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "price",
      type: "number",
      title: "Price",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
    },
    {
      name: "category",
      type: "string",
      title: "Category",
    },
  ],
};
