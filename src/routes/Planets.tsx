import { useState, useEffect } from 'react'

import { httpGet } from '@/utils'
import { Table } from '@/components/table'

export function Planets() {
  const [planets, setPlanets] = useState([])
  const [fetchMoreUrl, setFetchMoreUrl] = useState('')
  const [shouldFetchMore, setShouldFetchMore] = useState(false)

  async function fetchPlanets(url = `${import.meta.env.VITE_BASE_SWAPI_URL}/planets`) {
    const response = await httpGet(url)

    const { results: planetsHTTPResult, next: nextPageUrl } = response

    const planetsWithResidents = await fetchPlanetsResidents(planetsHTTPResult)

    setPlanets([...planets, ...planetsWithResidents])
    setFetchMoreUrl(nextPageUrl)
  }

  // fetch the residents of each planet
  async function fetchPlanetsResidents(planets) {
    const planetsWithResidentsPromises = planets.map(async (planet) => {
      const { residents } = planet

      const residentNamePromises = await residents.map(async (residentUrl) => {
        const data = await httpGet(residentUrl)

        return data.name
      })

      const residentNames = await Promise.all(residentNamePromises)

      return {
        ...planet,
        residents: residentNames,
      }
    })

    return await Promise.all(planetsWithResidentsPromises)
  }

  // Initial load
  useEffect(() => {
    fetchPlanets()
  }, [])

  // Pagination
  useEffect(() => {
    if (shouldFetchMore && fetchMoreUrl) {
      fetchPlanets(fetchMoreUrl)
      setShouldFetchMore(false)
    }
  }, [fetchMoreUrl, shouldFetchMore])

  const handleLoadMore = () => {
    setShouldFetchMore(true)
  }

  return (
    <main>
      <h1>Planets</h1>
      <p className="text-2xl">Total results: {planets.length}</p>
      <hr />

      <Table data={planets} />

      <br />
      <button onClick={handleLoadMore}>Load more</button>
    </main>
  )
}
