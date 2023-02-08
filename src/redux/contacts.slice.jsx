import { createSlice } from '@reduxjs/toolkit'
import { contactsInitState } from './contacts.initialState';


export const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitState,
    reducers: {
        addContact: (state, action) => {
            state.contacts.push(action.payload);
        },
        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter((contact) => contact.id !== action.payload)
        },
        setFilter: (state, action) => {
            state.query = action.payload
        }
    }
})

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer