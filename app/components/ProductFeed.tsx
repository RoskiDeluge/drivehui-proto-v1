import { Product } from "@/typings";
import ProductItem from "./ProductItem";

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
          <div key={product.id}>
            {/* <Link href={`/products/${product.id}`}>id: {product.id}</Link> */}
            <ProductItem product={product} />
          </div>
        ))}
        <img
          className="md:col-span-full"
          src="https://aleph-m-2.s3.amazonaws.com/maria-lupan-OkuM6V9m9l0-unsplash.jpg"
          alt=""
        />
        <div className="md:col-span-2">
          {products.slice(4, 5).map((product) => (
            <div key={product.id}>
              {/* <Link href={`/products/${product.id}`}>id: {product.id}</Link> */}
              <ProductItem product={product} />
            </div>
          ))}
        </div>
        {products.slice(5, products.length).map((product) => (
          <div key={product.id}>
            {/* <Link href={`/products/${product.id}`}>id: {product.id}</Link> */}
            <ProductItem product={product} />
          </div>
        ))}
      </div>
    </>
  );
}
