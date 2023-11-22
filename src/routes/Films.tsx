import { useState, useEffect } from 'react'

import * as request from '@/request'

interface Film {
  title: string
  episode_id: string
  release_date: string
}

export function Films() {
  const [films, setFilms] = useState<Film[]>([])

  useEffect(() => {
    async function fetchFilms() {
      const { results } = await request.get<Film[]>(`${import.meta.env.VITE_BASE_SWAPI_URL}/films`)

      setFilms(results)
    }

    fetchFilms()
  }, [])

  return (
    <main>
      <ul>
        {films.map((film) => {
          return <li key={film.episode_id}>{film.title}</li>
        })}
      </ul>
    </main>
  )
}
