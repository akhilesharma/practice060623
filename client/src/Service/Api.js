import axios from 'axios';

const baseUrl = 'http://localhost:8000'; // Make sure to include the protocol (http:// or https://)

export const posttodo = async (title, desc) => {
  try {
    const response = await axios.post(`${baseUrl}/posttodo`, { title, desc });
    return response.data;
  } catch (error) {
    // throw new Error('Failed to create todo', + error.response.data.message);
  }
};
