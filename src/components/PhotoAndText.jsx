const PhotoAndText = ({ image }) => {
    return (
      <div className="flex flex-col text-black items-center justify-center min-h-screen bg-white p-5">
        <h1 className="text-3xl font-light mb-8 text-center">
          Accommodation advantages with Booking.com and Jolly
        </h1>
        <div className="flex md:flex-col flex-row gap-10 items-center justify-center">
          <div className="w-full md:w-1/3 mb-6">
            <img
              src={image}
              alt="beach"
              className="rounded-full w-full object-cover shadow-lg"
            />
          </div>
          <div className="w-full">
            <h2 className="text-xl font-bold mb-4 text-center md:text-left">
              Accommodation advantages with Booking.com
            </h2>
            <ul className="list-disc pl-5 text-black space-y-2">
              <li>Earn 2 Miles for every 1 EUR you spend on your accommodation booking.</li>
              <li>Take advantage of up to a 20% Genius discount on accommodation.</li>
              <li>Make your reservation with flexible cancellation and refund options.</li>
              <li>Use the pay now, pay on site, and prepaid property options.</li>
              <li>Get a refund if you find a lower price on a website other than Booking.com.</li>
            </ul>
            <p className="text-red-500 mt-4 text-center">
              * Guests in Türkiye can only book international properties through Booking.com.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default PhotoAndText;
  