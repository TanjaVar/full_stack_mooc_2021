import React, {useState} from 'react';

//Tila newName on tarkoitettu lomakkeen kentän kontrollointiin.
//Toteutetaan tässä tehtävässä henkilön lisäys puhelinluetteloon.
const ListGenerator = (props) => {
  //console.log(props, 'listgenerator')
  return (
    <li>{props.person.name}</li>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Tanja Varvio'},
    {name: 'tatti'}
  ]);
  const [newName, setName] = useState('type name here');

  //kutsutaan kun buttonia painetaan
  const addName = (event) => {
    event.preventDefault(); // estää oletustoiminnan onClick event
    const personObject = {
      name: newName
    };

    //looppaa arrayn läpi ja jos löytää nimen sieltä niin sitten alert
    // muuttaa 
    let nameFound = false;
    for (let i = 0; i < persons.length; i++) {
      //console.log(newName)
      //console.log(persons[i].name)
      //console.log(persons.length)
      if (newName === persons[i].name) {
        window.alert(`${persons[i].name} is already in PHONEBOOK`)
        nameFound = true
      } 
    }

    if(!nameFound) {
      setPersons(persons.concat(personObject))
    }

    // nollaa newName State
    setName('')
  }

  //kutsutaan kun teksti name kentäsä vaihtuu
  const handleTextChange = (event) => {
    console.log(event.target.value)
    setName(event.target.value)
  }


  return (
    <div>
      <h1>PHONEBOOK</h1>
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