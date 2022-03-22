import React, { useState, useEffect } from 'react';
import Note from './components/Note';
import noteService from './services/notes'

const App = (props) => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('new note...');
  const [showImportant, setShowImportant] = useState(true);

  // useFetch performs side affects in function components
  // gets data from db.json with notes.js service module file, after getting data updates state and site rerenders
  useEffect(() => {
    noteService
      .getAll()
      .then(response => {
        setNotes(response.data)
      })
  }, [])
  //console.log('render', notes.length, 'notes')
  


const addNote = (event) => {
    event.preventDefault(); // prevent default behavior
    console.log('button clicked', event.target); //console logs event = form element

    // luodaan olio jonka sisältö tulee newNote komponentin tilasta
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random()>0.5, //50% todennäköisyydellä "tärkeä"
    };

    noteService
    .create(noteObject)
    .then(response => {
      setNotes(notes.concat(response.data)) //response.data object contains content, date and imoportance
      setNewNote('')
    })
  }

  const handleNoteChange = (event) => {
    //syotekentan arvon muutoksella ei ole oletusarvoista toimintaa joten preventDefaultia ei tarvitse 
    console.log(event.target.value); //event on tapahtumaolio
    setNewNote(event.target.value);
  }

  // ehdollinen operaattori katsoo onko showImportant true
  // jos on niin sitten 
  const notesToShow = !showImportant
    ? notes
    : notes.filter(note => note.important === true);

  //switch note importance 
  const toggleImportanceOf = (id) => {
    //console.log(`importance of ${id} needs to be toggled`)
    const url = `http://localhost:3001/notes/${id}`; //get notes own url
    const note = notes.find(n => n.id === id) //find the right note with specific id
    const changedNote = {...note, important: !note.important} // make copy of an array and replace with new information

    noteService
      .update(id, changedNote)
      .then(response => {
        setNotes(notes.map(note => note.id !== id ? note : response.data))
      })
  }


    //onClick tapahtumakäsittelijä asettaa showImportantin vastakkaiseksi arvoksi (boolean)
    // button elementtiin vaihtuu teksti riippuen mikä setImportant staten tila on
    return (
      <div>
        <h1>Notes</h1>
        <div>
          <button onClick={() => setShowImportant(!showImportant)}>
            show {!showImportant ? 'important' : 'all'}
          </button>
        </div>
        <ul>
          {notesToShow.map(note => 
            <Note 
              key={note.id} 
              note={note} 
              toggleImportance={() => toggleImportanceOf(note.id)}
            />
          )}
        </ul>
        <form onSubmit={addNote}>
          <input 
            value={newNote} 
            onChange={handleNoteChange} 
        />
          <button type="submit">save note</button>
        </form>
      </div>
    );
}


export default App;