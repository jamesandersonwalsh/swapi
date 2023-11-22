import { useState, useEffect } from 'react'

import { baseUrl, httpGet } from '../utils/request'


export function Characters() {
  const [people, setPeople] = useState([])

  useEffect(() => {
    async function fetchPeople() {
      const response = await httpGet(`${baseUrl}/people`)
      const {results: peopleHttpResponse} = response

      setPeople(peopleHttpResponse)
    }

    fetchPeople()
  }, [])

  return (
    <main>
      <ul>
        {people.map(person => {
          return <li key={person.name}>{person.name}</li>
        })}
      </ul>
    </main>
  )
}
