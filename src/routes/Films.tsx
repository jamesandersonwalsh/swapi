import { useState, useEffect } from 'react'

import { httpGet } from '@/utils'

export function Films() {
  const [films, setFilms] = useState([])

  useEffect(() => {
    async function fetchFilms() {
      const response = await httpGet(`${import.meta.env.VITE_BASE_SWAPI_URL}/films`)
      const { results: filmsHttpResponse } = response

      setFilms(filmsHttpResponse)
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
