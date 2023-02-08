import { STATUS } from "./contacts.status";

export const contactsInitState = {
    status: STATUS.idle,
    contacts: [],
    query: '',
}