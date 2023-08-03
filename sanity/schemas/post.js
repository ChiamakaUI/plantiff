export default {
    name: "post",
    type: "document",
    title: "Post",
    fields: [
      {
        name: "name",
        type: "string",
        title: "Name",
      },
      {
        name: "image",
        type: "image",
        title: "Image",
      },
      {
          name: "description",
          type: "string",
          title: "Description",
        },
    ],
  };