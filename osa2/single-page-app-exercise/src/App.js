import React, { useState, useEffect } from 'react';
import Note from './components/Note';
import noteService from './services/notes'
import Notifications from './components/Notifications'

const App = (props) => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [showImportant, setShowImportant] = useState(true);
  const [errorMessage, setErrorMessage] = useState('')

  // useFetch performs side affects in function components
  // gets data from db.json with notes.js service module file, after getting data updates state and site rerenders
  useEffect(() => {
    noteService
      .getAll()
      .then(response => {
        setNotes(response.data)
      })
  }, [])

const addNote = (event) => {
    event.preventDefault(); // prevent default behavior
    console.log('button clicked', event.target); //console logs event = form element

    // luodaan olio jonka sisältö tulee newNote komponentin tilasta
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random()>0.5, //50% todennäköisyydellä "tärkeä"
      //id: notes.length + 1,
    };

    noteService
    .create(noteObject)
    .then(returnedNote => {
      setNotes(notes.concat(returnedNote)) //response.data object contains content, date and imoportance
      setNewNote('')
    })
    .catch(error => {
      alert(
        `can't add new note`
      )
    })
  }

  const handleNoteChange = (event) => {
    //syotekentan arvon muutoksella ei ole oletusarvoista toimintaa joten preventDefaultia ei tarvitse 
    console.log('handleNoteChange: ', event.target.value); //event on tapahtumaolio
    setNewNote(event.target.value);
  }

  // ehdollinen operaattori katsoo onko showImportant true
  const notesToShow = !showImportant
    ? notes
    : notes.filter(note => note.important === true);

  //switch note importance 
  const toggleImportanceOf = (id) => {
    const note = notes.find(n => n.id === id) //find the right note with specific id
    const changedNote = {...note, important: !note.important} // make copy of an array and update important value (boolean)

    // sets new note to notes State and if not succeed then error message will be displayed to ui
    //uses update method from notes.js
    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
      .catch(error => {
        // display error message for 5 seconds if error occurs
        setErrorMessage(`Note '${note.content}' was already removed from the server`)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setNotes(notes.filter(n => n.id !== id))
      })
  }


    //onClick tapahtumakäsittelijä asettaa showImportantin vastakkaiseksi arvoksi (boolean)
    // button elementtiin vaihtuu teksti riippuen mikä setImportant staten tila on
    return (
      <div>
        <h1>Notes</h1>
        <Notifications message={errorMessage} />
        <div>
          <button className='showAllButton' onClick={() => setShowImportant(!showImportant)}>
            show {!showImportant ? 'important' : 'all'} notes
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
        <form className='inputSaveNote' onSubmit={addNote}>
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