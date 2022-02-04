import React, {useState} from 'react';

// checks if persons array has same name as the user typed to the filter input
const ListGenerator = (props) => {
  //console.log('ListGenerator: tuleeko filtteri sana tänne nyt? true!', props.filterWith);
  //console.log('ListGenerator: tuleeko false',props.loytyy)
  return (
    <li>{props.person.name} {props.person.phonenum} </li>
  )

  // //if true -> returns name and phonenum, if false => returns null
  // if (props.person.name.toLowerCase() === props.filterWith.toLowerCase()) {
  //   return (
  //     <RowGenerator name={props.person.name} phonenum={props.person.phonenum}/>
  //   )
  //   }else {
  //     return (
  //       null
  //     )
  //   }
}

// // returns name and phonenum in <li> element
// const RowGenerator = (props) => {
//   return (
//     <li>{props.name} {props.phonenum}</li>
//   )
// }

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
  //const [loytyy, setLoytyy] = useState(false);
  //const [filtteroity, setFiltteroity] = useState(persons) //by default has persons array



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


  //kutsutaan kun teksti name kentäsä vaihtuu
  const handleTextChange = (event) => {
    console.log('handleTextChange: ', event.target.value)
    setNewName(event.target.value)
  }



  // updating setPhonenumber every time new char is typed to the input
  const handlePhonenumberChange = (event) => {
    console.log('handlePhonenumberChange: ', event.target.value)
    setNewPhonenumber(event.target.value)
  }


 
  // // updating filterWith every time new char is typed to the filter input
  // const handleFilterWith = (event) => {
  //   console.log('handleFilterwith: ', event.target.value);
  //   //jos phonebookista löytyy annettu nimi, niin loytyy state muuttuu true si, muutoin false
  //   //joka kerta jokaisen kirjoitetun hakusanan jälkeen appi katsoo onko phonebookissa jo sama
  //   // for (let i = 0; i < persons.length; i++){
  //   //   if (persons[i].name.toLowerCase()===event.target.value.toLowerCase()) {
  //   //     setLoytyy(true)
  //   //   }
  //   // }

  //   // //toimii kuten pitää
  //   // console.log('handleFilterWith: jos kirjoitat tatti niin tuleeko true', loytyy, event.target.value.toLowerCase())

  //   // //if name is in array then set the name in filtteroity
  //   // if (setLoytyy===true) {
  //   //   setFiltteroity(persons.filter(person => person.name.toLowerCase()===event.target.value.toLowerCase()))
  //   // }

  //   // //if name isn't in array then set persons array content to filtteroity state
  //   // if (setLoytyy===false) {
  //   //   setFiltteroity(persons)
  //   // }

  //   // console.log('handlefilterWith: tuleeko paivitetty lista yhdestä henkilöstä joka kirjoitettiin filtteriin? ', filtteroity)

  //   // // looppaa persons listan läpi ja jos listasta löytyy sama nimi minkä käytätjä on antanut niin filtteröi kyseisen objektin setFiltteröity taulukkoon.
  //   // persons.map(person => {
  //   //   if(person.name === event.target.value) {
  //   //     return (
  //   //       setFiltteroity(persons.filter(person => person.name===event.target.value))
  //   //     )
  //   //   }else {
  //   //     return (
  //   //     setFiltteroity(persons)
  //   //     )
  //   // }})

  //   //sets state
  //   setFilterWith(event.target.value);
  //   console.log('handlFilterWith ', filterWith)
  // }




  return (
    <div>
      filter shown with:
      <input 
        type="text" 
        placeholder="search..." 
        onChange={(event) => { 
          console.log('tuleeko tahan annettu filtterisana? tuleeko string? Funktio sanoo:', event.target.value,  typeof event.target.value)
          return (
            setFilterWith(event.target.value)
          )}}
      />
      <h1>PHONEBOOK</h1>
      <form onSubmit={addName}>
        <div>
          name:  
          <input 
            value={newName} 
            onChange={handleTextChange}
          />
          <div>
            phonenumber: 
            <input 
              value={newPhonenumber} 
              onChange={handlePhonenumberChange}
          />
          </div>
        </div>
        <div>
          <button type="submit">Add contact</button>
        </div>
      </form>
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