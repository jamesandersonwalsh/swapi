import { useState, useEffect } from 'react'

import { fetchPeople } from './api'

interface People {
  name: string
}

export function People() {
  const [people, setPeople] = useState<People[]>([])

  useEffect(() => {
    async function doFetchPeople() {
      const { results } = await fetchPeople()
      setPeople(results)
    }

    doFetchPeople()
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
