import React, {useState} from 'react';
import ListGenerator from './components/ListGenerator';
import Filter from './components/Filter';
import Form from './components/Form';

const App = () => {
  //states
  const [filterWith, setFilterWith] = useState('')
  const [persons, setPersons] = useState([
    {
      name: 'Tanja',
      phonenum: '056 943 94343'
    },
    {
      name: 'tatti',
      phonenum: '456 0323 9323'
    },
    {
      name: 'Make',
      phonenum: '04363465346346'
    },
    {
      name: 'Taateli',
      phonenum: '34653 363643'
    },
    {
      name: 'Puuteli',
      phonenum: '324 4235 52352'
    }
  ]);
  const [newName, setNewName] = useState('');
  const [newPhonenumber, setNewPhonenumber] = useState('');

  // function is called when 'submit' button is pressed on UI
  const addName = (event) => {
    event.preventDefault(); // prevent default onClick event

    //sets input values to object
    const personObject = {
      name: newName,
      phonenum: newPhonenumber
    };

    let nameFound = false;
    for (let i = 0; i < persons.length; i++) {
      if (newName.toLowerCase() === persons[i].name.toLowerCase()) {
        window.alert(`${persons[i].name} is already in PHONEBOOK`)
        nameFound = true
      } 
    }
    if(!nameFound) {
      setPersons(persons.concat(personObject))
    }

    // sets statevalues empty after new object has been added
    setNewName('')
    setNewPhonenumber('')
  }

  //eventHandler: called when text in "name" field is changed
  const handleTextChange = (event) => {
    console.log('handleTextChange: ', event.target.value)
    setNewName(event.target.value)
  }

  // eventhandler: updating setPhonenumber every time new char is typed to the input
  const handlePhonenumberChange = (event) => {
    console.log('handlePhonenumberChange: ', event.target.value)
    setNewPhonenumber(event.target.value)
  }

  // eventHandler: updating filterWith state
  const handleFilterChange = (newValue) => {
    setFilterWith(newValue)
  } 


  return (
    <div>
      <Filter filterWith={filterWith} onChange={handleFilterChange}/>
      <h1>PHONEBOOK</h1>
      <h3>Add a name</h3>
      <Form addName={addName} newName={newName} handleTextChange={handleTextChange} newPhonenumber={newPhonenumber} handlePhonenumberChange={handlePhonenumberChange}/>
      <h2>NAME - NUMBER</h2>
      <ul>
        {persons.filter((person) => {
          console.log('persons filtering: ', person, person.name, filterWith)
          if (filterWith==="") {
            return person
          } else if (person.name.toLowerCase()===filterWith.toLowerCase()) {
            return person
          }
        }).map(person => {
          return (
            <ListGenerator person={person} key={person.name} />
          )
        })}
      </ul>
    </div>
  )
};

export default App;