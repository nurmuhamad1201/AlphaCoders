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

  // Save total passengers to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('totalPassengers', totalPassengers);
  }, [totalPassengers]);

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
    localStorage.setItem('hotelBooking', JSON.stringify(bookingData));

    setModalTitle('Booking Saved');
    setModalMessage('Your request for get Hotel Send!');
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
      <Link to='/BookingConfirmation'> <Button className="    px-6 py-2 rounded flex items-center">
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
            <button
              onClick={saveBooking}
              className="bg-red-600 text-white px-6 py-2 rounded flex items-center"
            >
              Save Booking <i className="fas fa-save ml-2"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-20 text-center px-4">
        <p className="text-gray-700 text-lg">
          When planning trips, holidays, and vacations, enjoy the benefits of booking your accommodation with a Turkish Airlines contracted partner. Reserve your hotel through Booking.com or Jolly and earn 2 Miles for every 1 EUR spent.
        </p>
        <h2 className="mt-10 text-2xl font-bold">
          Accommodation advantages with Booking.com and Jolly
        </h2>
      </div>

      {/* Modal for Confirmation/Error Messages */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" component="h2" gutterBottom>
            {modalTitle}
          </Typography>
          <Typography variant="body2">
            {modalMessage}
          </Typography>
          <Button onClick={handleCloseModal} color="primary" variant="contained" sx={{ mt: 2 }}>
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Book;
