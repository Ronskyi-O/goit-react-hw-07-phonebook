import { useState } from 'react'
import { nanoid } from 'nanoid'
import { useDispatch, useSelector } from 'react-redux'
import { addContact } from 'redux/contacts.thunk';
import { Form, Label, ButtonAddContact } from './ContactsAddForm.styled'



export function ContactsAddForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();
    const contacts = useSelector((state) => state.contacts.contacts)


    const onAddNewContact = event => {
        event.preventDefault()
        const newContact = {
            id: nanoid(),
            name,
            number,
        };
        const contactInList = contacts.map(contact => (
            contact.name
        ))
        if (contactInList.includes(newContact.name)) {
            alert(`${newContact.name} is already in contacts `)
        } else {
            dispatch(addContact(newContact));
        }
        reset();
    };

    const reset = () => {
        setName('')
        setNumber('')
    }

    return (
        <Form onSubmit={onAddNewContact}>
            <Label>Name
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(event) => setName(event.currentTarget.value)}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required />
            </Label>
            <Label>Number
                <input
                    type="tel"
                    name="number"
                    value={number}
                    onChange={(event) => setNumber(event.currentTarget.value)}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required />
            </Label>
            <ButtonAddContact type='submit'>Add contact</ButtonAddContact>
        </Form>
    )
}
