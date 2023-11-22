const BASE_URL = `${import.meta.env.VITE_BASE_SWAPI_URL}`

export interface SwapiResponse<T> {
  results: T
  next: string
  previous: string
}

export async function get<T>(
  endpoint = import.meta.env.VITE_BASE_SWAPI_URL,
  queryParams?: Record<string, string>,
): Promise<SwapiResponse<T>> {
  const requestUrl = queryParams
    ? `${BASE_URL}/${endpoint}?${new URLSearchParams(queryParams)}`
    : `${BASE_URL}/${endpoint}`

  const request = await fetch(requestUrl, { method: 'GET' })

  return await request.json()
}
