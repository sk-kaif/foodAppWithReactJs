import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { IoMdPeople } from 'react-icons/io'
import { MdDelete } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { removeToCart,decreQty,increQty } from '../redux/Slices/CartSlice'
import toast from 'react-hot-toast'

const ItemCard = ({id,img,price,name,qty}) => {
  const dispatch = useDispatch();

  
  return (
    <div className="flex gap-3 bg-teal-50 shadow-md rounded-lg p-2 mb-3 overscroll-y-auto">
      <MdDelete onClick={()=> {dispatch(removeToCart({id})) , toast(`${name} Removed !`) } } 
        className="absolute text-xl right-7 text-gray-600 cursor-pointer" 
      />
      <img src={img} className="w-[50px] h-[50px]" />
      <div className='leading-5'>
        <h2 className='font-medium '>{name}</h2>
        <div className='flex justify-between mt-4 '>
          <span>${price}</span>
          <div className="flex justify-center items-center gap-2 absolute right-7 ">
            <AiOutlinePlus onClick={()=>dispatch(increQty({id}))} className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer" />
            <span>{qty}</span>
            <AiOutlineMinus onClick={()=> qty > 1 ? dispatch(decreQty({id})) : qty = 0} className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCard