import Image from "next/image";
import {
  Bars4Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

function Header() {
  return (
    <header>
      {/* Top nav */}
      <div className="flex items-center p-1 py-2 flex-grow bg-amazon_blue">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://aleph-m-2.s3.amazonaws.com/hui_logo.png"
            width={90}
            height={45}
            // objectFit="contain"
            style={{ objectFit: "contain" }}
            alt="logo"
            className="cursor-pointer"
          />
        </div>
        {/* Search  */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-[#00A8BD]">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
          />
          <MagnifyingGlassIcon className="h-12 p-4" />
        </div>

        {/* Right  */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>Hello, Roberto Delgado</p>
            <p className="md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p className="md:text-sm">Rentals</p>
          </div>
          <div className="relative link flex items-center">
            <span className="absolute top-0 right-0 md:right-6 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline mt-2">Cart</p>
          </div>
        </div>
      </div>
      {/* Bottom nav */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <Bars4Icon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Pricing</p>
        <p className="link">Book a Car</p>
        <p className="link">Locations</p>
        <p className="link hidden lg:inline-flex">FAQ</p>
        <p className="link hidden lg:inline-flex">Help Center</p>
        <p className="link hidden lg:inline-flex">Guides</p>
        <p className="link hidden lg:inline-flex">Contact Us</p>
        <p className="link hidden lg:inline-flex">Station Partnerships</p>
        <p className="link hidden lg:inline-flex"></p>
      </div>
      <div></div>
    </header>
  );
}

export default Header;
