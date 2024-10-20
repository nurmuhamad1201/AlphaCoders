import { useEffect, useState } from 'react';

const Confirmation = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    // Load flight data from localStorage
    const data = JSON.parse(localStorage.getItem('flightData')) || [];
    setFlights(data);
  }, []);

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
      {flights.length > 0 ? (
        flights.map((flight, index) => (
          <div key={index} className="bg-white border border-gray-300 rounded-lg p-6 mb-4 shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Flight {index + 1}</h2>
            <p className="text-gray-800"><strong>City:</strong> {flight.city}</p>
            <p className="text-gray-800"><strong>Time:</strong> {new Date(flight.time).toLocaleString()}</p>
            <p className="text-gray-800"><strong>Total Passengers:</strong> {flight.totalPerson}</p>
            <p className="text-gray-800"><strong>Price per Ticket:</strong> ${flight.priceticket}</p>
            {/* Display the city image from flight data */}
            {flight.imageCity ? (
              <img 
                src={flight.imageCity} 
                alt={flight.city} 
                className="w-full h-auto rounded-md mt-2" 
              />
            ) : (
              <p className="text-gray-800">No image available for this city.</p>
            )}
          </div>
        ))
      ) : (
        <p className="text-gray-800">No flight data available. Please ensure you have created flights and saved them properly.</p>
      )}
    </div>
  );
};

export default Confirmation;
    