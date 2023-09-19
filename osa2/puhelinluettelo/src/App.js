import React, {useState, useEffect} from 'react';
import ListGenerator from './components/ListGenerator';
import Filter from './components/Filter';
import Form from './components/Form';
import phonebookService from './services/phonebookPersons'
import Notification from './components/Notification'

//Exercise 2.11 working properly
const App = () => {
  //states
  const [filterWith, setFilterWith] = useState('')
  const [newName, setNewName] = useState('');
  const [newPhonenumber, setNewPhonenumber] = useState('');
  const [persons, setPersons] = useState([])
  const [notificationMessage, setNotificationMessage] = useState('')

  //use effect function which gets data from database and loads axios method only once when component loads
  useEffect(() => {
    console.log('effect')
    phonebookService
    .getAll()
    .then(response => {
      console.log('promise fulfilled! data fetched from database')
      setPersons(response.data)
    })
  }, [])
  console.log('render', persons.length, 'persons')

  // function is called when 'submit' button is pressed on UI
  const addName = (event) => {
    event.preventDefault(); // prevent default onClick event
    console.log("Event: ", event.target) // DEBUG

    //sets input values to object
    const personObject = {
      name: event.target.newName,
      phonenum: event.target.newPhonenumber
    };
    console.log("newPhonenumber: ", personObject.newPhonenumber) // DEBUG

    let nameFound = false;
    for (let i = 0; i < persons.length; i++) {
      //console.log(newName) // DEBUG 
      if (newName.toLowerCase() === persons[i].name.toLowerCase()) {
        if (window.confirm(
          `${personObject.name} 
          and his/her phonenumber is already in phonebook. Do you wish to overwrite old number with new one?`
          )) {
          // find person who's phonenumber is going to be overwrited
          const person = persons.find(person => person.name === personObject.name)
          console.log("person found: ", person) // DEBUG
          // copy const person,but change it with new phonenumber
          const changedPerson = {...person, phonenum: personObject.newPhonenumber}
          console.log("changedPerson: ", changedPerson) // DEBUG

          // call phonebookservices updatePhoneNum function and update database
          phonebookService
          .updatePhoneNum(personObject.id, personObject)
          .then( response => {
            console.log(`AddName: ${personObject.name} new phonenum was successfully added to phonebook`)
            setPersons(persons.map(person => person.name.toLowerCase() !== personObject.name.toLowerCase() ? person : response.data))
/*             setNotificationMessage(`${personObject.name} new phonenum was successfully added to phonebook`)
            setTimeout( () => {
              setNotificationMessage(null)
            }, 4000)  */
          })
          .catch(error => {
            window.alert(`something went wrong while trying to update phonenumber`)
          })
        }
        //window.alert(`${persons[i].name} is already in PHONEBOOK`)
        nameFound = true
      } 
    }
    if(!nameFound) {
      phonebookService
        .create(personObject)
        .then(response => {
          setPersons(persons.concat(response.data))
          console.log(`addName function: new contact sended successfully`) //check from conosle that sent information is correct
        })
    }
    // sets statevalues empty after new object has been added
    setNewName('')
    setNewPhonenumber('')
  }

  //eventHandler: called when text in "name" field is changed
  const handleTextChange = (event) => {
    console.log('handleTextChange: ', event.target.value)
    setNewName(event.target.newName)
  }

  // eventhandler: updating setPhonenumber every time new char is typed to the input
  const handlePhonenumberChange = (event) => {
    console.log('handlePhonenumberChange: ', event.target.value)
    setNewPhonenumber(event.target.newPhonenumber)
  }

  // eventHandler: updating filterWith state
  const handleFilterChange = (newValue) => {
    setFilterWith(newValue)
  }

  //deletes person from Phonebook. gets unique id and person name as parameters
  const deletePerson = ( id, name ) => {
    console.log('deletePerson function: Im working!')
    console.log(`deletePerson: ${id} ${name}`)

    if (window.confirm(`Are you sure you want to delete person ${name} from phonebook?`)) {
      phonebookService
      .deleteFromPhonebook(id)
      .then(promise => {
        console.log('deletePerson function: promise fulfilled yay')
        setPersons(persons.map(person => person.id !== id ? person : promise.data))
/*         setNotificationMessage("Person deleted!")
        setTimeout( () => {
          setNotificationMessage(null)
        }, 4000) */
      })
      .catch(error => {
/*         setNotificationMessage("something went wrong")
          setTimeout( () => {
            setNotificationMessage(null)
          }, 4000) */
      })
      .catch(error => alert('something went wrong'))
    }
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
          // console.log('persons filtering: ', person, person.name, filterWith)
          if (filterWith==="") {
            return person
          } else if (person.name.toLowerCase()===filterWith.toLowerCase()) {
            return person
          }
        }).map(person => {
          return (
            <ListGenerator person={person} key={person.name} deletePersonFromPhonebook={() => deletePerson(person.id, person.name)}/>
          )
        })}
      </ul>
    </div>
  )
};

export default App;