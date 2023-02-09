import { createSlice } from '@reduxjs/toolkit'
import { contactsInitState } from './contacts.initialState';
import { STATUS } from './contacts.status';
import { fetchContacts } from '../redux/contacts.thunk'

export const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitState,
    reducers: {
    },
    extraReducers: {
        [fetchContacts.pending]: state => {
            state.status = STATUS.loading
        },
        [fetchContacts.fulfilled]: (state, { payload }) => {
            state.status = STATUS.success;
            state.contacts = payload;
        },
        [fetchContacts.rejected]: state => {
            state.status = STATUS.error
        },
    }
})

export const contactsReducer = contactsSlice.reducer