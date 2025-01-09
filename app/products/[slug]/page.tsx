import { client } from '@/sanity/lib/client'
import Image from 'next/image'
import React from 'react'

interface Props {
    params: {
        slug: string
    }
}

export default async function page({ params }: Props) {
    const data = await client.fetch(`
    *[_type == "product" && slug.current == "${params.slug}"]{
      productName,
      productPrice,
      "slug": slug.current,
      "imageUrl": productImage[].asset->url
    }
  `)

    const product = data[0];

    return (
        <div className="max-w-4xl mx-auto p-4 md:flex gap-40">
            {/* Main Content */}
            <div className="flex md:flex-row gap-6 w-1/2">
                {/* Thumbnails */}
                <div className="flex flex-col flex-wrap gap-2 md:w-1/3">
                    {product.imageUrl.slice(1).map((url: string, index: number) => (
                        <Image
                            key={index}
                            src={url}
                            alt={`Images`}
                            width={100}
                            height={100}
                            className="rounded-md object-cover max-h-28 max-w-28 cursor-pointer hover:scale-105 transition-transform"
                        />
                    ))}
                </div>
            

            {/* Main Image */}
            {product.imageUrl && (
                <div className="w-full md:w-2/3">
                    <Image
                        src={product.imageUrl[0]}
                        alt={product.productName}
                        width={500}
                        height={500}
                        className="rounded-lg object-cover w-full h-auto min-h-96 min-w-96"
                    />
                </div>
            )}
            </div>

            {/* Product Details */}
            <div className="mt-6 w-1/2">
                <h1 className="text-2xl font-bold text-gray-800">{product.productName}</h1>
                <p className="text-lg text-gray-600 mt-2">${product.productPrice}</p>
            </div>
        </div>
    )
}
