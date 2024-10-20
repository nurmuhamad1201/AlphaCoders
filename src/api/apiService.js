
import axios from 'axios';


export const Getdata = async () => {
  try {
    const response = await axios.get('https://6603d32e2393662c31cfca36.mockapi.io/api/nf/to-do-modul');
    return response.data;  
  } catch (error) {
    console.error('Error fetching city data:', error);
    throw error;
  }
};
