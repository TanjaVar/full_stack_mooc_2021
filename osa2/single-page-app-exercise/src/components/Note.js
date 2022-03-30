import React from 'react';

const Note = ({ note, toggleImportance }) => {
    console.log(note)
    const label = note.important
        ? 'make not important'
        : 'make important'
    
    return (
        <li className='noteElement'>
            {note.content}
            <button className='buttonNoteList' onClick={toggleImportance}>{label}</button>
        </li>
    )
};

export default Note;