import React from 'react';

const ContactInfo = (props) => {
    return (
        <div>
            <div>{props.contact.name} {props.contact.number}</div>
        </div>
    );
}

export default ContactInfo;