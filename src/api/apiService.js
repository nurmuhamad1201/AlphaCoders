// apiService.js
import axios from 'axios';

// Updated function to fetch all cities
export const Getdata = async () => {
  try {
    const response = await axios.get('https://6603d32e2393662c31cfca36.mockapi.io/api/nf/to-do-modul'); // Change to the correct endpoint if needed
    return response.data; // This should return an array of cities
  } catch (error) {
    console.error('Error fetching city data:', error);
    throw error; // Re-throw the error to handle it in the component
  }
};
