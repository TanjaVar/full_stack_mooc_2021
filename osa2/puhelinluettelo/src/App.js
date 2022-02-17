import React, {useState} from 'react';

// checks if persons array has same name as the user typed to the filter input
const ListGenerator = (props) => {
  return (
    <li>{props.person.name} {props.person.phonenum} </li>
  )  
}


// filter fuctionality, given parematers: filterWith and onChange
const Filter = (props) => {

  const handleFilterChange = (event) => {
    props.onChange(event.target.value)
  }
  
  return (
    <>
      filter shown with:
      <input 
        value={props.filterWith}
        onChange={handleFilterChange}
      />
    </>
  )
}

const Form = (props) => {

  return (
    <form onSubmit={props.addName}>
    <div>
      name:  
      <input 
        value={props.newName} 
        onChange={props.handleTextChange}
      />
      <div>
        phonenumber: 
        <input 
          value={props.newPhonenumber} 
          onChange={props.handlePhonenumberChange}
      />
      </div>
    </div>
    <div>
      <button type="submit">Add contact</button>
    </div>
  </form>
  )
}


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

  //eventhandler: kutsutaan kun teksti name kentäsä vaihtuu
  const handleTextChange = (event) => {
    console.log('handleTextChange: ', event.target.value)
    setNewName(event.target.value)
  }

  // eventhandler: updating setPhonenumber every time new char is typed to the input
  const handlePhonenumberChange = (event) => {
    console.log('handlePhonenumberChange: ', event.target.value)
    setNewPhonenumber(event.target.value)
  }

  // eventHandler: updating filterwith state
  const handleFilterChange = (newValue) => {
    setFilterWith(newValue)
  } 


  return (
    <div>
      <Filter filterWith={filterWith} onChange={handleFilterChange}/>
      <h1>PHONEBOOK</h1>
      <Form addName={addName} newName={newName} handleTextChange={handleTextChange} newPhonenumber={newPhonenumber} handlePhonenumberChange={handlePhonenumberChange}/>
      <h2>NAMES - NUMBERS</h2>
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