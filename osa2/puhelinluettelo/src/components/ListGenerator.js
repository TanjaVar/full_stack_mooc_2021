import React from 'react';

const ListGenerator = ({person}) => {
    return (
        <li>{person.name} {person.phonenum} </li>
    )  
}

export default ListGenerator;