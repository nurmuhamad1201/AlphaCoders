import { useEffect, useState } from "react";
import PassengerSelector from "../../api/PassengerSelector";
import {
  Modal,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicketAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Book = () => {
  const [hotels, setHotels] = useState([]); // State to store hotel data
  const [totalPassengers, setTotalPassengers] = useState(1);
  const [selectedHotel, setSelectedHotel] = useState(null); // Initially no hotel selected
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [cities, setCities] = useState([]); // State to store city names
  const [openModal, setOpenModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalTitle, setModalTitle] = useState(''); // Title for the modal

  // Load hotels from API on mount
  useEffect(() => {
    fetch('https://6603d32e2393662c31cfca36.mockapi.io/api/nf/to-do-modul')
      .then(response => response.json())
      .then(data => {
        setHotels(data); // Store the hotel data in state
        setSelectedHotel(data[0]); // Default to the first hotel
        // Extract unique city names from hotel data
        const uniqueCities = [...new Set(data.map(hotel => hotel.hotelCity))];
        setCities(uniqueCities);
      })
      .catch(error => {
        console.error('Error fetching hotels:', error);
      });
  }, []);

  // Load total passengers from local storage on mount
  useEffect(() => {
    const storedTotal = localStorage.getItem('totalPassengers');
    if (storedTotal) {
      setTotalPassengers(Number(storedTotal));
    }
  }, []);

  const saveBooking = () => {
    if (!selectedHotel) {
      setModalTitle('Error');
      setModalMessage('Please select a hotel before saving your booking.');
      setOpenModal(true);
      return;
    }
  
    const bookingData = {
      hotelName: selectedHotel.hotelName,
      priceHotel: selectedHotel.priceHotel,
      fromDate: new Date(fromDate).toISOString(),
      toDate: new Date(toDate).toISOString(),
      hotelImage: selectedHotel.hotelImage,
      hotelCity: selectedHotel.hotelCity,
      id: selectedHotel.id,
    };
  
    // Save to local storage
    const existingBookings = JSON.parse(localStorage.getItem('hotelBookings')) || [];
    existingBookings.push(bookingData);
    localStorage.setItem('hotelBookings', JSON.stringify(existingBookings));
  
    // Retrieve the current total passengers from local storage
    const storedTotal = localStorage.getItem('totalPassengers');
    const currentTotal = storedTotal ? Number(storedTotal) : 0;
  
    // Add the new passengers to the current total
    const newTotalPassengers = currentTotal + totalPassengers;
  
    // Update local storage with the new total
    localStorage.setItem('totalPassengers', newTotalPassengers);
  
    setModalTitle('Booking Saved');
    setModalMessage('Your request for the hotel has been sent!');
    setOpenModal(true);
  };
  
  // Function to handle modal close
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  

  return (
    <div className="relative">
      <img
        src="https://placehold.co/1920x1080"
        alt="Aerial view of a resort with pools and lounge areas"
        className="w-full h-96 object-cover"
      />

      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-4xl font-bold">
          Hotel booking with Booking.com and Jolly
        </h1>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 bg-white shadow-lg rounded-lg p-6">
        <Link to='/BookingConfirmation'> <Button className="px-6 py-2 rounded flex items-center">
          <FontAwesomeIcon icon={faTicketAlt} className="mr-2" />
          See tickets
        </Button></Link>
        <div className="flex space-x-4">
          {/* Hotel Selection */}
          <div className="flex-1">
            <label className="block text-gray-700">Hotel</label>
            <select
              value={selectedHotel ? selectedHotel.id : ''}
              onChange={(e) => {
                const hotel = hotels.find(hotel => hotel.id === e.target.value);
                setSelectedHotel(hotel);
              }}
              className="border text-black rounded p-2 mt-1 w-full"
            >
              {hotels.map((hotel) => (
                <option key={hotel.id} value={hotel.id}>{hotel.hotelName}</option>
              ))}
            </select>
          </div>

          {/* City Selection */}
          <div className="flex-1">
            <label className="block text-gray-700">City</label>
            <select
              className="border rounded p-2 mt-1 w-full text-black" // Text color set to black
            >
              {cities.map((city, index) => (
                <option key={index} value={city}>{city}</option>
              ))}
            </select>
          </div>

          {/* From Date */}
          <div className="flex-1">
            <label className="block text-gray-700">From Date</label>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="border text-black placeholder-gray-700 rounded p-2 mt-1 w-full"
            />
          </div>

          {/* To Date */}
          <div className="flex-1">
            <label className="block text-gray-700">To Date</label>
            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="border text-black rounded p-2 mt-1 w-full"
            />
          </div>

          {/* Passengers */}
          <div className="flex-1">
            <label className="block text-gray-700">Passenger(s)</label>
            <PassengerSelector onUpdateTotal={setTotalPassengers} />
          </div>

          {/* Save Button */}
          <div className="flex items-end">
          <Button onClick={saveBooking} className="bg-blue-500 text-white px-4 py-2 rounded">
          Save Booking
          </Button>

          </div>
        </div>
      </div>

      <div className="mt-20 text-center px-4">
        <p className="text-gray-700 text-lg">
          When booking hotels, you can enjoy all the amenities and leisure
          options, along with great customer service!
        </p>
      </div>

      {/* Modal for Booking Confirmation/Error */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box className="bg-white p-4 rounded">
          <Typography variant="h6">{modalTitle}</Typography>
          <Typography>{modalMessage}</Typography>
          <Button onClick={handleCloseModal} className="mt-4">
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Book;
