// import Product from "./Product";
import { Product } from "@/typings";
import Link from "next/link";
import ProductItem from "./ProductItem";

/* 

This is a server component. I can fetch an API and pass it to the client. It will be rendered on the client. 
It will not be rendered on the server. 

*/

const fetchProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await res.json();
  return products;
};

export default async function ProductFeed() {
  const products = await fetchProducts();

  return (
    <>
      <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
        {products.slice(0, 4).map((product) => (
          <p key={product.id}>
            {/* <Link href={`/products/${product.id}`}>id: {product.id}</Link> */}
            <ProductItem product={product} />
          </p>
        ))}
        <img
          className="md:col-span-full"
          src="https://aleph-m-2.s3.amazonaws.com/maria-lupan-OkuM6V9m9l0-unsplash.jpg"
          alt=""
        />
        <div className="md:col-span-2">
          {products.slice(4, 5).map((product) => (
            <p key={product.id}>
              {/* <Link href={`/products/${product.id}`}>id: {product.id}</Link> */}
              <ProductItem product={product} />
            </p>
          ))}
        </div>
        {products.slice(5, products.length).map((product) => (
          <p key={product.id}>
            {/* <Link href={`/products/${product.id}`}>id: {product.id}</Link> */}
            <ProductItem product={product} />
          </p>
        ))}
      </div>
    </>
    //     <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
    //       {products.slice(0, 4).map((product) => (
    //         <Product
    //           key={product.id}
    //           id={product.id}
    //           title={product.title}
    //           price={product.price}
    //           description={product.description}
    //           category={product.category}
    //           image={product.image}
    //         />
    //       ))}
    //       <img
    //         className="md:col-span-full"
    //         src="https://aleph-m-2.s3.amazonaws.com/maria-lupan-OkuM6V9m9l0-unsplash.jpg"
    //         alt=""
    //       />
    //       <div className="md:col-span-2">
    //         {products.slice(4, 5).map((product) => (
    //           <Product
    //             key={product.id}
    //             id={product.id}
    //             title={product.title}
    //             price={product.price}
    //             description={product.description}
    //             category={product.category}
    //             image={product.image}
    //           />
    //         ))}
    //       </div>

    //       {products.slice(5, products.length).map((product) => (
    //         <Product
    //           key={product.id}
    //           id={product.id}
    //           title={product.title}
    //           price={product.price}
    //           description={product.description}
    //           category={product.category}
    //           image={product.image}
    //         />
    //       ))}
    //     </div>
    //   );
    // }

    // function ProductFeed({ products }) {
    //   return (
    //     <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
    //       {products
    //         .slice(0, 4)
    //         .map(({ id, title, price, description, category, image }) => (
    //           <Product
    //             key={id}
    //             id={id}
    //             title={title}
    //             price={price}
    //             description={description}
    //             category={category}
    //             image={image}
    //           />
    //         ))}
    //       <img
    //         className="md:col-span-full"
    //         src="https://aleph-m-2.s3.amazonaws.com/maria-lupan-OkuM6V9m9l0-unsplash.jpg"
    //         alt=""
    //       />
    //       <div className="md:col-span-2">
    //         {products
    //           .slice(4, 5)
    //           .map(({ id, title, price, description, category, image }) => (
    //             <Product
    //               key={id}
    //               id={id}
    //               title={title}
    //               price={price}
    //               description={description}
    //               category={category}
    //               image={image}
    //             />
    //           ))}
    //       </div>

    //       {products
    //         .slice(5, products.length)
    //         .map(({ id, title, price, description, category, image }) => (
    //           <Product
    //             key={id}
    //             id={id}
    //             title={title}
    //             price={price}
    //             description={description}
    //             category={category}
    //             image={image}
    //           />
    //         ))}
    //     </div>
  );
  // }

  // export default ProductFeed;
}
