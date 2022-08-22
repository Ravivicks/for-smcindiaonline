import axios from 'axios';



const URL = 'http://localhost:8000';

export const authenticateLogin = async (user) => {
  try {
      return await axios.post(`${URL}/login`, user)
  } catch (error) {
      console.log('error while calling login API: ', error);
      return error.response;
  }
  }

export const addUser = async (data) => {
    try{
      return await axios.post(`${URL}/adduser`, data)
    } catch(error) {
        console.log('error while calling api', error);
    }

}

export const addTest = async (data) => {
  try{
    return await axios.post(`${URL}/addtest`, data)
  } catch(error) {
      console.log('error while calling api', error);
  }

}











