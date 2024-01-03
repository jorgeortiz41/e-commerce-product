import React from "react";
import Image from "next/image";
import { useState } from "react";

function Cart({ cart }) {
  const removeItem = () => {
    console.log("remove item");
  };

  return (
    <div className="absolute top-20 right-12 w-96 h-56 bg-white rounded-md shadow-lg">
      <div className="flex flex-col gap-4">
        <div className="flex justify-start items-center text-sm font-bold border-b-[1px] border-gray-200 p-4 pb-6">
          Cart
        </div>
        <div className="flex flex-row items-center">
          <div className="flex flex-row gap-4 items-center">
            {cart.length > 0 ? (
              <div className="flex flex-col gap-3 px-6">
                {cart.map((item, index) => (
                  <div key={index} className="flex flex-row gap-3 items-center">
                    <div className="relative w-12 h-12">
                      <Image
                        className="rounded-lg"
                        src={item.image}
                        alt="cart"
                        fill
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="text-xs text-gray-500">{item.name}</div>
                      <div className="flex flex-row gap-2">
                        <div className="text-xs text-gray-500">
                          ${item.price}.00 x {item.quantity}
                        </div>
                        <div className="text-xs">${item.totalPrice}.00</div>
                      </div>
                    </div>
                    <div>
                      <button
                        className="flex justify-center w-4"
                        onClick={removeItem}
                      >
                        <Image
                          className=""
                          src="/icon-delete.svg"
                          alt="delete item"
                          width={20}
                          height={20}
                        />
                      </button>
                    </div>
                  </div>
                ))}

                <button className="flex flex-row gap-4 items-center h-14 px-4 justify-self-center rounded-lg bg-orange-400 w-80 justify-center hover:opacity-50">
                  <div className="text-white text-sm">Checkout</div>
                </button>
              </div>
            ) : (
              <div className="flex text-sm text-gray-500 justify-center">
                Your cart is empty
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
