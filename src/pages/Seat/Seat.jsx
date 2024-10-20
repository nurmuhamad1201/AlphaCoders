import React from 'react'
import img from "../../assets/img/Seat Selection.webp"

const Seat = () => {
  return (
    <div>

   <div>
    <img className='w-full' src={img} alt="" />
   </div>

   <div className='mt-[50px] ml-[100px] text-[grey]'>
    <h1 className='text-[30px]'>Choose your seat, feel good throughout your journey</h1>
    <p className='mt-[20px]'>Regardless of how high above the ground you are, a special experience is what you deserve. Large seats, personal monitors, battery charging facilities and more awaits the <br /> Economy Class passengers in long distance flights.</p>
   </div>



    </div>
  )
}

export default Seat