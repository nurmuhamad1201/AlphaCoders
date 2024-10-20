import React from 'react';

const BookingConfirmation = () => {
  const bookingData = JSON.parse(localStorage.getItem('hotelBooking'));

  if (!bookingData) {
    return <h1 className="text-center text-red-500">No booking data found.</h1>;
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center">Hotel Booking Confirmation</h2>
      <img src={bookingData.hotelImage} alt={bookingData.hotelName} className="w-full h-48 object-cover rounded-lg mt-4" />
      <h3 className="text-xl mt-2">{bookingData.hotelName}</h3>
      <p><strong>Price:</strong> ${bookingData.priceHotel}</p>
      <p><strong>City:</strong> {bookingData.hotelCity}</p>
      <p><strong>From Date:</strong> {new Date(bookingData.fromDate).toLocaleDateString()}</p>
      <p><strong>To Date:</strong> {new Date(bookingData.toDate).toLocaleDateString()}</p>
      <p><strong>Passenger(s):</strong> {/* Add passenger data if needed */}</p>
    </div>
  );
};

export default BookingConfirmation;
