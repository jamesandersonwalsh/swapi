import { useState, useEffect } from 'react'
import { httpGet } from '@/utils'

import { TBody, Table, THead, Tr, Th, Td } from '@/components/table'
import { Main } from '@/components/layout'
import { Button } from '@/components/ui/button'
import { Orbit } from 'lucide-react'
import { TypographyH1, TypographyP } from '@/components/typography'

export interface Planet {
  name: string
  climate: string
  terrain: string
  residents: unknown[]
  films: unknown[]
}

export interface PlanetResponse {
  results: Planet[]
  next: string
}

async function fetchPlanets(
  url = `${import.meta.env.VITE_BASE_SWAPI_URL}/planets`,
): Promise<PlanetResponse> {
  const response = await httpGet<PlanetResponse>(url)

  const { results, next } = response

  return {
    next,
    results: results.map((result) => ({
      name: result.name,
      climate: result.climate,
      terrain: result.terrain,
      residents: result.residents,
      films: result.films,
    })),
  }
}

export function Planets() {
  const [planets, setPlanets] = useState<Planet[]>([])
  const [fetchMoreUrl, setFetchMoreUrl] = useState('')
  const [shouldFetchMore, setShouldFetchMore] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const { results, next } = await fetchPlanets()

      setPlanets(results)
      setFetchMoreUrl(next)
    }

    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const { results, next } = await fetchPlanets(fetchMoreUrl)
      setShouldFetchMore(false)
      setPlanets((planets) => [...planets, ...results])
      setFetchMoreUrl(next)
    }

    if (shouldFetchMore && fetchMoreUrl) {
      fetchData()
    }
  }, [fetchMoreUrl, shouldFetchMore])

  const handleLoadMore = () => {
    setShouldFetchMore(true)
  }

  return (
    <Main>
      <TypographyH1>Planets</TypographyH1>
      <TypographyP className="text-2xl">Total results: {planets.length}</TypographyP>
      <hr />

      <Table>
        <THead>
          <Tr>
            <Th>Name</Th>
            <Th>Climate</Th>
            <Th>Residents</Th>
            <Th>Films</Th>
          </Tr>
        </THead>
        <TBody>
          {planets.map((planet) => {
            return (
              <Tr key={planet.name}>
                {Object.entries(planet).map(([_key, value]) => {
                  return <Td>{value}</Td>
                })}
              </Tr>
            )
          })}
        </TBody>
      </Table>

      <br />
      <Button onClick={handleLoadMore} className="group">
        <Orbit className="mr-2 h-4 w-4 group-hover:animate-spin" />
        Run more planetary scans
      </Button>
    </Main>
  )
}
