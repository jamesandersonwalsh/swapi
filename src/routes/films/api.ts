import * as request from '@/request'

export interface Film {
  title: string
  episode_id: string
  release_date: string
}

export async function fetchFilms() {
  const { next, previous, results } = await request.get<Film[]>('/films')

  return {
    next,
    previous,
    results,
  }
}
