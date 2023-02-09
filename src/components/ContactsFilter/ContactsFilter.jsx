// import { useDispatch, useSelector } from 'react-redux'
// import { setFilter } from 'redux/contacts.slice'

import { FilterLabel } from './ContactsFilter.styled'

export const ContactsFilter = () => {
    // const query = useSelector((state) => state.contacts.query)
    // const dispatch = useDispatch()

    const onFilterChange = query => {
        // dispatch(setFilter(query))
    }

    return (
        <FilterLabel>Find contacts by name
            <input
                type="text"
                // value={query}
                onChange={(event) => onFilterChange(event.currentTarget.value)}
            />
        </FilterLabel>
    )
}
