import { useState, useEffect } from 'react';
import axios from 'axios';
import istiqlol from '../../assets/img/istiqlol.jpg';
import { Getdata } from '../../api/apiService';
import PassengerSelector from '../../api/PassengerSelector.jsx';
import { Button, Select, MenuItem, InputLabel, FormControl, TextField, Box } from '@mui/material';

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
    // Save data to localStorage
    const flightData = {
      currentLocation,
      selectedCity,
      selectedDate,
      totalPassengers,
    };
    localStorage.setItem('flightData', JSON.stringify(flightData));

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

      <div className="absolute bottom-0 left-0 w-full p-8 bg-white shadow-lg">
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
    </div>
  );
};

export default Home;
