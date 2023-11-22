import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function httpGet(endpoint = import.meta.env.VITE_BASE_SWAPI_URL) {
  const request = await fetch(endpoint)
  const response = await request.json()

  console.info('Request Response', response.results, response)

  return response
}
