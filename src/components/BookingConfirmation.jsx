import { Button, CircularProgress } from '@mui/material';
import { House } from '@mui/icons-material'; // Import only the House icon
import { useState } from 'react';

const BookingConfirmation = () => {
  const [bookingData, setBookingData] = useState(
    JSON.parse(localStorage.getItem('hotelBookings')) || []
  );
  const [totalPassengers, setTotalPassengers] = useState(
    Number(localStorage.getItem('totalPassengers')) || 0
  );
  const [isDeleting, setIsDeleting] = useState(false);

  const deleteBookings = (index) => {
    setIsDeleting(true);
    setTimeout(() => {
      const updatedBookings = [...bookingData];
      updatedBookings.splice(index, 1); // Remove the booking at the specified index
      localStorage.setItem('hotelBookings', JSON.stringify(updatedBookings)); // Update local storage
      setBookingData(updatedBookings); // Update state

      // Update total passengers
      const updatedTotalPassengers = Math.max(0, totalPassengers - 1); // Decrease total passengers by 1
      localStorage.setItem('totalPassengers', updatedTotalPassengers); // Update local storage
      setTotalPassengers(updatedTotalPassengers); // Update state

      setIsDeleting(false);
    }, 1000); // Simulate loading delay
  };

  if (bookingData.length === 0) {
    return <h1 className="text-center text-red-500 text-xl">No booking data found.</h1>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-5 border border-gray-300 rounded-lg shadow-lg bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-800">Hotel Booking Confirmation</h2>
      <p className="text-gray-700 mt-4 text-center"><strong>Total Passengers:</strong> {totalPassengers}</p>

      {/* Flex container for booking cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {bookingData.map((booking, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-lg shadow-md bg-gray-50 hover:bg-gray-100 transition">
            <div className="flex items-center mb-4">
              {booking.hotelImage && <House className="text-gray-600 mr-2" />} {/* Show House icon only if hotel image exists */}
              <h3 className="text-xl font-semibold text-gray-800">{booking.hotelName}</h3>
            </div>
            {booking.hotelImage && ( // Conditionally render the hotel image
              <img
                src={booking.hotelImage}
                alt={booking.hotelName}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            )}
            <p className="text-gray-700"><strong>Price:</strong> ${booking.priceHotel}</p>
            <p className="text-gray-700"><strong>City:</strong> {booking.hotelCity}</p>
            <p className="text-gray-700"><strong>From Date:</strong> {new Date(booking.fromDate).toLocaleDateString()}</p>
            <p className="text-gray-700"><strong>To Date:</strong> {new Date(booking.toDate).toLocaleDateString()}</p>

            <Button
              onClick={() => deleteBookings(index)}
              disabled={isDeleting}
              className={`mt-4 w-full py-2 rounded-lg transition-colors ${isDeleting ? 'bg-red-400' : 'bg-red-600 hover:bg-red-700'} text-white`}
            >
              {isDeleting ? <CircularProgress size={24} color="inherit" /> : 'Delete Booking'}
            </Button>
          </div>
        ))}
      </div>

      <Button
        onClick={() => deleteBookings()} // Optionally delete all bookings
        disabled={isDeleting}
        className={`mt-6 w-full py-2 rounded-lg transition-colors ${isDeleting ? 'bg-red-400' : 'bg-red-600 hover:bg-red-700'} text-white`}
      >
        {isDeleting ? <CircularProgress size={24} color="inherit" /> : 'Delete All Bookings'}
      </Button>

      {/* Additional tickets section */}
      <div className="mt-4">
        <h4 className="text-xl font-semibold text-gray-800">Additional Tickets</h4>
        <p className="text-gray-700">If you have more bookings, they will appear here.</p>
        {/* Render more booking details if applicable */}
      </div>
    </div>
  );
};

export default BookingConfirmation;
