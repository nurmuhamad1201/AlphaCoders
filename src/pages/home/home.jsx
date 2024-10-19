import { useState, useEffect } from 'react';
import axios from 'axios';
import istiqlol from '../../assets/img/istiqlol.jpg';
import { Getdata } from '../../api/apiService';
import PassengerSelector from '../../api/PassengerSelector.jsx';

const Home = () => {
  const [cityData, setCityData] = useState([]);
  const [totalPassengers, setTotalPassengers] = useState(1);
  const [currentLocation, setCurrentLocation] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  // Format date function
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB'); // Change format as needed
  };

  // Load cities on component mount
  useEffect(() => {
    const loadCityData = async () => {
      try {
        const data = await Getdata(); // Fetch all city data
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

  // Get current location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        axios
          .get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`)
          .then(response => {
            const locality = response.data.locality || 'Unknown';
            setCurrentLocation(locality);
          })
          .catch(error => console.error('Error fetching location:', error));
      },
      (error) => {
        console.error('Error fetching location:', error);
      }
    );
  }, []);

  const handlePassengerUpdate = (total) => {
    setTotalPassengers(total);

    // Save total to API
    axios
      .post('https://your-api-endpoint.com/passenger-count', { totalPassengers: total })
      .then(response => console.log('Saved successfully:', response))
      .catch(error => console.error('Failed to save:', error));
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div>
      <div className='h-[400px] relative'>
        <img className="w-full h-full object-cover" src={istiqlol} alt="" />
        <div className="absolute top-0 left-0 w-full h-full bg-[#554c4c] opacity-50"></div>
        <div className="relative flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-3xl font-bold">Where do you want to explore?</h1>
          <p>{`Current Location: ${currentLocation}`}</p>
        </div>
      </div>

      <div className="w-full p-8 bg-slate-800 shadow-lg">
        {/* Current Location Select */}
        <div className="mb-4">
          <label htmlFor="current-location" className="text-white">Current Location:</label>
          <select
            id="current-location"
            value={currentLocation}
            onChange={(e) => setCurrentLocation(e.target.value)}
          >
            <option value="">Select your current location</option>
            <option value={currentLocation}>{currentLocation}</option>
          </select>
        </div>

        {/* City Selector */}
        <div className="mb-4">
          <label htmlFor="city-select" className="text-white">Select City:</label>
          <select id="city-select" value={selectedCity} onChange={handleCityChange}>
            <option value="">Choose a city</option>
            {cityData.map((city) => (
              <option key={city.id} value={city.city}>{city.city}</option>
            ))}
          </select>
        </div>

        {/* Date Picker */}
        <div className="mb-4">
          <label htmlFor="date-picker" className="text-white">Select Date:</label>
          <input
            type="date"
            id="date-picker"
            value={selectedDate}
            onChange={handleDateChange}
            className="p-2 rounded"
          />
          {selectedDate && (
            <p className="text-white">{`Formatted Date: ${formatDate(selectedDate)}`}</p>
          )}
        </div>

        {/* Passenger Selector */}
        <PassengerSelector onUpdateTotal={handlePassengerUpdate} />
      </div>
    </div>
  );
};

export default Home;
