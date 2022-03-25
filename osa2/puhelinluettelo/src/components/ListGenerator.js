import React from 'react';

const ListGenerator = ({ person, deletePersonFromPhonebook }) => {
    return (
        <li>
            {person.name} {person.phonenum} <button onClick={deletePersonFromPhonebook}>delete</button>
        </li>
    )  
}

export default ListGenerator;