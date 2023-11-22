import { useState, useEffect } from 'react'

import { fetchFilms } from './api'

interface Film {
  title: string
  episode_id: string
  release_date: string
}

export function Films() {
  const [films, setFilms] = useState<Film[]>([])

  useEffect(() => {
    async function doFetchFilms() {
      const { results } = await fetchFilms()

      setFilms(results)
    }

    doFetchFilms()
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
