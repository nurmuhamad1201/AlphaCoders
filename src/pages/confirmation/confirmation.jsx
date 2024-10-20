import { useEffect, useState } from 'react';

const Confirmation = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    // Load flight data from localStorage
    const data = JSON.parse(localStorage.getItem('flightData')) || [];
    setFlights(data);
  }, []);

  return (
    <div className=" grid grid-cols-1 items-center p-4 bg-gray-100  ">
      {flights.length > 0 ? (
        flights.map((flight, index) => (
          <div key={index} className="bg-white border border-gray-300 rounded-lg p-6 mb-4 shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Flight {index + 1}</h2>
            <p className="text-gray-800"><strong>City:</strong> {flight.city}</p>
            <p className="text-gray-800"><strong>Time:</strong> {new Date(flight.time).toLocaleString()}</p>
            <p className="text-gray-800"><strong>Total Passengers:</strong> {flight.totalPerson}</p>
            <p className="text-gray-800"><strong>Price per Ticket:</strong> ${flight.priceticket}</p>
            
            
          </div>
        ))
      ) : (
        <p className="text-gray-800">No flight data available. Please ensure you have created flights and saved them properly.</p>
      )}
    </div>
  );
};

export default Confirmation;
    