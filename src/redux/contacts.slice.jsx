import { createSlice } from '@reduxjs/toolkit'
import { contactsInitState } from './contacts.initialState';
import { STATUS } from './contacts.status';
import { fetchContacts, deleteContact, addContact } from '../redux/contacts.thunk'

const statusPending = state => {
    state.status = STATUS.loading;
};

const statusRejected = state => {
    state.status = STATUS.error;
};

export const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitState,
    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload;
        },
    },
    extraReducers: {
        [fetchContacts.pending]: statusPending,
        [fetchContacts.fulfilled]: (state, { payload }) => {
            state.status = STATUS.success;
            state.contacts = payload;
        },
        [fetchContacts.rejected]: statusRejected,
        [deleteContact.pending]: statusPending,
        [deleteContact.fulfilled]: (state, { payload }) => {
            state.status = STATUS.success;
            state.contacts = state.contacts.filter(
                contact => contact.id !== payload.id
            );
        },
        [deleteContact.rejected]: statusRejected,
        [addContact.pending]: statusPending,
        [addContact.fulfilled]: (state, { payload }) => {
            state.status = STATUS.success;
            state.contacts.push(payload);
        },
        [addContact.rejected]: statusRejected,
    }
})
export const { setQuery } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer