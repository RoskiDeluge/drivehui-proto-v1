"use client";

import { Product } from "@/typings";
import Image from "next/image";
import { useState } from "react";
// import { StarIcon } from "@heroicons/react/24/solid";
// import Currency from "react-currency-formatter";

// const MAX_RATING = 5;
// const MIN_RATING = 1;

type Props = {
  product: Product;
};

function ProductItem({ product }: Props) {
  //   const [rating] = useState(
  //     Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING)
  //   );

  // This getter variable is used to mimic data that the car has been rented
  const [isRented] = useState(Math.random() < 0.5);

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {product.category}
      </p>
      <Image
        src={product.image}
        height={200}
        width={200}
        alt={product.title}
        // objectFit="contain"
        style={{ objectFit: "contain" }}
      />
      <h4 className="my-3">{product.title}</h4>
      {/* <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
      </div> */}
      <p className="text-xs my-2 line-clamp-2">{product.description}</p>
      <div className="mb-5">
        {/* <Currency quantity={price} currency="USD" /> */}
        <p>{product.price}</p>
      </div>
      {isRented && (
        <div className="flex items-center space-x-2 -mt-5">
          <p className="text-xs text-gray-500">This car is rented</p>
        </div>
      )}
      <button className="mt-auto button">Rent</button>
    </div>
  );
}

export default ProductItem;
