import React, {useState} from 'react';

//Tila newName on tarkoitettu lomakkeen kentän kontrollointiin.
//Toteutetaan tässä tehtävässä henkilön lisäys puhelinluetteloon.

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Tanja Varvio'}
  ]);
  const [newName, setName] = useState('type name here');

  //kutsutaan kun buttonia painetaan
  const addName = (event) => {
    event.preventDefault(); // estää oletustoiminnan onClick event

    const personObject = {
      name: newName
    };

    //asettaa uuden listan jossa päiviretty uusi alkio mukana
    setPersons(persons.concat(personObject));
    // nollaa newName State
    setName(' ')
  }

  //kutsutaan kun teksti name kentäsä vaihtuu
  const handleTextChange = (event) => {
    setName(event.target.value)
  }

  const ListGenerator = (props) => {
    //console.log(props, 'listgenerator')
    return (
      <li>{props.person.name}</li>
    )
  }


  return (
    <div>
      <form onSubmit={addName}>
        <div>
          name: 
          <input 
            value={newName} 
            onChange={handleTextChange}
          />
        </div>
        <div>
          <button type="submit">add name</button>
        </div>
      </form>
      <h2>Numbers/Names</h2>
      <ul>
          {persons.map( person => 
            <ListGenerator person={person} key={person.name} />
          )}
      </ul>
    </div>
  )
};

export default App;