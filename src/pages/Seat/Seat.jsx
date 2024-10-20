import React from 'react'
import img from "../../assets/img/Seat Selection.webp"
import img1 from "../../assets/img/1400-400.avif"
import img2 from "../../assets/img/plain.avif"
import img3 from "../../assets/img/place.avif"
import img4 from "../../assets/img/info.png"
import img5 from "../../assets/img/place2.avif"
import img6 from "../../assets/img/Information about seat.avif"

const Seat = () => {
  return (
    <div>

   <div>
    <img className='w-full' src={img} alt="" />
   </div>

   <div className='mt-[50px] ml-[100px] text-[grey]'>
    <h1 className='text-[30px]'>Choose your seat, feel good throughout your journey</h1>
    <p className='mt-[20px] pb-[30px]'>Regardless of how high above the ground you are, a special experience is what you deserve. Large seats, personal monitors, battery charging facilities and more awaits the <br /> Economy Class passengers in long distance flights.</p>
   </div>
   <div className='flex justify-center mt-[50px] pb-[30px]'>
    <img className='w-[1150px] ' src={img1} alt="" />
   </div>


   <div className='flex justify-center gap-[50px] items-center mt-[100px]'>

    <div>
      <h1 className='text-[30px]'>Extra legroom seats, a more comfortable flight <br /> experience</h1>
      <p className='mt-[20px]'>If you would like larger movement space during a flight, seats with extra knee <br /> room are just right for you.</p>
    </div>

    <div>
      <img src={img2} alt="" />
    </div>
   </div>

   <div className='flex justify-center gap-[50px] items-center mt-[100px]'>

   <div>
  <img src={img3} alt="" />
</div>

<div>
  <h1 className='text-[30px]'>A calm journey with your baby</h1>
  <p className='mt-[20px]'>Seats suitable for use with baby bassinet may ease the sweet load of journey <br />
   with your baby. Do not forget to request help from our staffs at the airport for  <br />
    seats for baby bassinet.</p>
</div>

</div>


<div className='flex justify-center gap-[50px] items-center mt-[50px]'>

<div>
<h1 className='text-[30px]'>Emergency exit seat or any point on the plane</h1>
<p className='mt-[20px]'>If you need extra distance, emergency exit seat may be suitable for you. In <br />
 addition, it only takes a minute to travel in the front side or back side of the plane, <br />
  on the wings or in one of the other seats that you have selected.</p>
</div>

<div>
<img src={img5} alt="" />
</div>


</div>


<div className='flex justify-center gap-[30px] items-center mt-[80px]'>

<div>
    <img className='w-[50px]' src={img4} alt="" />
  </div>
  <div>
    <p>On Tajik Tarvel international and domestic flights, the Business Class seat selection is free of charge until the check-in duration is finished. If a <br />
     passenger who has purchased a seat selection upgrades to Business Class, the seat selection fee is refunded. Payment is made automatically for <br />
      seat selection refunds if the payment made is via online POS from the website, mobile application, the call center and sales offices. If seat <br />
       selection refund is not made automatically, the call center and sales offices can be contacted for information and performing the transaction.</p>
  </div>
</div>

<div className='mt-[100px] text-[grey] pb-[50px]'>
  <div>
  <img src={img6} alt="" />
  </div>
  <div className='absolute mt-[-200px] ml-[800px]'>
    <h1 className='text-[30px]'>Information about seat selection</h1>
    <p className='mt-[10px]'>Make your flight more enjoyable by choosing from our seats designed for a <br />
     comfortable journey. Please click <span className='text-[red]'>here</span> for detailed information about the general <br />
      terms and conditions before you select your seat.</p>
  </div>
</div>


    </div>
  )
}

export default Seat