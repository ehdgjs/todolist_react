import React, {useState} from 'react'
import PropTypes from 'prop-types'

const ContactCreate = (props) => {
    const [contact, setcontact] = useState({
        name : '',
        number : ''
    });

    const { name, number } = contact;

    const handleChange = (e) => {
        const {value, name} = e.target;
        setcontact({
            ...contact,
            [name]: value
        });
    };

    const handleClick = () => {
        const contacts = {
            name: contact.name,
            number: contact.number
        }
        props.onCreate(contacts);
        setcontact({
            name : '',
            number : ''
        })
    }

    return (
        <div>
            <h2>Create Contact</h2>
            <p>
                <input
                    type="text" name="name" placeholder="name"
                    value={contact.name}
                    onChange={handleChange}
                />
                <input
                    type="text" name="number" placeholder="phone"
                    value={contact.number}
                    onChange={handleChange}
                />
            </p>
            <button onClick={handleClick}>Create</button>
        </div>
    )
}

ContactCreate.propTypes = {
    onCreate : PropTypes.func
};

ContactCreate.defaultProps = {
    onCreate: () => {console.log('onCreate not defined');}
}

export default ContactCreate;