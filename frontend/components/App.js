import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  const [characters, setCharacters] = useState([])
  // ❗ Create effects to fetch the data and put it in state
  useEffect(() => {
    axios.all([axios.get(urlPeople), axios.get(urlPlanets)]).then(axios.spread((res1, res2) => {
      const people = []
      res1.data.forEach(person => {
        let Person = {name: person.name, homeworld: person.homeworld}
        people.push(Person)
      });
      people.forEach(person => {
        let filter = res2.data.filter(planet => person.homeworld === planet.id)
        person.homeworld = filter[0].name
      })
      setCharacters(people)
    })).catch(err => console.log(err))
  }, [])
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {characters.map((character, idx) => <Character character={character} key={idx} />)}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
