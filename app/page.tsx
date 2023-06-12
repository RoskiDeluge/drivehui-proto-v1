import Footer from "@/components/Footer";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";

export default function Home() {
  return (
    <main className="max-w-screen-2xl mx-auto">
      <Banner />
      {/* @ts-ignore */}
      <ProductFeed />
      <Footer />
    </main>
  );
}
