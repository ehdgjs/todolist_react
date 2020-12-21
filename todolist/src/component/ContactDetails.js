import React, {useState} from 'react';
import PropTypes from 'prop-types'


const ContactDetails = (props) => {
    const [isEdit, setIsEdit] = useState(false);
    const [contact, setcontact] = useState({
        name : '',
        number : ''
    });

    const handleToggle = () => {
        if(!isEdit){
            setcontact({
                name: props.contact.name,
                number: props.contact.number
            })
        } else {
            handleEdit();
        }
        //setState는 비동기이다.
        setIsEdit(!isEdit);
    };
    
    const handleChange = (e) => {
        const {value, name} = e.target;
        setcontact({
            ...contact,
            [name]: value
        });
    };

    const handleEdit = () => {
        props.onEdit(contact.name, contact.number);
    }

    const details = (
    <div>
        <p>{props.contact.name}</p>
        <p>{props.contact.number}</p>
    </div>
    );
    const blank = (<div>Not selected</div>);

    const edit = (
        <div>
            <p>
                <input
                    type="text" name="name" placeholder="name"
                    value={contact.name}
                    onChange={handleChange}
                />
            </p>
            <p>
                <input
                    type="text" name="number" placeholder="phone"
                    value={contact.number}
                    onChange={handleChange}
                />
            </p>
        </div>
    );

    const view = isEdit ? edit : details;

    return (
        <div>
            <h2>Details</h2>
            {props.isSelected ? view : blank}
            <p>
                <button onClick={handleToggle}>
                    {
                        isEdit ? 'OK' : 'Edit'
                    }
                </button>
                <button onClick={props.onRemove}>Remove</button>
            </p>
        </div>
    );
}

//props contact가 값이 없을 경우를 위해 기본값 설정
ContactDetails.defaultProps = {
    contact: {
        name: '',
        number: ''
    },
    onRemove: () => {console.error('onRemove not defined');},
    onEdit: () => {console.error('onEdit not defined');}
}
ContactDetails.propTypes = {
    contact: PropTypes.object,
    onRemove: PropTypes.func,
    onEdit: PropTypes.func
}

export default ContactDetails;