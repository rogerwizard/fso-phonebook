import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState(
    [
      { name: 'Arto Hellas' }
    ]
  )
  const [newName, setNewName] = useState('')

  const changeName = (e) => {
    setNewName(e.target.value)
  }

  const formSubmitHandler = (e) => {
    e.preventDefault()
    setPersons(persons.concat(
      { name: newName }
    ))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={formSubmitHandler}>
        <div>
          name: <input value={newName} onChange={changeName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map((person) => (
          <div key={person.name}>
            {person.name}
          </div>
        ))
      }
    </div>
  )
}

export default App
