
import axios from 'axios'
import { contactsLoadingAction, contactsSuccesAction, contactsErrorAction } from '../redux/contacts.slice'

axios.defaults.baseURL = 'https://63e4439c8e1ed4ccf6dd0979.mockapi.io/api/v1/'

export const contactsAsyncThunk = async dispatch => {
    dispatch(contactsLoadingAction())
    try {
        const { data } = await axios.get('/contacts');
        dispatch(contactsSuccesAction(data))
        return data
    } catch {
        dispatch(contactsErrorAction())
    }
}