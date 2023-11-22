import { useState, useEffect } from 'react'

import { fetchVehicles } from './api'

interface Vehicle {
  name: string
  model: string
  manufacturer: string
}

export function Vehicles() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([])

  useEffect(() => {
    async function doFetchVehicles() {
      const { results } = await fetchVehicles()

      setVehicles(results)
    }

    doFetchVehicles()
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
