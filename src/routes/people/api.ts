import * as request from '@/request'

interface People {
  name: string
  hair_color: string
  eye_color: string
  homeworld: string
}

export async function fetchPeople() {
  const { results, next, previous } = await request.get<People[]>('/people')

  return { results, next, previous }
}
