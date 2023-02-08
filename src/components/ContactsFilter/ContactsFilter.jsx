import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from 'redux/contacts.slice'

import { FilterLabel } from './ContactsFilter.styled'

export const ContactsFilter = () => {
    const filter = useSelector((state) => state.contacts.filter)
    const dispatch = useDispatch()

    const onFilterChange = filter => {
        dispatch(setFilter(filter))
    }

    return (
        <FilterLabel>Find contacts by name
            <input
                type="text"
                value={filter}
                onChange={(event) => onFilterChange(event.currentTarget.value)}
            />
        </FilterLabel>
    )
}
