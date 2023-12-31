import React from 'react'
import Image from 'next/image'

function Nav({cart}) {
    const [showCart, setShowCart] = React.useState(false)

    const toggleCart = () => {
        setShowCart(!showCart)
    }


  return (
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
      <button id='nav-cart' className='relative w-12 h-12' onClick={toggleCart}>
        {cart.length > 0 && (
          <span className=" absolute top-0 right-4 z-10 inline-flex items-center rounded-lg bg-orange-400 px-1 py-0.5 text-xs font-medium text-white">{cart[0].quantity}</span>
        )}
        {showCart && (
          <div className='absolute top-12 right-0 w-80 h-64 bg-white rounded-md shadow-lg'>
            <div className='flex flex-col gap-4'>
              <div className='flex justify-start items-center text-sm font-bold border-b-[1px] border-gray-200 p-4 pb-6'>
                Cart
              </div>
              <div className='flex flex-row justify-center items-center'>
                <div className='flex flex-row gap-4 items-center'>
                  {cart.length > 0 ? 
                  <div className='flex flex-col p-4'>
                    {cart.map((item, index) => (
                      <div key={index} className='flex flex-row gap-2 p-4 items-center'>
                        <div className='relative w-12 h-12'>
                          <Image
                          className='rounded-lg'
                          src={item.image}
                          alt="cart"
                          fill
                          />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <div className='text-xs text-gray-500'>{item.name}</div>
                            <div className='flex flex-row gap-2'>
                            <div className='text-xs text-gray-500'>${item.price}.00 x {item.quantity}</div>
                            <div className='text-xs'>${item.totalPrice}.00</div>
                        </div>
                        </div>
                      </div>
                    ))}

                    <button className='flex flex-row gap-4 items-center h-14 px-4 rounded-md bg-orange-400 w-80 justify-center hover:opacity-50'>
                        <div className='text-white text-sm'>Checkout</div>
                    </button>
                  </div>

                  :<div className='flex text-sm text-gray-500 justify-center'>Your cart is empty</div>}
                </div>
              </div>
            </div>
          </div>
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
  )
}

export default Nav