import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/Slices/CartSlice'

const FoodCard =({ id, name, price, desc, img, rating, handleToast }) => {
  const dispatch = useDispatch()
  return (
    <div className="font-bold w-[250px] border-cyan-700 border-[1px] bg-white p-2 py-4 flex flex-col rounded-lg gap-2 hover:shadow-md hover:scale-110 cursor-grab transition-all duration-500 ease-in-out">
      <img
        src={img}
        className="w-auto h-[130px]"
      />
      <div className="text-sm flex justify-between">
        <h2>{name}</h2>
        <span className="text-green-400">₹{price}</span>
      </div>
      <p className="text-sm font-normal">{desc.slice(0, 50)}...</p>
      <div className="flex justify-between ">
        <span className="flex justify-center items-center">
          <AiFillStar className="mr-1 text-yellow-400" /> {rating}
        </span>
        <button className="px-4 py-2 bg-green-400 text-black hover:bg-green-500 rounded-lg text-sm"
        onClick={()=> {
          dispatch(addToCart({id,img,price,name,rating,qty:1}));
          handleToast(name)
          } }
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default FoodCard