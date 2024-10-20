import React from 'react'
import img from "../../assets/img/baggage2.webp"
import img1 from "../../assets/img/allow.jpeg"
import img2 from "../../assets/img/bag.avif"
import img3 from "../../assets/logo/tajiTravel2.jpg"
import img4 from "../../assets/img/info.png"

const Baggage = () => {
  return (
    <div>

<div>
<div>
  <img className='w-full h-[500px]' src={img} alt="" />
</div>
<div className='absolute mt-[-300px] text-[white] ml-[200px]'>
  <h1 className='text-[40px]'>Extra baggage and Overweight baggage</h1>
  <p className='mt-[20px]'>Make your trip easier with extra baggage or overweight baggage options. You can purchase extra baggage allowance, or raise your <br /> current 23 kg baggage allowance to 32 kg by adding up to 9 kg.</p>
</div>

<div className='absolute mt-[-130px] h-[150px] bg-[white] w-[1000px] items-center ml-[200px]'>

<div className='flex gap-[30px] mt-[20px] ml-[40px]'>
<div className='radio flex gap-[10px]'>
<div>
  <input type="radio" />
</div>
<div>
  <p> Extra baggage</p>
</div>
</div>
<div className='radio flex gap-[10px]'>
<div>
  <input type="radio" />
</div>
<div>
  <p>Overweight baggage</p>
</div>
</div>


</div>
<div className='flex gap-[10px] mt-[30px] ml-[40px]'>
<input className='w-[300px] h-[70px] border-[1px] border-[grey]' type="text" placeholder='  Ticket numer or reservation (PNR)'/>
<input className='w-[300px] h-[70px] border-[1px] border-[grey]' type="text" placeholder='  Passenger surname'/>
<button className='w-[300px] h-[70px] border-[1px] border-[red] bg-[red] text-[white]'>Search</button>
</div>
</div>


</div>

<div className='w-[100%] flex justify-around mt-[100px] ml-[30px]'>

<div className='w-[28%]'>
  <img className='ml-[20px]' src={img1} alt="" />
  <h1 className='text-[45px]'>Extra baggage</h1>
  <p>If you have more items than your checked baggage allowance, you can save time by purchasing extra baggage allowance online and you can set off with peace of mind.</p>
</div>

<div className='w-[28%]'>
  <img className='ml-[20px]' src={img2} alt="" />
  <h1 className='text-[45px]'>Overweight baggage</h1>
  <p>If you have more items than your checked baggage allowance, you can save time by purchasing extra baggage allowance online and you can set off with peace of mind.</p>
</div>

<div className='w-[28%]'>
  <img className='ml-[20px] w-[67%] rounded-[50%]' src={img3} alt="" />
  <h1 className='text-[45px]'>Ease of online</h1>
  <p>If you have more items than your checked baggage allowance, you can save time by purchasing extra baggage allowance online and you can set off with peace of mind.</p>
</div>


</div>

<div className='flex justify-center gap-[30px] items-center mt-[80px] pb-[50px]'>

<div>
    <img className='w-[50px]' src={img4} alt="" />
  </div>
  <div>
    <p>Click <span className='text-[red]'>here</span> to view more detailed information on the general excess baggage conditions.</p>
  </div>
</div>


    </div>
  )
}

export default Baggage