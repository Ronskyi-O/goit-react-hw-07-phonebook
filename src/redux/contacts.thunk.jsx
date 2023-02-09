import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

axios.defaults.baseURL = 'https://63e4439c8e1ed4ccf6dd0979.mockapi.io/api/v1/'

export const fetchContacts = createAsyncThunk('contacts', async () => {
    const { data } = await axios.get('/contacts');
    return data;
})

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async ({ name, phone }) => {
        const { data } = await axios.post('/contacts', { name, phone });
        return data;
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async id => {
        const { data } = await axios.delete(`/contacts/${id}`);
        return data;
    }
);