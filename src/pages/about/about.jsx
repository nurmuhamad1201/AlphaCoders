import React from 'react'

import img from "../../assets/img/photo_2024-10-19 16.33.32.jpeg"
import img1 from "../../assets/img/canun.jpg"
import img2 from "../../assets/img/orlando.jpeg"
import img3 from "../../assets/img/los_angeles.jpeg"
import img4 from "../../assets/img/puerto.jpeg"
import img5 from "../../assets/img/miami.jpeg"


const About = () => {
  console.log("hello");
  
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
<button className='absolute mt-[-120px] ml-[180px] w-[300px] h-[40px] border-[1px] border-[solid] border-[blue] text-[white] rounded-[10px] bg-[blue] shadow-[0px_0px_50px_white]'>Explore Deals in map</button>
</div>

</div>



<div>
  <h1 className='text-[40px] m-[50px]'>
  Trending Destinationss
  </h1>
</div>




<div className='flex px-[30px] py-[30px]'> 
<div className='flex w-[1050px] flex-wrap gap-[10px]'>


<div>
  <img className='w-[450px] h-[350px]' src={img1} alt="" />
  <div className='absolute mt-[-230px] ml-[150px] text-[center] text-[white]'>
    <h1 className='text-[40px]'>Canun</h1>
    <p>Canun Beach</p>
  </div>
</div>


<div>
  <img className='w-[450px] h-[350px]' src={img3} alt="" />
  <div className='absolute mt-[-240px] ml-[150px] text-[center] text-[white]'>
    <h1 className='text-[40px]'>Los Angeles</h1>
    <p className='ml-[50px]'>Downtown</p>
  </div>
</div>

<div>
  <img className='w-[450px] h-[350px]' src={img2} alt="" />
  <div className='absolute mt-[-200px] ml-[150px] text-[center] text-[white]'>
    <h1 className='text-[40px]'>Orlando</h1>
    <p>Orlando Eye</p>
  </div>
</div>


<div>
  <img className='w-[450px] h-[350px]' src={img4} alt="" />
  <div className='absolute mt-[-220px] ml-[130px] text-[center] text-[white]'>
    <h1 className='text-[40px]'>Puerto Valarta</h1>
    <p>Majahuista Beach</p>
  </div>
</div>

</div>

<div>
  <img className='w-[500px] h-[700px]' src={img5} alt="" />
  <div className='absolute mt-[-400px] ml-[200px] text-[center] text-[white]'>
    <h1 className='text-[40px]'>Miami</h1>
    <p>South Beach</p>
  </div>
</div>

</div>


<div>
  <h1 className='text-[40px] m-[50px]'>
  Featured Deals*
  </h1>
</div>


<div>
  <img src="" alt="" />
</div>



    </div>
  )
}

export default About