'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [cart, setCart] = useState(false)
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
        
          <button className='text-gray-500 text-sm'>Collections</button>
          <button className='text-gray-500 text-sm'>Men</button>
          <button className='text-gray-500 text-sm'>Women</button>
          <button className='text-gray-500 text-sm'>About</button>
          <button className='text-gray-500 text-sm'>Contact</button>
        </div>

        <div id="right-nav" className='flex flex-row gap-12 items-center'>
          <button id='nav-cart' className='relative w-6 h-6'>
            <Image
              className=''
              src="/icon-cart.svg"
              alt="cart"
              fill
            />
          </button>
          <button id='nav-cart' className='relative rounded-full w-12 h-12 hover:ring-2 ring-orange-400'>
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
              className={`rounded-lg ${image === '/image-product-1.jpg' ? 'opacity-25' : ''}`}
              src="/image-product-1-thumbnail.jpg"
              alt="Picture of sneakers"
              fill
              />
            </button>
            <button id='thumb-2' className='rounded-lg relative w-1/4 h-2/3 focus:ring-2 ring-orange-400' onClick={() => changeImage('/image-product-2.jpg')}>
              <Image
              className={`rounded-lg ${image === '/image-product-2.jpg' ? 'opacity-25' : ''}`}
              src="/image-product-2-thumbnail.jpg"
              alt="Picture of sneakers"
              fill
              />
            </button>
            <button id='thumb-3' className='rounded-lg relative w-1/4 h-2/3 focus:ring-2 ring-orange-400' onClick={() => changeImage('/image-product-3.jpg')}>
              <Image
              className={`rounded-lg ${image === '/image-product-3.jpg' ? 'opacity-25' : ''}`}
              src="/image-product-3-thumbnail.jpg"
              alt="Picture of sneakers"
              fill
              />
            </button>
            <button id='thumb-4' className='rounded-lg relative w-1/4 h-2/3 focus:ring-2 ring-orange-400' onClick={() => changeImage('/image-product-4.jpg')}>
              <Image
              className={`rounded-lg ${image === '/image-product-4.jpg' ? 'opacity-25' : ''}`}
              src="/image-product-4-thumbnail.jpg"
              alt="Picture of sneakers"
              fill
              />
            </button>
          </div>
        </div>

        <div id="details" className='flex flex-col gap-4 justify-center w-2/4 '>
          <h2 className='text-orange-400'>Sneaker Company</h2>
          <h3 className='text-4xl font-bold'>Fall Limited Edition Sneakers</h3>
          <p className='text-sm text-gray-500 mt-8'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they&apos;ll withstand everything the weather can offer.</p>
          <div className='flex flex-row gap-4 text-2xl font-bold items-center mt-8'>
            $125.00
            <div className='flex text-orange-400 text-base bg-orange-50 px-2 rounded-md items-center'>
              50%
            </div>
          </div>
          <p className='text-sm text-gray-400 line-through'>$250.00</p>

          <div className='flex flex-row gap-8 items-center'>
            <div className='flex flex-row gap-8 items-center h-14 rounded-md bg-gray-100 py-2'>
              <button className='flex w-12 justify-center' onClick={decrementQuantity}>
                <Image
                className=''
                src="/icon-minus.svg"
                alt="Picture of sneakers"
                width={20}
                height={20}
                />
              </button>
              <div className=''>{quantity}</div>
              <button className='flex justify-center w-12' onClick={incrementQuantity}>
                <Image
                className=''
                src="/icon-plus.svg"
                alt="Picture of sneakers"
                width={20}
                height={20}
                />
              </button>
            </div>

            <div className='flex flex-row gap-4 items-center h-14 px-4 rounded-md bg-orange-400 w-80 justify-center'>
                <Image
                className=''
                src="/icon-cart-white.svg"
                alt="Picture of sneakers"
                width={20}
                height={20}
                />
              <div className='text-white text-sm'>Add to cart</div>
            </div>
          </div>
        </div>

      </main>
    </div>
  )
}
