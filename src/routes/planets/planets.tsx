import { useQuery } from '@tanstack/react-query'

import { TBody, Table, THead, Tr, Th, Td } from '@/components/table'
import { Main } from '@/components/layout'
import { Button } from '@/components/ui/button'
import { Orbit } from 'lucide-react'
import { TypographyH1, TypographyP } from '@/components/typography'
import { fetchPlanets } from './api'
import { useState } from 'react'

export function Planets() {
  const [page, setPage] = useState(1)
  const { isLoading, data, isSuccess } = useQuery({
    queryKey: ['planets', page],
    queryFn: () => fetchPlanets(page),
  })

  const handleLoadMore = () => {
    if (!!data?.next) {
      setPage((old) => old + 1)
    }
  }

  return (
    <Main>
      <TypographyH1>Planets</TypographyH1>
      <TypographyP className="text-2xl">
        Total results: {!!data?.results.length ? data.results.length : 0}
      </TypographyP>
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
          {isLoading && <Orbit className="w-16 h-16 animate-spin" />}
          {isSuccess &&
            data?.results.map((planet) => {
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
