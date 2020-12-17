import React, {useState} from 'react';
import update from 'react-addons-update';
import Contactinfo from './Contactinfo';
import ContactDetails from './ContactDetails';

const Contact = () => {
    const [contactData] = useState([{
        name: 'Abet',
        number: "010-0000-0001"
    },
    {
        name: 'Betty',
        number: "010-0000-0002"
    },
    {
        name: 'Charlie',
        number: "010-0000-0003"
    },
    {
        name: 'David',
        number: "010-0000-0004"
    }]);
    const [keyword, setkeyword] = useState('');
    const [selectedKey, setselectedKey] = useState(-1);

    const handleChange = (e) => {
        setkeyword(e.target.value);
    };

    const hadleClick = (key) => {
        setselectedKey(key);
    };

    const mapToComponent = (data) => {
        data.sort();
        data = data.filter(
            (contact)=>{
                return contact.name.toLowerCase()
                .indexOf(keyword) > -1;
            }
            );
        return data.map((contact, i) => {
            return (
            <Contactinfo 
                contact={contact}
                key={i}
                onClick={() => hadleClick(i)}
            />
            )
        })
    };

    return (
        <div>
            <h1>Contact</h1>
            <input
                type="text" name="keyword" placeholder="search"
                value={keyword}
                onChange={handleChange}
            />
            {mapToComponent(contactData)}
            <ContactDetails 
                isSelected={selectedKey !== -1}
                contact={contactData[selectedKey]}
            />
        </div>
    );
}

export default Contact;