import React, {useState} from 'react';
import Contactinfo from './Contactinfo';

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

    const handleChange = (e) => {
        setkeyword(e.target.value);
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
            return (<Contactinfo contact={contact} key={i}/>)
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
        </div>
    );
}

export default Contact;