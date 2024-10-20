import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Confirmation = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Load flight data from localStorage
    const data = JSON.parse(localStorage.getItem('flightData')) || [];
    setFlights(data);
  }, []);

  const handleDelete = (indexToRemove) => {
    setLoading(true);
    
    // Simulate a 2-second delay before deleting
    setTimeout(() => {
      const updatedFlights = flights.filter((_, index) => index !== indexToRemove);
      setFlights(updatedFlights);
      // Update localStorage
      localStorage.setItem('flightData', JSON.stringify(updatedFlights));
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-1 m-auto items-center px-16 bg-gray-100">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
        </div>
      ) : flights.length > 0 ? (
        flights.map((flight, index) => (
          <div key={index} className="relative bg-white border border-gray-300 rounded-lg p-6 mb-4 shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Flight {index + 1}</h2>
            <p className="text-gray-800"><strong>City:</strong> {flight.city}</p>
            <p className="text-gray-800"><strong>Time:</strong> {new Date(flight.time).toLocaleString()}</p>
            <p className="text-gray-800"><strong>Total Passengers:</strong> {flight.totalPerson}</p>
            <p className="text-gray-800"><strong>Price per Ticket:</strong> ${flight.priceticket}</p>
            
            {/* Delete Icon */}
            <button 
              onClick={() => handleDelete(index)} 
              className="absolute top-4 right-4 text-red-500 hover:text-red-700"
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        ))
      ) : (
        <p className="text-gray-800">No flight data available. Please ensure you have created flights and saved them properly.</p>
      )}
    </div>
  );
};

export default Confirmation;
