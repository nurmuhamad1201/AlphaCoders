import React from 'react'
import img from "../../assets/logo//photo_2024-10-19 16.33.32.jpeg"

const About = () => {
  return (
    <div>

<div className='flex justify-between px-[50px] py-[30px] items-center'>
  <h1 className='text-[40px]'>Round Trip Deals from <span className='text-[40px] text-[green]'>Dushanbe*</span></h1>
  <button className='w-[130px] h-[40px] rounded-[8px] border-[2px] border-[solid] border-[blue] shadow-[0px_0px_20px_blue] text-[blue] '>See All</button>
</div>

<div className='flex items-center'>

<div className='px-[50px] py-[50px] bg-[white]'>

<div>
<div className='flex border-[1px] borde-[solid] border-[black] rounded-[5px] mb-[20px]'>
  <div className='w-[300px] '> 
    <img className='rounded-[5px]' src="//c.fareportal.com/gcms/portals/2/images/destinations/TAS-rx.jpg" class="lazy" width="100%" height="100%"/></div>
 <div>

  <div className='ml-[40px]'>
  <h1 className='text-[35px] mt-[10px]'>Tashkent</h1>
  <p>DYU-TAS</p>
 <p> Jan 7 - Jan 8</p>
 <div className='flex'>
 <p className='ml-[250px]'>form</p>
 <p className='text-[green] text-[28px] ml-[30px] items-center'>$150</p>
 </div>
  </div>
 
 </div>
</div>
</div>


<div>
<div className='flex border-[1px] borde-[solid] border-[black] rounded-[5px] mb-[20px]'>
  <div> 
  <img src="//c.fareportal.com/gcms/portals/2/images/destinations/IST-rx.jpg" class="lazy" width="100%" height="100%"/>
  </div>
 <div>

  <div className='ml-[40px]'>
  <h1 className='text-[35px] mt-[10px]'>Istanbul</h1>
  <p>DYU-IST</p>
 <p> Dec 8 - Dec 12</p>
 <div className='flex'>
 <p className='ml-[250px]'>form</p>
 <p className='text-[green] text-[28px] ml-[30px] items-center'>$275</p>
 </div>
  </div>
 
 </div>
</div>
</div>

<div>
<div className='flex border-[1px] borde-[solid] border-[black] rounded-[5px] mb-[20px]'>
  <div> 
   <img src="//c.fareportal.com/gcms/portals/2/images/destinations/BER-rx.jpg" class="lazy" width="100%" height="100%" /></div>
 <div>

  <div className='ml-[40px]'>
  <h1 className='text-[35px] mt-[10px]'>Berlin</h1>
  <p>DYU-BER</p>
 <p> Nov 23 - Nov 27</p>
 <div className='flex'>
 <p className='ml-[230px]'>form</p>
 <p className='text-[green] text-[28px] ml-[30px] items-center'>$655</p>
 </div>
  </div>
 
 </div>
</div>
</div>
  
</div>


<div>
<img className='h-[550px] px-[20px] rounded-[10px]' src={img} alt="" />
<button className='absolute mt-[-120px] ml-[180px] w-[300px] h-[40px] border-[1px] border-[solid] border-[blue] text-[white] rounded-[5px] bg-[blue] shadow-[0px_0px_50px_white]'>Explore Deals in map</button>
</div>

</div>



<div>
  <h1 className='text-[40px] '>
  Trending Destinationss
  </h1>
</div>

    </div>
  )
}

export default About