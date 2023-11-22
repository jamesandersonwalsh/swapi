import * as request from '@/request'

export interface Planet {
  name: string
  climate: string
  terrain: string
  residents: unknown[]
  films: unknown[]
}

export async function fetchPlanets(page = 1): Promise<request.SwapiResponse<Planet[]>> {
  const { results, next, previous } = await request.get<Planet[]>('/planets', { page: `${page}` })

  return {
    next,
    previous,
    results: results.map((result) => ({
      name: result.name,
      climate: result.climate,
      terrain: result.terrain,
      residents: result.residents,
      films: result.films,
    })),
  }
}
