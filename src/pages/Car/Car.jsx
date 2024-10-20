import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../../assets/img/rent a  car.avif"
import img1 from "../../assets/img/Car1.avif"
import img2 from "../../assets/img/Car2.avif"
import img3 from "../../assets/img/Car3.jpeg"
import img4 from "../../assets/img/Car4.avif"
import img5 from "../../assets/img/Car5.avif"
import img6 from "../../assets/img/Car6.avif"
import img7 from "../../assets/img/Rent.avif"
import img8 from "../../assets/img/Auto.avif"


const Car = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);
 

  return (
    <div>

<div>
  <div>
<img className='w-full' src={img} alt="" />
  </div>
  <div className='absolute mt-[-250px] ml-[400px] text-[white] '>
    <h1 className='text-[40px]'>Rent a car from Avis or Budget – and get <br /> extra Miles and discounts!</h1>
    <button className='border-[1px] border-[solid] border-[red] bg-[red] text-[white] rounded-[8px] w-[100px] h-[35px] ml-[300px] mt-[20px]'>Rent a car</button>
  </div>
</div>

<div className='mt-[50px] pb-[50px] ml-[200px]'>
  <p className='text-[20px]'>Explore new routes while enjoying Miles&Smiles car rental privileges. Miles&Smiles members can get thousands of extra <br />
   Miles and 35% discount when renting a car from Avis or Budget. For a more enjoyable journey with your loved ones, you <br />
    can review the most suitable car rental options of Avis and Budget according to the space and comfort you will need <br />
     during your journey.</p>
</div>

<div className='text-center mt-[20px] pb-[30px]'>
  <h1 className='text-[40px]'>Miles to be earned with Avis auto rentals</h1>
  <p className='mt-[20px]'>With Miles&Smiles privileges, you can earn thousands of extra Miles by renting an automobile from Avis, depending on the rental duration. <br />
   Avis auto rental services are available at 84 locations in Türkiye and approximately 5,500 locations in 165 countries.</p>
</div>


<div className='w-[100%] flex justify-around pb-[50px] mt-[50px]'>

  <div data-aos="zoom-out-right" className='w-[20%] text-center'>
    <img className='w-[100%]' src={img1} alt="" />
    <h1 className='text-[25px] mt-[20px]'>1,500 Miles for car rentals <br /> between 3 - 6 days</h1>
    <p className='mt-[10px]'>You can earn a total of 1,500 Miles for car rentals
     between 3 and 6 days.</p>
  </div>

  <div className='w-[20%] text-center'>
    <img className='w-[100%]' src={img2} alt="" />
    <h1 className='text-[25px] mt-[20px]'>2,500 Miles for car rentals <br /> between 7 - 9 days</h1>
    <p className='mt-[10px]'>You can earn a total of 2,500 Miles for car rentals between 7 and 9 days.</p>
  </div>

  <div data-aos="zoom-out-left" className='w-[20%] text-center'>
    <img className='w-[100%]' src={img3} alt="" />
    <h1 className='text-[25px] mt-[20px]'>4,000 Miles for car rentals <br /> between 10 or more days</h1>
    <p className='mt-[10px]'>You can earn 4,000 Miles for car rentals of 10 or more days..</p>
  </div>
</div>


<div className='text-center mt-[20px] pb-[30px]'>
  <h1 className='text-[40px]'>Advantages with Budget vehicle rentals</h1>
  <p className='mt-[20px]'>With Miles&Smiles privileges, you can earn thousands of extra Miles for auto rentals from Budget, depending on the vehicle group and <br />
   number of days, and benefit from a 35% discount for rentals within Türkiye. Budget auto rental services are available at 5,462 locations in 134 <br />
   countries and 57 locations in Türkiye.</p>
</div>


<div className='w-[100%] flex justify-around pb-[50px] mt-[50px]'>

  <div data-aos="zoom-out-right" className='w-[20%] text-center'>
    <img className='w-[100%]' src={img4} alt="" />
    <h1 className='text-[25px] mt-[20px]'>1500 Miles for economy <br /> group rental vehicles</h1>
    <p className='mt-[10px]'>You can earn a total of 1,500 Miles for car rentals
     between 3 and 6 days.</p>
  </div>

  <div className='w-[20%] text-center'>
    <img className='w-[100%]' src={img5} alt="" />
    <h1 className='text-[25px] mt-[20px]'>2500 Miles for luxury group rental vehicles</h1>
    <p className='mt-[10px]'>You can earn a total of 2,500 Miles for car rentals between 7 and 9 days.</p>
  </div>

  <div data-aos="zoom-out-left" className='w-[20%] text-center'>
    <img className='w-[100%]' src={img6} alt="" />
    <h1 className='text-[25px] mt-[20px]'>35% discount on domestic rental cars</h1>
    <p className='mt-[10px]'>You can earn 4,000 Miles for car rentals of 10 or more days..</p>
  </div>
</div>



<div className='flex justify-around mt-[100px] pb-[50px]'>
  <div data-aos="zoom-in-left">
    <img src={img7} alt="" />
  </div>
  <div>
    <h1 className='text-[40px] mt-[50px]'>How to rent a car</h1>
    <p className='mt-[20px]'>By renting a vehicle with Avis or Budget, you can enjoy travelling in thousands of <br />
     locations. Just follow the steps below to earn Miles and benefit from discount <br />
     advantages depending on the rental period or vehicle group:
</p> <br />
<p>
.You can complete the relevant form via via this link. <br />
.After selecting your preferred vehicle, you can examine extra products and <br /> services.
.You can choose alternative payment methods during the rental process. <br />
</p>
  </div>
</div>



<div className='flex justify-around mt-[100px] pb-[50px]'>
  <div>
    <h1 className='text-[40px] mt-[50px]'>Advantages of auto rentals</h1>
    <p className='mt-[20px]'>By renting a vehicle with Avis or Budget, you can enjoy travelling in thousands of <br />
     locations. Just follow the steps below to earn Miles and benefit from discount <br />
     advantages depending on the rental period or vehicle group:
</p> <br />
<p>
.You can complete the relevant form via via this link. <br />
.After selecting your preferred vehicle, you can examine extra products and <br /> services.
.You can choose alternative payment methods during the rental process. <br />
</p>
  </div>
  <div data-aos="zoom-in-right">
    <img src={img8} alt="" />
  </div>
</div>

    </div>
  )
}

export default Car