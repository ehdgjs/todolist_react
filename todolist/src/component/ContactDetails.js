import React from 'react';

const ContactDetails = (props) => {
    // {props.contact.name} {props.contact.number}
    const details = (
    <div>
        <p>{props.contact.name}</p>
        <p>{props.contact.number}</p>
    </div>
    );
    const blank = (<div>Not selected</div>);

    return (
        <div>{props.isSelected ? details : blank}</div>
    );
}

//props contact가 값이 없을 경우를 위해 기본값 설정
ContactDetails.defaultProps = {
    contact: {
        name: '',
        number: ''
    }
}

export default ContactDetails;