import { useState, useEffect } from 'react'

import * as request from '@/request'

interface People {
  name: string
}

export function Characters() {
  const [people, setPeople] = useState<People[]>([])

  useEffect(() => {
    async function fetchPeople() {
      const { results } = await request.get<People[]>(
        `${import.meta.env.VITE_BASE_SWAPI_URL}/people`,
      )
      setPeople(results)
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
