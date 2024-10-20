import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import gold from '../assets/img/gold.webp'
import fivestar from '../assets/img/fivestar.webp'
import world from '../assets/img/world.webp'
import stcc from '../assets/img/ctsc.webp'
import apex from '../assets/img/apex.webp'



export const Swiperss = () => {
  return (
    <div className="text-center py-10">
      <h1 className="text-2xl font-light">
        See our best offers from{" "}
        <span className="text-red-600">Dushanbe Airport</span>{" "}
        <i className="fas fa-caret-down"></i>
      </h1>
      <h2 className="text-xl font-light mt-4">
        To the new cities with special deals!
      </h2>
      <a href="#" className="text-red-600 mt-2 inline-block">
        Show all campaigns <i className="fas fa-angle-right"></i>
      </a>

      <div className="flex justify-center items-center mt-10">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            1500: { slidesPerView: 3 },
            950: { slidesPerView: 2 },
            765: { slidesPerView: 1 },
            420: { slidesPerView: 1 },
          }}
          className="w-full"
        >
          <SwiperSlide className="text-center">
            <img
              src="https://www.turkishairlines.com/_next/image?url=https%3A%2F%2Fcdn.turkishairlines.com%2Fm%2F3c8b16b97a65aa52%2Foriginal%2Fmelbourne_270x150jpg.jpg&w=384&q=75"
              alt="Travel from Africa at advantageous fares"
              className="mx-auto"
            />
            <h3 className="font-semibold mt-4">
              Travel from Africa at advantageous fares!
            </h3>
            <p className="text-sm mt-2">
              Purchase tickets between September 13 and December 15, 2024 and
              save money on your trip around the world.
            </p>
            <a href="#" className="text-red-600 mt-2 inline-block">
              Book now <i className="fas fa-angle-right"></i>
            </a>
          </SwiperSlide>

          <SwiperSlide className="text-center">
            <img
              src="https://www.turkishairlines.com/_next/image?url=https%3A%2F%2Fcdn.turkishairlines.com%2Fm%2F309a7d4b6a68afa4%2Foriginal%2F270x150-1.png&w=384&q=75"
              alt="Explore best flight deals on our most popular routes"
              className="mx-auto"
            />
            <h3 className="font-semibold mt-4">
              Explore best flight deals on our most popular routes!
            </h3>
            <p className="text-sm mt-2">
              Book your flight now with advantageous fares.
            </p>
            <a href="#" className="text-red-600 mt-2 inline-block">
              Learn more <i className="fas fa-angle-right"></i>
            </a>
          </SwiperSlide>

          <SwiperSlide className="text-center">
            <img
              src="https://www.turkishairlines.com/_next/image?url=https%3A%2F%2Fcdn.turkishairlines.com%2Fm%2F6e98c34773c74b13%2Foriginal%2FTurkish-Airlines-Campaign-Africa-Sales-Fest_270x150.webp&w=384&q=75"
              alt="Fly to Australia with the Turkish Airlines privileges"
              className="mx-auto"
            />
            <h3 className="font-semibold mt-4">
              Fly to Australia with the Turkish Airlines privileges
            </h3>
            <p className="text-sm mt-2">
              Our journey to Australia has begun. Book your flight now on our
              website or app to explore this unique continent.
            </p>
            <a href="#" className="text-red-600 mt-2 inline-block">
              Discover <i className="fas fa-angle-right"></i>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="flex justify-center items-center mt-10 space-x-4">
        <img
          src={gold}
          alt="World Class 2024"
          className="h-16"
        />
        <img
          src={fivestar}
          alt="Five Star Global Airline 2023"
          className="h-16"
        />
        <img
          src={apex}
          alt="Best Airline in Europe"
          className="h-16"
        />
        <img
          src={stcc}
          alt="Best Business Class Catering"
          className="h-16"
        />
        <img
          src={world}
          alt="Best Inflight Entertainment System in Europe"
          className="h-16"
        />
      </div>
    </div>
  );
};
