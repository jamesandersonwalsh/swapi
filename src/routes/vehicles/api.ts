import * as request from '@/request'

export interface Vehicle {
  name: string
  model: string
  manufacturer: string
}

export async function fetchVehicles() {
  const { results, next, previous } = await request.get<Vehicle[]>('/vehicles')

  return { results, next, previous }
}
