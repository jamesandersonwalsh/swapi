import { useQuery } from '@tanstack/react-query'
import { Rocket } from 'lucide-react'

import { fetchVehicles } from './api'
import { Main } from '@/components/layout'
import { TypographyH1 } from '@/components/typography'

export function Vehicles() {
  const { isLoading, data, isSuccess } = useQuery({
    queryKey: ['vehicles'],
    queryFn: () => fetchVehicles(),
  })

  return (
    <Main>
      <TypographyH1>Vehicles</TypographyH1>
      {isLoading && <Rocket className="w-16 h-16 animate-pulse" />}
      {isSuccess && (
        <ul>
          {data?.results.map((vehicle) => {
            return <li key={vehicle.model}>{vehicle.name}</li>
          })}
        </ul>
      )}
    </Main>
  )
}
