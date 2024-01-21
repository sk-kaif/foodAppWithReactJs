import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PropagateLoader } from 'react-spinners'

const Success = () => {
  const navigate = useNavigate()
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[])
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
    {
      loading ?
      <PropagateLoader color='#36d7b7' /> :
      <div>
        <h2 className='text-2xl font-semibold'>Order Successful !!</h2>
        <p>Your order has been successfully placed</p>
      </div>
    }
    </div>
  )
}

export default Success