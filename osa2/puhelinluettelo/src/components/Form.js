import React from 'react';
import { Card } from '@mui/material';

const Form = ({addName, newName, handleTextChange, newPhonenumber, handlePhonenumberChange}) => {
    return (
        <form onSubmit={addName}>
                <Card variant="transaparent">
                    name:
                    <input class="input"
                        newName={newName} 
                        onChange={handleTextChange}
                    />       
                </Card>
                <Card variant="transaparent">
                    phonenumber: 
                    <input class="input"
                        newPhonenumber={newPhonenumber} 
                        onChange={handlePhonenumberChange}
                    />
                </Card>
                <button class="submitbutton" type="submit">ADD CONTACT</button>
        </form>
    )
}

export default Form;
