// sanity/product.ts
export const product = {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "productName",
      type: "string",
      title: "Product Name",
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'productName',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input => input
                             .toLowerCase()
                             .replace(/\s+/g, '-')
                             .slice(0, 200)
      }
    },
    {
      name: "productPrice",
      type: "string",
      title: "Product Price",
    },
    {
      name: "productImage",
      type: "array",
      title: "Image",
      of: [
        {
          type: "image",
          fields: [
            {
              name: "alt",
              type: "text",
              title: "Alternative text",
            },
          ],
        },
      ],
    },
  ],
};
