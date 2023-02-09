import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

axios.defaults.baseURL = 'https://63e4439c8e1ed4ccf6dd0979.mockapi.io/api/v1/'

export const fetchContacts = createAsyncThunk('contacts', async () => {
    const { data } = await axios.get('/contacts');
    return data;
})
