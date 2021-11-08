import React, {useState} from 'react';
import Note from './components/Note';

const App = (props) => {
const [notes, setNotes] = useState(props.notes); //ojentaa notes muuttujalle olemasa olevan notes taulukon
const [newNote, setNewNote] = useState('new note...');
const [showImportant, setShowImportant] = useState(true);

const addNote = (event) => {
  event.preventDefault(); // prevent default behavior
  console.log('button clicked', event.target); //console logs event = form element

  // luodaan olio jonka sisältö tulee newNote komponentin tilasta
  const noteObject = {
    content: newNote,
    date: new Date().toISOString(),
    important: Math.random()>0.5, //50% todennäköisyydellä "tärkeä"
    id: notes.length + 1 //generoidaan id muistiinpanojen määrn perusteella
  };

  // generoi uuden arrayn jossa on mukana nyt uusi alkio tietoineen ja sen jälkeen nollaa 
  // tekstikentän teksti
  setNotes(notes.concat(noteObject));
  setNewNote('');
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
          <Note key={note.id} note={note} />
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