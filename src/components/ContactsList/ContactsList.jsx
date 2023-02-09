
import { Loader } from 'components/Loader/Loader'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { STATUS } from 'redux/contacts.status'
import { contactsAsyncThunk } from 'redux/contacts.thunk'
// import { deleteContact } from 'redux/contacts.slice'
// import { selectFilteredContacts } from 'redux/selector'

import { ContsctList, ContactItem, ContactItemInfo, ContactItemButton } from './ContactsList.styled'

export const ContactsList = () => {


    // const filteredContacts = useSelector(selectFilteredContacts)
    const dispatch = useDispatch()
    const { contacts, status } = useSelector(state => state.contacts)

    useEffect(() => {
        dispatch(contactsAsyncThunk)
    }, [dispatch])
    const onDeleteContact = id => {
        // dispatch(deleteContact(id))
    }

    return (
        <ContsctList>
            {(status === STATUS.idle || status === STATUS.loading) && <Loader />}
            {status === STATUS.error && <p>Вибачте, сталася помилка</p>}
            {contacts?.map(({ id, name, phone, }) => (
                <ContactItem key={id}>
                    <ContactItemInfo>{name}: {phone}</ContactItemInfo>
                    <ContactItemButton onClick={() => onDeleteContact(id)}>Delete</ContactItemButton>
                </ContactItem>
            ))}
        </ContsctList>
    )
}