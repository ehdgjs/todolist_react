import React, {useState} from 'react'
import PropTypes from 'prop-types'

const ContactCreate = (props) => {
    const [contact, setcontact] = useState({
        name : '',
        number : ''
    });

    const handleChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        setcontact(nextState)
    }

    const handleClick = () => {

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
                    type="text" name="phone" placeholder="phone"
                    value={contact.number}
                    onChange={handleChange}
                />
            </p>
            <button>Create</button>
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