import Banner from "./components/Banner";
import ProductFeed from "./components/ProductFeed";

export default function Home() {
  return (
    <main className="max-w-screen-2xl mx-auto">
      <Banner />
      {/* @ts-ignore */}
      <ProductFeed />
      <h1>Hello World</h1>
    </main>
  );
}
