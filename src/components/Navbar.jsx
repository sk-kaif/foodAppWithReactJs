import { useDispatch } from "react-redux"
import { currentSearch } from "../redux/Slices/SearchSlice"

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <div className=''>
      <nav className='py-3'>
        <h1 className='md:text-5xl text-2xl text-center font-bold'><span className="text-green-400">Foooooddy</span> Foods</h1>
      </nav>
      <div className='flex items-center justify-center md:my-4'>
        <input 
          type="text" 
          name="" 
          placeholder='Search... 🔍'
          className="p-2 border border-gray-400 md:text-sm lg:text-xl rounded-lg outline-none w-full lg:w-[50vw]"
          autoComplete='off'
          onChange={(e)=>dispatch(currentSearch(e.target.value))}
        />
      </div>
    </div>
  )
}

export default Navbar