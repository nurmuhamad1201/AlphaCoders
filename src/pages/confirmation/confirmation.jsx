import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlane } from '@fortawesome/free-solid-svg-icons';
import QRCode from 'react-qr-code';

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
    <div className="grid grid-cols-1 gap-6 p-6 bg-gray-100 min-h-screen">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
        </div>
      ) : flights.length > 0 ? (
        flights.map((flight, index) => (
          <div key={index} className="relative bg-white border border-gray-300 rounded-lg shadow-lg p-4 mb-4 max-w-lg mx-auto">
            <div className="flex justify-between items-center border-b pb-2 mb-2">
              <h2 className="text-xl font-semibold text-blue-600 flex items-center">
                <FontAwesomeIcon icon={faPlane} className="text-blue-500 mr-2" />
                Flight {index + 1}
              </h2>
              {/* Delete Icon */}
              <button 
                onClick={() => handleDelete(index)} 
                className="text-red-500 hover:text-red-700"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <p className="text-gray-800 mb-1"><strong>City:</strong> {flight.city}</p>
                <p className="text-gray-800 mb-1"><strong>Time:</strong> {new Date(flight.time).toLocaleString()}</p>
                <p className="text-gray-800 mb-1"><strong>Total Passengers:</strong> {flight.totalPerson}</p>
                <p className="text-gray-800 mb-1"><strong>Price per Ticket:</strong> ${flight.priceticket}</p>
              </div>

              {/* QR Code and Barcode */}
              <div className="flex flex-col items-center">
                <QRCode value={`Flight-${index + 1}`} size={50} className="mb-2" />
                <div className="w-24 h-4 bg-gray-200 mt-1 rounded-sm relative overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-r from-black to-transparent via-gray-800 bg-repeat-x bg-clip-text" 
                    style={{ maskImage: 'url(https://upload.wikimedia.org/wikipedia/commons/6/6b/UPC-A-036000291452.svg)', maskSize: 'cover' }}>
                  </div>
                </div>
              </div>
            </div>

            {/* Flight Details Section */}
            <div className="border-t pt-2 mt-2 text-center text-gray-700">
              <p className="text-sm">
                Experience a smooth journey with us. Ensure you arrive at least 2 hours prior to the scheduled departure time. 
              </p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-800">No flight data available. Please ensure you have created flights and saved them properly.</p>
      )}
    </div>
  );
};

export default Confirmation;
