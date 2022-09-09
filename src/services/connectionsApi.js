import axios from 'axios';
import { BASE_URL } from 'constants/contactsApiConstants';

const instance = axios.create({
  baseURL: BASE_URL,
});

const token = {
  set(token) {
    instance.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  },
  unset() {
    instance.defaults.headers.common['Authorization'] = '';
  },
};

// credentials: { user, email, password }
const createUser = async credentials => {
  const res = await instance.post('/users/signup', credentials);
  return res.data;
};
// credentials: { email, password }
const loginUser = async credentials => {
  const res = await instance.post('/users/login', credentials);
  return res.data;
};

const logoutUser = async () => {
  const res = await instance.post('/users/logout');
  return res.data;
};

const getCurrentUser = async () => {
  const res = await instance.get('/users/current');
  return res.data;
};

export const getAllContacts = async () => {
  const response = await instance.get('/contacts');
  return response.data;
};

export const createContact = async contact => {
  const response = await instance.post('/contacts', contact);
  return response.data;
};

export const removeContact = async id => {
  const response = await instance.delete(`/contacts/${id}`);
  return response.data;
};

const connectionsApi = {
  token,
  createUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  getAllContacts,
  createContact,
  removeContact,
};

export default connectionsApi;
