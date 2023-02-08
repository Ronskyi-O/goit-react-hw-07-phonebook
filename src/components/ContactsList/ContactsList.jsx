import { useDispatch, useSelector } from 'react-redux'
import { deleteContact } from 'redux/contacts.slice'
import { selectFilteredContacts } from 'redux/selector'

import { ContsctList, ContactItem, ContactItemInfo, ContactItemButton } from './ContactsList.styled'

export const ContactsList = () => {
    const filteredContacts = useSelector(selectFilteredContacts)
    const dispatch = useDispatch()

    const onDeleteContact = id => {
        dispatch(deleteContact(id))
    }

    return (
        <ContsctList>
            {filteredContacts.map(({ id, name, number, }) => (
                <ContactItem key={id}>
                    <ContactItemInfo>{name}: {number}</ContactItemInfo>
                    <ContactItemButton onClick={() => onDeleteContact(id)}>Delete</ContactItemButton>
                </ContactItem>
            ))}
        </ContsctList>
    )
}