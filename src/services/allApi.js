import axios from 'axios';
import { API_ENDPOINTS, BASE_URL } from './constants';

export const regsiter = async (reqBody) => {
    try {
        const response = await axios.post(`${BASE_URL}${API_ENDPOINTS.USER_AUTH}/register`, reqBody, {
        });
        return response.data;
    } catch (error) {
        console.error('Failed to register:', error);
        throw error;
    }
};

export const login = async (reqBody) => {
    try {
        const response = await axios.post(`${BASE_URL}${API_ENDPOINTS.USER_AUTH}/login`, reqBody, {
        });
        return response.data;
    } catch (error) {
        console.error('Failed to login:', error);
        throw error;
    }
};

export const getUsers = async () => {
  try {
    const token = localStorage.getItem('authToken');
    const response = await axios.get(`${BASE_URL}${API_ENDPOINTS.USERS}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const deleteUser = async (id) => {
    try {
        const token = localStorage.getItem('authToken');
        const response = await axios.delete(`${BASE_URL}${API_ENDPOINTS.USERS}/${id}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    } catch (error) {
        console.log(error);
    }
};