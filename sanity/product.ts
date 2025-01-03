// sanity/product.ts
export const product = {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'productName',
            type: 'string',
            title: 'Product Name'
        },
        {
            name: 'productPrice',
            type: 'string',
            title: 'Product Price'
        },
        {
            name: 'productImage',
            type: 'image',
            title: 'Product Image'
        },
    ]
}