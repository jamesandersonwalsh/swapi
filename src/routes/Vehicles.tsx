import { useState, useEffect } from 'react'

import { httpGet } from '@/utils'

export function Vehicles() {
  const [vehicles, setVehicles] = useState([])

  useEffect(() => {
    async function fetchVehicles() {
      const response = await httpGet(`${import.meta.env.VITE_BASE_SWAPI_URL}/vehicles`)
      const { results: vehiclesHttpResponse } = response

      setVehicles(vehiclesHttpResponse)
    }

    fetchVehicles()
  }, [])

  console.log('vehicles', vehicles)

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
