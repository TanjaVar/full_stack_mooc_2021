import React, {useState, useEffect} from 'react';
import ListGenerator from './components/ListGenerator';
import Filter from './components/Filter';
import Form from './components/Form';
import phonebookService from './services/phonebookPersons'
import Notification from './components/Notification'
import Card from '@mui/material/Card';

const App = () => {
  //states
  const [filterWith, setFilterWith] = useState('')
  const [newName, setNewName] = useState('');
  const [newPhonenumber, setNewPhonenumber] = useState('');
  const [persons, setPersons] = useState([])
  const [notificationMessage, setNotificationMessage] = useState('')

  // use effect function which gets data from database and loads axios method only once when component loads
  useEffect(() => {
    phonebookService
    .getAll()
    .then(response => {
      setPersons(response.data)
    })
  }, [])

  const addName = ( event ) => {
    event.preventDefault(); // prevent default onClick event

      //sets form input values to new object
      const personObject = {
        name: newName,
        phonenum: newPhonenumber
      };

    let nameFound = false;
    for (let i = 0; i < persons.length; i++) {
      if (personObject.name.toLowerCase() === persons[i].name.toLowerCase()) {
        if (window.confirm(
          `${personObject.name} 
          and his/her phonenumber is already in phonebook. Do you wish to overwrite old number with new one?`
          )) {

          phonebookService
          .updatePhoneNum(persons[i].id, personObject)
          .then( response => {
            setPersons(persons.map(p => p.name.toLowerCase() !== personObject.name.toLowerCase() ? p : response.data))
            setNotificationMessage(`${personObject.name} new phonenum was successfully added to phonebook`)
            setTimeout( () => {
              setNotificationMessage(null)
            }, 4000)
          })
          .catch(error => {
            window.alert(`something went wrong while trying to update phonenumber`)
          })
        }
        nameFound = true
      }
    }

    if(!nameFound) {
      phonebookService
        .create(personObject)
        .then(response => {
          setPersons(persons.concat(response.data))
        })
    }
    setNewName('')
    setNewPhonenumber('')
  }

  // Handles newName state
  const handleTextChange = (event) => {
    setNewName(event.target.value)
  }

  // Handles phonenumber state
  const handlePhonenumberChange = (event) => {
    setNewPhonenumber(event.target.value)
  }

  // Handles filterWith state
  const handleFilterChange = (newValue) => {
    setFilterWith(newValue)
  }

  const deletePerson = (id, name) => {
    if (window.confirm(`Are you sure you want to delete person ${name} from phonebook?`)) {
      phonebookService
      .deleteFromPhonebook(id)
      .then(promise => {
        setPersons(persons.map(p => p.id !== id ? p : promise.data))
        setNotificationMessage("Person deleted!")
        setTimeout( () => {
          setNotificationMessage(null)
        }, 4000)
      })
      .catch(error => {
         setNotificationMessage("something went wrong")
          setTimeout( () => {
            setNotificationMessage(null)
          }, 4000)
      })
    }
  }

  return (
    <div>
      <Card variant="outlined" sx={{borderRadius: '5%', margin: '10px', padding: '100px', backgroundColor: 'lightgray'}}>
        <Notification message={notificationMessage}/>
        <h1>PHONEBOOK</h1>
        <h3>Add name</h3>
        <Card sx={{borderRadius: '5%', margin: '10px', padding: '20px'}}>
          <Form 
            addName={addName} 
            newName={newName} 
            handleTextChange={handleTextChange} 
            newPhonenumber={newPhonenumber} 
            handlePhonenumberChange={handlePhonenumberChange}
          />
        </Card>
        <Filter filterWith={filterWith} onChange={handleFilterChange}/>
        <h2>NAME - NUMBER</h2>

          {persons.filter((person) => {
            if (filterWith === "") {
              return person
            } else if (person.name.toLowerCase() === filterWith.toLowerCase()) {
              return person
            }
          }).map(person => {
            return (
              <ListGenerator 
                person={person} 
                key={person.id} 
                deletePersonFromPhonebook={() => deletePerson(person.id, person.name)}
              />
            )
          })}
      </Card>
    </div>
  )
};

export default App;