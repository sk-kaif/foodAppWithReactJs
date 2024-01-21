import React from 'react'
import Navbar from '../components/Navbar'
import CategoryMenu from '../components/CategoryMenu'
import FoodItems from '../components/FoodItems'
import Cart from '../components/Cart'

const Home = () => {
  return (
    <div className='max-w-6xl mx-auto px-3 md:px-2 lg:px-0 b md:w-[90%]'>
      <Navbar />
      <CategoryMenu />
      <FoodItems />
      <Cart />
    </div>
  )
}

export default Home