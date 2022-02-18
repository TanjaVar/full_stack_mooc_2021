import React from 'react';

const Form = ({addName, newName, handleTextChange, newPhonenumber, handlePhonenumberChange}) => {

return (
    <form onSubmit={addName}>
        <div>
            name:  
            <input 
                value={newName} 
                onChange={handleTextChange}
            />
            <div>
                phonenumber: 
                <input 
                value={newPhonenumber} 
                onChange={handlePhonenumberChange}
            />
            </div>
        </div>
        <div>
            <button type="submit">Add contact</button>
        </div>
    </form>
)
}

export default Form;
