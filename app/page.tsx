import { client } from "@/sanity/lib/client";
import Image from "next/image";

export default async function Home() {
  const data = await client.fetch(`*[_type == "product"] {
  productName,
  productPrice,
  "imageUrl": productImage.asset->url,
    _id
}`);

  // console.log(data);
  return (
    <div className="flex justify-evenly mt-10">``
      {data.map((item: any) => {
        return (
          <div key={item._id} className="shadow-lg p-3">
            <Image
              src={item.imageUrl}
              alt={item.productName}
              height={250}
              width={250}
              className="max-h-72 object-cover rounded mt-2"
            />
            <h1>{item.productName}</h1>
            <p>$ {item.productPrice}</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md">Add to Cart</button>
          </div>
        );
      })}
    </div>
  );
}
