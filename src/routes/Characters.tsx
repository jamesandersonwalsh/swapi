import { useState, useEffect } from 'react'

import { httpGet } from '@/utils'

export function Characters() {
  const [people, setPeople] = useState([])

  useEffect(() => {
    async function fetchPeople() {
      const response = await httpGet(`${import.meta.env.VITE_BASE_SWAPI_URL}/people`)
      const { results: peopleHttpResponse } = response

      setPeople(peopleHttpResponse)
    }

    fetchPeople()
  }, [])

  return (
    <main>
      <ul>
        {people.map((person) => {
          return <li key={person.name}>{person.name}</li>
        })}
      </ul>
    </main>
  )
}
