import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const data = await client.fetch(`*[_type == "product"] {
    _id,
  productName,
  productPrice,
  "slug": slug.current,
  "imageUrl": productImage[0].asset->url
}`);

  // console.log(data);
  return (
    <div className="flex justify-evenly mt-10"> 
      {data.map((item: any) => {
        return (
          <Link href={`products/${item.slug}`} key={item._id} className="shadow-lg p-5 hover:scale-105 transition-transform duration-300 ease-in-out">
            <Image
              src={item.imageUrl}
              alt={item.productName}
              height={250}
              width={250}
              className="max-h-72 object-cover rounded mt-2"
            />
            <span className="flex my-3 justify-between items-center text-xl font-bold text-gray-700">
              <h1 className="max-w-40">{item.productName}</h1>
              <p className="">${item.productPrice}</p>
            </span>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md w-full hover:bg-blue-400">Add to Cart</button>
          </Link>
        );
      })}
    </div>
  );
}
