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
    // Find the selected city object using the selected city name
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
  
     
    const existingFlights = JSON.parse(localStorage.getItem('flightData')) || [];
  
    
    existingFlights.push(flightData);
    
    // Save the updated flights array back to localStorage
    localStorage.setItem('flightData', JSON.stringify(existingFlights));
  
    // Redirect to another page (for example, to "/confirmation")
    window.location.href = '/confirmation';
  };
  
  return (
    <div>
      <div className="relative h-[400px]">
        <img className="w-full h-full object-cover" src={istiqlol} alt="" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold">Where do you want to explore?</h1>
          <p>{`Current Location: ${currentLocation}`}</p>
        </div>
      </div>

      <div className="  w-full p-8 bg-white shadow-lg">
        <Box width='80%' margin="auto" display="flex" alignItems="center" gap={2}>
          <FormControl fullWidth>
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

          <FormControl fullWidth>
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
          />

          <PassengerSelector onUpdateTotal={handlePassengerUpdate} />
        </Box>

        <Box width='80%' margin="auto" display="flex" justifyContent="space-between" mt={2}>
          <Button variant="contained" color="primary" sx={{ height: 'fit-content' }}>
            Contact Us
          </Button>

          <Button
            variant="contained"
            color="secondary"
            sx={{ height: 'fit-content' }}
            onClick={handleCreateFlight}
          >
            Create Flight
          </Button>
        </Box>
      </div>

      <div className="p-4">
       
      <div className="grid grid-cols-2 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 gap-4 mb-8">
        <Link to="/Seat" className="flex flex-col items-center p-4 border rounded-lg hover:bg-red-500 hover:text-white">
          <FontAwesomeIcon icon={faChair} className="text-4xl mb-2" />
          <span>Seat selection</span>
        </Link>
        
        <Link to="/baggage" className="flex flex-col items-center p-4 border rounded-lg hover:bg-red-500 hover:text-white">
          <FontAwesomeIcon icon={faSuitcaseRolling} className="text-4xl mb-2" />
          <span>Extra baggage</span>
        </Link>

        <Link to="/Book" className="flex flex-col items-center p-4 border rounded-lg hover:bg-red-500 hover:text-white">
          <FontAwesomeIcon icon={faHotel} className="text-4xl mb-2" />
          <span>Book a hotel</span>
        </Link>
        
        <Link to="/Car" className="flex flex-col items-center p-4 border rounded-lg hover:bg-red-500 hover:text-white">
          <FontAwesomeIcon icon={faCar} className="text-4xl mb-2" />
          <span>Rent a car</span>
        </Link>
        
        <Link to="/insurance" className="flex flex-col items-center p-4 border rounded-lg hover:bg-red-500 hover:text-white">
          <FontAwesomeIcon icon={faShieldAlt} className="text-4xl mb-2" />
          <span>Travel insurance</span>
        </Link>
        
        <Link to="/gift" className="flex flex-col items-center p-4 border rounded-lg hover:bg-red-500 hover:text-white">
          <FontAwesomeIcon icon={faGift} className="text-4xl mb-2" />
          <span>Gift Card</span>
        </Link>
      </div>

      {/* Grid for Destination Info */}
      <div className="grid lg:grid-cols-1 grid-cols-2 gap-8">
        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Our second destination in Australia: Sydney</h2>
          <img
            src="https://www.turkishairlines.com/_next/image?url=https%3A%2F%2Fcdn.turkishairlines.com%2Fm%2F365ec2e6da06a3cd%2Foriginal%2Fsydney_500x250.jpg&w=640&q=75"
            alt="Aerial view of Sydney Opera House and Sydney Harbour Bridge"
            className="w-full mb-4 rounded-lg"
          />
          <p className="mb-4">
            Tickets to Sydney are now available! Our first flight to this vibrant port city in Australia is on November
            28. Purchase tickets now and fly to Sydney, where contemporary design is showcased amid stunning landscapes.
          </p>
       <Link to='https://www.australia.com/en'><button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Discover</button></Link>   
        </div>

        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Touristanbul: An amazing experience!</h2>
          <img
            src="https://www.turkishairlines.com/_next/image?url=https%3A%2F%2Fcdn.turkishairlines.com%2Fm%2F16a1746c7150923a%2Foriginal%2Ftouristanbul.jpg&w=640&q=75"
            alt="Aerial view of Bosphorus Bridge in Istanbul"
            className="w-full mb-4 rounded-lg"
          />
          <p className="mb-4">
            You can benefit from our complimentary Touristanbul service to make memories which is offered to our
            passengers who have a connecting international flight in Istanbul with a layover between 6-24 hours.
          </p>
         <Link to='https://istanbul-international-airport.com/'><button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Discover</button></Link> 
        </div>
      </div>
    </div>

<Swiperss />


    </div>
  );
};

export default Home;
