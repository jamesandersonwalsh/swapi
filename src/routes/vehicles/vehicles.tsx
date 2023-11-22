import { useState, useEffect } from 'react'

import * as request from '@/request'

interface Vehicle {
  name: string
  model: string
  manufacturer: string
}

export function Vehicles() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([])

  useEffect(() => {
    async function fetchVehicles() {
      const { results } = await request.get<Vehicle[]>(
        `${import.meta.env.VITE_BASE_SWAPI_URL}/vehicles`,
      )

      setVehicles(results)
    }

    fetchVehicles()
  }, [])

  return (
    <main>
      <ul>
        {vehicles.map((vehicle) => {
          return <li key={vehicle.model}>{vehicle.name}</li>
        })}
      </ul>
    </main>
  )
}
