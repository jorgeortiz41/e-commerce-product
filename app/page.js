'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [cart, setCart] = useState([])
  const [menu, setMenu] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [image, setImage] = useState('/image-product-1.jpg')
  

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const changeImage = (newImage) => {
    setImage(newImage)
  }

  const addToCart = () => {
    const newItem = {
      image: '/image-product-1.jpg',
      name: 'Fall Limited Edition Sneakers',
      quantity: quantity,
      price: 125.00,
      totalPrice: quantity * 125.00
    };
  
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.name === newItem.name);
      if (existingItem) {
        // If the item already exists in the cart, update the quantity
        return prevCart.map(item =>
          item.name === newItem.name
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      } else {
        // If the item does not exist in the cart, add it
        return [...prevCart, newItem];
      }
    });
  };

  return (
    <div className='flex flex-col mx-24 h-dvh'>
      <nav className='flex flex-row justify-between h-32 border-b-[1px] border-gray-200'>
        <div id="left-nav" className='flex flex-row gap-12'>
          <div id='logo' className='relative w-28'>
            <Image
            className=''
            src="/logo.svg"
            alt="cart"
            fill
            style={{objectFit: "contain"}}
            />
          </div>
        
          <button className='text-gray-500 hover:text-gray-700 text-sm border-b-4 border-transparent hover:border-orange-400'>Collections</button>
          <button className='text-gray-500 hover:text-gray-700 text-sm border-b-4 border-transparent hover:border-orange-400'>Men</button>
          <button className='text-gray-500 hover:text-gray-700 text-sm border-b-4 border-transparent hover:border-orange-400'>Women</button>
          <button className='text-gray-500 hover:text-gray-700 text-sm border-b-4 border-transparent hover:border-orange-400'>About</button>
          <button className='text-gray-500 hover:text-gray-700 text-sm border-b-4 border-transparent hover:border-orange-400'>Contact</button>
        </div>

        <div id="right-nav" className='flex flex-row gap-12 items-center'>
          <button id='nav-cart' className='relative w-12 h-12'>
            {cart.length > 0 && (
              <span className=" absolute top-0 right-4 z-10 inline-flex items-center rounded-lg bg-orange-400 px-1 py-0.5 text-xs font-medium text-white">{cart[0].quantity}</span>
            )}
            <Image
              className='z-5'
              src="/icon-cart.svg"
              alt="cart"
              height={24}
              width={24}
            />
          </button>
          <button id='nav-avatar' className='relative rounded-full w-12 h-12 hover:ring-2 ring-orange-400'>
            <Image
            className='rounded-full'
            src="/image-avatar.png"
            alt="Picture of sneakers"
            fill
            />
          </button>
        </div>
        
      </nav>

      <main id='content' className='flex md:flex-row flex-col p-12 gap-16 h-dvh'>

        <div id="images" className='flex flex-col gap-8 w-2/4'>
          <div id="main-image" className='h-3/4 relative'>
            <Image
            className='rounded-xl'
              src={image}
              alt="Picture of sneakers"
              fill 
            />
          </div>

          <div id="thumbnails" className='flex flex-row gap-4 justify-between h-1/4'>
            <button id='thumb-1' className='rounded-lg relative w-1/4 h-2/3 focus:ring-2 ring-orange-400 outline-none' onClick={() => changeImage('/image-product-1.jpg')} autoFocus>
              <Image
              className={`rounded-lg ${image === '/image-product-1.jpg' ? 'opacity-25' : ''} hover:opacity-25`}
              src="/image-product-1-thumbnail.jpg"
              alt="Picture of sneakers"
              fill
              />
            </button>
            <button id='thumb-2' className='rounded-lg relative w-1/4 h-2/3 focus:ring-2 ring-orange-400' onClick={() => changeImage('/image-product-2.jpg')}>
              <Image
              className={`rounded-lg ${image === '/image-product-2.jpg' ? 'opacity-25' : ''} hover:opacity-25`}
              src="/image-product-2-thumbnail.jpg"
              alt="Picture of sneakers"
              fill
              />
            </button>
            <button id='thumb-3' className='rounded-lg relative w-1/4 h-2/3 focus:ring-2 ring-orange-400' onClick={() => changeImage('/image-product-3.jpg')}>
              <Image
              className={`rounded-lg ${image === '/image-product-3.jpg' ? 'opacity-25' : ''} hover:opacity-25`}
              src="/image-product-3-thumbnail.jpg"
              alt="Picture of sneakers"
              fill
              />
            </button>
            <button id='thumb-4' className='rounded-lg relative w-1/4 h-2/3 focus:ring-2 ring-orange-400' onClick={() => changeImage('/image-product-4.jpg')}>
              <Image
              className={`rounded-lg ${image === '/image-product-4.jpg' ? 'opacity-25' : ''} hover:opacity-25`}
              src="/image-product-4-thumbnail.jpg"
              alt="Picture of sneakers"
              fill
              />
            </button>
          </div>
        </div>

        <div id="details" className='flex flex-col gap-4 justify-center w-2/4 '>
          <h2 className='text-orange-400'>Sneaker Company</h2>
          <h3 id='product-name' className='text-4xl font-bold'>Fall Limited Edition Sneakers</h3>
          <p className='text-sm text-gray-500 mt-8'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they&apos;ll withstand everything the weather can offer.</p>
          <div id='price' className='flex flex-row gap-4 text-2xl font-bold items-center mt-8'>
            $125.00
            <div className='flex text-orange-400 text-base bg-orange-50 px-2 rounded-md items-center'>
              50%
            </div>
          </div>
          <p className='text-sm text-gray-400 line-through'>$250.00</p>

          <div className='flex flex-row gap-8 items-center'>
            <div className='flex flex-row gap-8 items-center h-14 rounded-md bg-gray-100 py-2 shadow-md'>
              <button className='flex w-12 justify-center' onClick={decrementQuantity}>
                <Image
                className='hover:opacity-50'
                src="/icon-minus.svg"
                alt="Picture of sneakers"
                width={20}
                height={20}
                />
              </button>
              <div className=''>{quantity}</div>
              <button className='flex justify-center w-12' onClick={incrementQuantity}>
                <Image
                className='hover:opacity-50'
                src="/icon-plus.svg"
                alt="Picture of sneakers"
                width={20}
                height={20}
                />
              </button>
            </div>

            <button className='flex flex-row gap-4 items-center h-14 px-4 rounded-md bg-orange-400 w-80 justify-center shadow-lg shadow-orange-400/50 hover:opacity-50' onClick={addToCart}>
                <Image
                className=''
                src="/icon-cart-white.svg"
                alt="Picture of sneakers"
                width={20}
                height={20}
                />
              <div className='text-white text-sm'>Add to cart</div>
            </button>
          </div>
        </div>

      </main>
    </div>
  )
}
