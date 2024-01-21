import { useState,useEffect } from "react"
import FoodData from "./../data/FoodData";
import { useDispatch } from "react-redux";
import { selectedUniqueCategory } from "../redux/Slices/CategorySlice";



const CategoryMenu = () => {
  const dispatch = useDispatch()
  const [categories,setCategories] = useState([]);

  const uniqueCategoriesFun=()=>{
    const uniqueCategories = [...new Set(FoodData.map((food)=> food.category))]
    uniqueCategories.push('All')
    setCategories(uniqueCategories)
  }

  useEffect(()=>{
    uniqueCategoriesFun()
  },[])



  return (
    <div className="max-w-6xl mx-auto md:mt-8 mt-4 md:flex md:flex-col justify-center items-center">
      <h1 className="text-center text-lg font-semibold md:text-2xl md:mb-4 mb-2">Grab Your Favourite Meal</h1>
      <div className="mx-5 md:m-0 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden ">
      {
        categories &&
        categories.map((category,index)=>{
          return(
            <button className="bg-green-400 p-1 md:py-2 md:px-4 rounded-sm font-medium" key={index} 
            onClick={()=>dispatch(selectedUniqueCategory(category))} 
            >{category}</button>
          )
        })
      }
      </div>
    </div>
  )
}

export default CategoryMenu