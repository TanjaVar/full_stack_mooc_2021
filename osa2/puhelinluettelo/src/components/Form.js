import React from 'react';

const Form = ({addName, newName, handleTextChange, newPhonenumber, handlePhonenumberChange}) => {
    return (
        <form onSubmit={addName}>
                name:  
                <input 
                    newName={newName} 
                    onChange={handleTextChange}
                />
                phonenumber: 
                <input 
                    newPhonenumber={newPhonenumber} 
                    onChange={handlePhonenumberChange}
                />
                <button type="submit">Add contact</button>
        </form>
    )
}

export default Form;
