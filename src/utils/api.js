import axios from 'axios';

axios.defaults.baseURL = 'https://63cbc5ae9b72d2a88e01c699.mockapi.io/';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function deleteContact(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}

export async function addContact(data) {
  const { data: result } = await axios.post(`/contacts/`, data);
  return result;
}
