import { fetchPeople } from './api'
import { useQuery } from '@tanstack/react-query'
import { Radar } from 'lucide-react'
import { Main } from '@/components/layout'
import { TypographyH1 } from '@/components/typography'

export function People() {
  const { isLoading, data, isSuccess } = useQuery({
    queryKey: ['people'],
    queryFn: () => fetchPeople(),
  })

  return (
    <Main>
      <TypographyH1>People</TypographyH1>
      {isLoading && <Radar className="w-16 h-16 animate-spin" />}
      {isSuccess && (
        <ul>
          {data?.results.map((person) => {
            return <li key={person.name}>{person.name}</li>
          })}
        </ul>
      )}
    </Main>
  )
}
