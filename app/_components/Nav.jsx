import React from "react";
import Image from "next/image";
import Cart from "./Cart";

function Nav({ cart }) {
  const [showCart, setShowCart] = React.useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const removeItem = () => {
    console.log("remove item");
  };

  return (
    <nav className="flex flex-row justify-between h-32 border-b-[1px] border-gray-200">
      <div id="left-nav" className="flex flex-row gap-12">
        <div id="logo" className="relative w-28">
          <Image
            className=""
            src="/logo.svg"
            alt="cart"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>

        <button className="text-gray-500 hover:text-gray-700 text-sm border-b-4 border-transparent hover:border-orange-400">
          Collections
        </button>
        <button className="text-gray-500 hover:text-gray-700 text-sm border-b-4 border-transparent hover:border-orange-400">
          Men
        </button>
        <button className="text-gray-500 hover:text-gray-700 text-sm border-b-4 border-transparent hover:border-orange-400">
          Women
        </button>
        <button className="text-gray-500 hover:text-gray-700 text-sm border-b-4 border-transparent hover:border-orange-400">
          About
        </button>
        <button className="text-gray-500 hover:text-gray-700 text-sm border-b-4 border-transparent hover:border-orange-400">
          Contact
        </button>
      </div>

      <div id="right-nav" className="flex flex-row gap-12 items-center">
        <button
          id="nav-cart"
          className="relative w-12 h-12"
          onClick={toggleCart}
        >
          {cart.length > 0 && (
            <span className=" absolute top-0 right-4 z-10 inline-flex items-center rounded-lg bg-orange-400 px-1 py-0.5 text-xs font-medium text-white">
              {cart[0].quantity}
            </span>
          )}
          <Image
            className="z-5"
            src="/icon-cart.svg"
            alt="cart"
            height={24}
            width={24}
          />
        </button>
        {showCart && <Cart cart={cart} />}
        <button
          id="nav-avatar"
          className="relative rounded-full w-12 h-12 hover:ring-2 ring-orange-400"
        >
          <Image
            className="rounded-full"
            src="/image-avatar.png"
            alt="Picture of sneakers"
            fill
          />
        </button>
      </div>
    </nav>
  );
}

export default Nav;
