import { useState, useEffect } from 'react';
import axios from 'axios';
import istiqlol from '../../assets/img/istiqlol.jpg';
import { Getdata } from '../../api/apiService';
import PassengerSelector from '../../api/PassengerSelector.jsx';
import { Button, Select, MenuItem, InputLabel, FormControl, TextField, Box } from '@mui/material';
import 'tailwindcss/tailwind.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChair, faSuitcaseRolling, faHotel, faCar, faShieldAlt, faGift } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Swiperss } from '../../components/swiper.jsx';

const Home = () => {
  const [cityData, setCityData] = useState([]);
  const [totalPassengers, setTotalPassengers] = useState(1);
  const [currentLocation, setCurrentLocation] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB');
  };

  useEffect(() => {
    const loadCityData = async () => {
      try {
        const data = await Getdata();
        if (Array.isArray(data)) {
          setCityData(data);
        } else {
          console.error('Expected an array but got:', data);
        }
      } catch (error) {
        console.error('Error fetching city data:', error);
      }
    };

    loadCityData();
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        axios
          .get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`)
          .then((response) => {
            const locality = response.data.locality || 'Unknown';
            setCurrentLocation(locality);
          })
          .catch((error) => console.error('Error fetching location:', error));
      },
      (error) => {
        console.error('Error fetching location:', error);
      }
    );
  }, []);

  const handlePassengerUpdate = (total) => {
    setTotalPassengers(total);
    axios
      .post('https://your-api-endpoint.com/passenger-count', { totalPassengers: total })
      .then((response) => console.log('Saved successfully:', response))
      .catch((error) => console.error('Failed to save:', error));
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleCreateFlight = () => {
    const selectedCityData = cityData.find(city => city.city === selectedCity);
    
    const flightData = {
      currentLocation,
      city: selectedCity,
      time: selectedDate,
      totalPerson: totalPassengers,
      imageCity: selectedCityData ? selectedCityData.imageCity : '',
      priceticket: selectedCityData ? selectedCityData.priceticket : '',  
      id: selectedCityData ? selectedCityData.id : '',  
    };
  
    let existingFlights = JSON.parse(localStorage.getItem('flightData'));
  
    if (!Array.isArray(existingFlights)) {
      existingFlights = [];
    }
    
    existingFlights.push(flightData);
  
    localStorage.setItem('flightData', JSON.stringify(existingFlights));
  
    window.location.href = '/confirmation';
  };
  
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative h-[500px] md:h-[600px] lg:h-[740px]">
        <img className="w-full h-full object-cover" src={istiqlol} alt="" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Hello</h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Where do you want to explore?</h1>
          <p className="text-sm md:text-base">{`Current Location: ${currentLocation}`}</p>
        </div>
      </div>

      {/* Search Form Section */}
      <div className="w-full p-4 md:p-8 bg-white shadow-lg">
        <Box 
          width={{ xs: '100%', md: '90%', lg: '80%' }} 
          margin="auto" 
          display="flex" 
          flexDirection={{ xs: 'column', md: 'row' }}
          alignItems="center" 
          gap={2}
        >
          <FormControl fullWidth sx={{ mb: { xs: 2, md: 0 } }}>
            <InputLabel>Current Location</InputLabel>
            <Select
              value={currentLocation}
              onChange={(e) => setCurrentLocation(e.target.value)}
              label="Current Location"
            >
              <MenuItem value="">Select your current location</MenuItem>
              <MenuItem value={currentLocation}>{currentLocation}</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{ mb: { xs: 2, md: 0 } }}>
            <InputLabel>Select City</InputLabel>
            <Select
              value={selectedCity}
              onChange={handleCityChange}
              label="Select City"
            >
              <MenuItem value="">Choose a city</MenuItem>
              {cityData.map((city) => (
                <MenuItem key={city.id} value={city.city}>
                  {city.city}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            type="date"
            label="Select Date"
            InputLabelProps={{ shrink: true }}
            value={selectedDate}
            onChange={handleDateChange}
            fullWidth
            sx={{ mb: { xs: 2, md: 0 } }}
          />

          <PassengerSelector onUpdateTotal={handlePassengerUpdate} />
        </Box>

        <Box 
          width={{ xs: '100%', md: '90%', lg: '80%' }} 
          margin="auto" 
          display="flex" 
          flexDirection={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between" 
          mt={2}
          gap={2}
        >
          <Button 
            variant="contained" 
            color="primary" 
            sx={{ height: 'fit-content', width: { xs: '100%', sm: 'auto' } }}
          >
            Contact Us
          </Button>

          <Button
            variant="contained"
            color="secondary"
            sx={{ height: 'fit-content', width: { xs: '100%', sm: 'auto' } }}
            onClick={handleCreateFlight}
          >
            Create Flight
          </Button>
        </Box>
      </div>

      {/* Icons Grid Section */}
      <div className="p-4">
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-2 gap-2 sm:gap-4 mb-8">
          <Link to="/Seat" className="flex flex-col items-center p-2 sm:p-4 border rounded-lg hover:bg-red-500 hover:text-white transition-colors">
            <FontAwesomeIcon icon={faChair} className="text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2" />
            <span className="text-xs sm:text-sm md:text-base text-center">Seat selection</span>
          </Link>
          
          <Link to="/baggage" className="flex flex-col items-center p-2 sm:p-4 border rounded-lg hover:bg-red-500 hover:text-white transition-colors">
            <FontAwesomeIcon icon={faSuitcaseRolling} className="text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2" />
            <span className="text-xs sm:text-sm md:text-base text-center">Extra baggage</span>
          </Link>

          <Link to="/Book" className="flex flex-col items-center p-2 sm:p-4 border rounded-lg hover:bg-red-500 hover:text-white transition-colors">
            <FontAwesomeIcon icon={faHotel} className="text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2" />
            <span className="text-xs sm:text-sm md:text-base text-center">Book a hotel</span>
          </Link>
          
          <Link to="/Car" className="flex flex-col items-center p-2 sm:p-4 border rounded-lg hover:bg-red-500 hover:text-white transition-colors">
            <FontAwesomeIcon icon={faCar} className="text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2" />
            <span className="text-xs sm:text-sm md:text-base text-center">Rent a car</span>
          </Link>
          
          <Link to="/Seat" className="flex flex-col items-center p-2 sm:p-4 border rounded-lg hover:bg-red-500 hover:text-white transition-colors">
            <FontAwesomeIcon icon={faShieldAlt} className="text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2" />
            <span className="text-xs sm:text-sm md:text-base text-center">Travel insurance</span>
          </Link>
          
          <Link to="/gift" className="flex flex-col items-center p-2 sm:p-4 border rounded-lg hover:bg-red-500 hover:text-white transition-colors">
            <FontAwesomeIcon icon={faGift} className="text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2" />
            <span className="text-xs sm:text-sm md:text-base text-center">Gift Card</span>
          </Link>
        </div>

        {/* Destination Info Section */}
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 md:gap-8">
          <div className="border p-3 sm:p-4 rounded-lg">
            <h2 className="text-lg sm:text-xl font-bold mb-3">Our second destination in Australia: Sydney</h2>
            <img
              src="https://www.turkishairlines.com/_next/image?url=https%3A%2F%2Fcdn.turkishairlines.com%2Fm%2F365ec2e6da06a3cd%2Foriginal%2Fsydney_500x250.jpg&w=640&q=75"
              alt="Aerial view of Sydney Opera House and Sydney Harbour Bridge"
              className="w-full mb-3 rounded-lg"
            />
            <p className="mb-3 text-sm sm:text-base">
              Tickets to Sydney are now available! Our first flight to this vibrant port city in Australia is on November
              28. Purchase tickets now and fly to Sydney, where contemporary design is showcased amid stunning landscapes.
            </p>
            <Link to='https://www.australia.com/en'>
              <button className="bg-red-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded hover:bg-red-600 text-sm sm:text-base">
                Discover
              </button>
            </Link>   
          </div>

          <div className="border p-3 sm:p-4 rounded-lg">
            <h2 className="text-lg sm:text-xl font-bold mb-3">Touristanbul: An amazing experience!</h2>
            <img
              src="https://www.turkishairlines.com/_next/image?url=https%3A%2F%2Fcdn.turkishairlines.com%2Fm%2F16a1746c7150923a%2Foriginal%2Ftouristanbul.jpg&w=640&q=75"
              alt="Aerial view of Bosphorus Bridge in Istanbul"
              className="w-full mb-3 rounded-lg"
            />
            <p className="mb-3 text-sm sm:text-base">
              You can benefit from our complimentary Touristanbul service to make memories which is offered to our
              passengers who have a connecting international flight in Istanbul with a layover between 6-24 hours.
            </p>
            <Link to='https://istanbul-international-airport.com/'>
              <button className="bg-red-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded hover:bg-red-600 text-sm sm:text-base">
                Discover
              </button>
            </Link> 
          </div>
        </div>
      </div>

      <Swiperss />
    </div>
  );
};

export default Home;