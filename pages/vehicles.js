import React, { useState, useEffect } from 'react'

import { getFromSwapi } from '../src/requests'


const Vehicles = (props) => {
  const [vehicles, setVehicles] = useState([])

  useEffect(() => {
    async function fetchVehicles() {
      const response = await getFromSwapi('vehicles')
      const {results: vehiclesHttpResponse} = response

      setVehicles(vehiclesHttpResponse)
    }

    fetchVehicles()
  }, [])

  console.log('vehicles', vehicles)

  return (
    <main>
      <ul>
        {vehicles.map(vehicle => {
          return <li key={vehicle.model}>{vehicle.name}</li>
        })}
      </ul>
    </main>
  )
}

Vehicles.propTypes = {

}

export default Vehicles
