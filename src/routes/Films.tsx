import { useState, useEffect } from 'react'

import { baseUrl, httpGet } from '../utils/request'


export function Films() {
  const [films, setFilms] = useState([])

  useEffect(() => {
    async function fetchFilms() {
      const response = await httpGet(`${baseUrl}/films`)
      const {results: filmsHttpResponse} = response

      setFilms(filmsHttpResponse)
    }

    fetchFilms()
  }, [])

  return (
    <main>
      <ul>
        {films.map(film => {
          return <li key={film.episode_id}>{film.title}</li>
        })}
      </ul>
    </main>
  )
}
