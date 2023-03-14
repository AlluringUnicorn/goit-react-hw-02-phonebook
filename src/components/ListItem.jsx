import PropTypes from 'prop-types';

export const ListItem = ({ contacts }) => {
    return (contacts.map(user => <li>{user.name}</li>));
}

ListItem.propTypes = {
    user: PropTypes.array.isRequired,
}