import { createSlice } from '@reduxjs/toolkit'
import { contactsInitState } from './contacts.initialState';
import { STATUS } from './contacts.status';



export const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitState,
    reducers: {
        contactsLoadingAction: state => {
            state.status = STATUS.loading
        },

        contactsSuccesAction: (state, { payload }) => {
            state.status = STATUS.success;
            state.contacts = payload;
        },

        contactsErrorAction: state => {
            state.status = STATUS.error
        },
    }
})

export const { contactsLoadingAction, contactsSuccesAction, contactsErrorAction } = contactsSlice.actions

export const contactsReducer = contactsSlice.reducer