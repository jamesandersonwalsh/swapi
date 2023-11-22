import { fetchFilms } from './api'
import { TypographyH1 } from '@/components/typography'
import { Main } from '@/components/layout'
import { useQuery } from '@tanstack/react-query'
import { Clapperboard } from 'lucide-react'

export function Films() {
  const { isLoading, data, isSuccess } = useQuery({
    queryKey: ['films'],
    queryFn: () => fetchFilms(),
  })

  return (
    <Main>
      <TypographyH1>Films</TypographyH1>
      {isLoading && <Clapperboard className="w-16 h-16 animate-pulse" />}
      {isSuccess && (
        <ul>
          {data?.results.map((film) => {
            return <li key={film.episode_id}>{film.title}</li>
          })}
        </ul>
      )}
    </Main>
  )
}
