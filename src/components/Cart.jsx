  import React, { useState } from 'react'
  import {IoMdClose} from 'react-icons/io'
  import {FaCartShopping} from 'react-icons/fa6'
  import ItemCard from './ItemCard'
  import { useSelector } from 'react-redux'
  import { useNavigate } from 'react-router-dom'
  import { useDispatch } from 'react-redux'
  import { clearCart } from '../redux/Slices/CartSlice'
  

  const Cart = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [toggle, setToggle] = useState(false)


    const {cart} = useSelector((state) => state.cart );
    const totalQty = cart.reduce((acc,curr)=> acc + curr.qty,0);
    const totalPrice = cart.reduce((acc,curr) => acc + curr.qty * curr.price ,0 )


    return (
      <>
      <div className={` ${toggle ? 'translate-x-0' : 'translate-x-full' } bg-green-300 fixed right-0 top-0 w-full overscroll-contain  p-4 h-full lg:w-[25vw] md:w-[35vw] `}>
        <div className='flex justify-between items-center my-3'>
          <h1 className='font-semibold text-2xl'>My Order</h1>
          <IoMdClose className={`border-2 border-gray-500 text-lg cursor-pointer`} onClick={()=>setToggle(!toggle)}/>
        </div>


        {/* CartItem Done Here */}
        { cart.length > 0 ?
          cart.map((cart)=> <ItemCard  {...cart} key={cart.id} /> ) :
          <h2>Your Cart is Empty</h2>
        }

        <div className="absolute bottom-0">
          <h3 className="font-semibold text-black ">Items : {totalQty}</h3>
          <h3 className="font-semibold text-black">Total Amount : <span className='font-bold'>$ {totalPrice}.</span></h3>
          <hr className="w-[90vw] lg:w-[18vw] md:w-[25vw] my-2 " />
          <button className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw] md:w-[25vw] mb-5"
          onClick={()=>{navigate('/success')}}
          >
            Checkout
          </button>
        </div>
      </div>

      <FaCartShopping className={` ${toggle ? 'display: none': null} ${totalQty > 0 ? 'animate-bounce delay-500 transition-all' : null } rounded-lg text-4xl  p-3 fixed bottom-7 bg-green-500 right-[10vw]`} onClick={()=>setToggle(!toggle)}/>
      </>
    )
  }

  export default Cart