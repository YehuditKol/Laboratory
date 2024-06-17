
import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:5000'; // Replace with your API's base URL

export const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${BASE_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error; // Propagate the error up to the caller
  }
};

export const postData = async (endpoint, data) => {
  try {
    const response = await axios.post(`${BASE_URL}/${endpoint}`, data);
    return response.data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error; // Propagate the error up to the caller
  }
};